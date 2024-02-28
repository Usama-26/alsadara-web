// pages/api/submit-form.js

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "daniyalrasheed343@gmail.com",
    pass: "QtGkSYqhdAnfZTCa",
  },
});

const sendEmail = async (formData) => {
  try {
    // Construct the email message
    const mailOptions = {
      from: "contact@alsadara.com",
      to: "daniyalrasheed343@gmail.com",
      subject: "Contact Form",
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Phone: ${formData.phone}
        Message: ${formData.message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, subject, phone } = req.body;

    try {
      await sendEmail({ name, email, message, phone, subject });
      res.status(200).json({ message: "Form submitted successfully." });
    } catch (error) {
      console.error("Failed to submit form. Please Try Again Later.");
      res
        .status(500)
        .json({ error: "Failed to submit form. Please Try Again Later." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}