export const sendWelcomeEmail = async (transporter, to, name = "there") => {
  const mailOptions = {
    from: '"YourBrand" <your@email.com>',
    to,
    subject: "Welcome to YourBrand 🎉",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #fff; border-radius: 8px;">
        <div style="text-align: center;">
          <img src="https://yourdomain.com/logo.png" alt="YourBrand" style="width: 120px;" />
        </div>
        <h2>Welcome, ${name}!</h2>
        <p>Thanks for signing up with YourBrand. We're excited to have you!</p>
        <p style="text-align: center;">
          <a href="https://yourdomain.com/dashboard" style="background-color: #28a745; color: white; padding: 14px 20px; border-radius: 4px; text-decoration: none;">Go to Dashboard</a>
        </p>
        <p>If you have any questions, just reply to this email — we're here to help.</p>
        <p>– The YourBrand Team</p>
      </div>
    `,
  };

  const response = await transporter.sendMail(mailOptions);
  console.info("Email successfully", response);
};

export const sendForgotPasswordEmail = async (transporter, to, resetLink) => {
  const mailOptions = {
    from: '"YourBrand" <your@email.com>',
    to,
    subject: "Reset Your Password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #fff; border-radius: 8px;">
        <div style="text-align: center;">
          <img src="https://yourdomain.com/logo.png" alt="YourBrand" style="width: 120px;" />
        </div>
        <h2>Reset Your Password</h2>
        <p>We received a request to reset your password. Click the button below:</p>
        <p style="text-align: center;">
          <a href="${resetLink}" style="background-color: #007bff; color: white; padding: 14px 20px; border-radius: 4px; text-decoration: none;">Reset Password</a>
        </p>
        <p>If you didn’t request this, you can ignore this email.</p>
        <p>– The YourBrand Team</p>
      </div>
    `,
  };

  const response = await transporter.sendMail(mailOptions);
  console.info("Email successfully", response);
};
