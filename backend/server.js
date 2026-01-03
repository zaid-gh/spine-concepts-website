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

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "https://spine-concepts.com",
      "https://www.spine-concepts.com",
    ],
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
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: "Missing required fields: name, email, or message",
    });
  }

  try {
    const result = await resend.emails.send({
      from: "Spine Concepts <onboarding@resend.dev>",
      to: "pdforthodoxo@gmail.com",
      reply_to: email,
      subject: `Nuevo mensaje desde Spine Concepts`,
      html: `
        <h2>Nuevo mensaje del formulario</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Resend result:", result);

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
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Modo: ${process.env.NODE_ENV || "development"}`);
});
