import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

const resend = new Resend(process.env.RESEND_API_KEY);

// CORS para producción
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "https://spine-concepts.com",
      "https://www.spine-concepts.com",
    ],
    methods: ["POST"],
  })
);

app.use(express.json());

// Endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validación
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Missing required fields: name, email, or message" });
  }

  try {
    await resend.emails.send({
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

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email with Resend:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Modo: ${process.env.NODE_ENV || "development"}`);
});
