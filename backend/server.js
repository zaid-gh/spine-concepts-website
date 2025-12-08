import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

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

  // Validación de entradas
  if (!name || !email || !message) {
    return res
      .status(400)
      .send("Missing required fields: name, email, or message");
  }

  // transporter de nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // correo
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    replyTo: `"${name}" <${email}>`,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

// servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Modo: ${process.env.NODE_ENV || "development"}`);
});
