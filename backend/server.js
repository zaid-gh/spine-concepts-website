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

// --- Middlewares ---
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
      error: "Missing required fields: name, email, or message",
    });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
  if (!emailOk) {
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
      subject: `Nuevo mensaje desde Spine Concepts — ${String(name).trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.4;">
          <h2>Nuevo mensaje del formulario</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(String(name).trim())}</p>
          <p><strong>Email:</strong> ${escapeHtml(String(email).trim())}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(
            String(message).trim()
          )}</p>
        </div>
      `,
    });

    if (result?.error) {
      console.error("Resend error:", result.error);
      return res.status(502).json({
        ok: false,
        error: result.error.message || "Resend error",
      });
    }

    console.log("Resend success:", result);

    return res.status(200).json({
      ok: true,
      message: "Email sent successfully",
      resend: result,
    });
  } catch (error) {
    console.error("Error sending email with Resend:", error);
    return res.status(500).json({
      ok: false,
      error: error?.message || "Error sending email",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
  console.log(`Mode: ${process.env.NODE_ENV || "development"}`);
});

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
