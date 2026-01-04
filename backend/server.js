import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is missing in environment variables");
}

const TO_EMAIL = "pdforthodoxo@gmail.com";
const FROM_EMAIL = "Spine Concepts <contact@spine-concepts.com>";

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: [
      "https://spine-concepts.com",
      "https://www.spine-concepts.com",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
    methods: ["POST", "GET", "OPTIONS"],
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "spine-concepts-backend",
    hasResendKey: !!process.env.RESEND_API_KEY,
    time: new Date().toISOString(),
  });
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: "Missing required fields",
    });
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

  if (!emailIsValid) {
    return res.status(400).json({
      ok: false,
      error: "Invalid email address",
    });
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: String(email).trim(),
      subject: `New message from Spine Concepts — ${String(name).trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.4;">
          <h2>New contact form message</h2>
          <p><strong>Name:</strong> ${escapeHtml(String(name).trim())}</p>
          <p><strong>Email:</strong> ${escapeHtml(String(email).trim())}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(
            String(message).trim()
          )}</p>
        </div>
      `,
    });

    if (result?.error) {
      return res.status(502).json({
        ok: false,
        error: result.error.message || "Email service error",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Email sent successfully",
      resend: result,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error?.message || "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
