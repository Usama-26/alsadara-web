// pages/api/file-submit.js

import multer from "multer";
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

const sendEmail = async (files) => {
  try {
    // Construct the email message
    const mailOptions = {
      from: "partner@alsadara.com",
      to: "supplychain@alsadaraco.com",

      subject: "Files Submission",
      text: "Files received from partner.",
      attachments: files.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
      })),
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory as buffers
});

export const config = {
  api: {
    bodyParser: false, // Disable built-in bodyParser to handle it manually with multer
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload.array("attachments")(req, res, async (err) => {
      if (err) {
        console.error("Error uploading files:", err);
        return res.status(500).json({ error: "Error uploading files" });
      }

      try {
        // Send the email with uploaded files as attachments
        await sendEmail(req.files);
        res.status(200).json({
          message:
            "Your files have been submitted successfully  your form. We will shortly get back to you through your email.",
        });
      } catch (error) {
        res
          .status(500)
          .json({ error: "Something went wrong! Please try again later." });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).send(`Method ${req.method} Not Allowed`);
  }
}
