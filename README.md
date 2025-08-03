# 📧 Node.js Email Sender with Nodemailer

This project demonstrates how to send **welcome** and **forgot password** emails using [Nodemailer](https://nodemailer.com/) in Node.js, complete with custom HTML templates and environment configuration.

---

## 🚀 Features

- ✅ Send **Welcome Emails** with personalized names
- 🔒 Send **Forgot Password Emails** with secure links
- 🔧 Uses Gmail SMTP (can be configured for others)
- 📄 Clean, branded HTML email templates
- 🛠 Environment variable support via `.env`

---

## 📦 Installation

```bash
git clone https://github.com/itsbrijeshio/email-api-nodemailer.git
cd email-api-nodemailer
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```env
MAIL_USER=your-email@example.com
MAIL_PASS=your-password
```

> 🔐 _Don't include your SMTP credentials directly in source code for production. Use secure environment storage._

---

## 📁 Project Structure

```
.
├── templates.js         # Email template functions
├── index.js             # Entry point to send emails
├── .env                 # Environment variables
├── package.json
└── README.md
```

## 📬 Email Template Functions

In `templates.js`:

- `sendForgotPasswordEmail(transporter, toEmail, resetLink)`
- `sendWelcomeEmail(transporter, toEmail, recipientName)`

Each function builds a branded HTML email and sends it via the provided `transporter`.

---

## 🛑 Security Warning

Do **NOT** hardcode real email credentials in code (as in this example):

```js
auth: {
  user: "your-email@gmail.com",
  pass: "your-app-password",
}
```
