import { createTransport } from "nodemailer";
import { sendForgotPasswordEmail, sendWelcomeEmail } from "./templates.js";
import { config } from "dotenv";

config();

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "kalilinux108705@gmail.com",
    pass: "iauyicmcaatjycwr",
  },
});

// Example: Send reset password email
// sendForgotPasswordEmail(
//   transporter,
//   process.env.MAIL_USER,
//   "https://example.com/reset?token=abc123"
// );

// Example: Send welcome email
sendWelcomeEmail(transporter, process.env.MAIL_USER, "John");
