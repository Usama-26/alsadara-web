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

const sendEmail = async (files, body) => {
  try {
    // Extract relevant fields from req.body for email content
    const { companyName, address, country, city, zipcode, webAddress } = body;

    // Construct the email message with form data and attachments
    const mailOptions = {
      // from: "vendor@alsadara.com",
      from: "Alsadara Vendor Portal <vendor@alsadara.com>",
      // to: "supplychain@alsadaraco.com",
      to: "daniyalrasheed343@gmail.com",
      subject: "Vendor Form Submission",
      text: `
        Vendor Form Submission:

        Company Name: ${companyName}
        Address: ${address}
        Country: ${country}
        City: ${city}
        Zip Code: ${zipcode}
        Website URL: ${webAddress}
      `,
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
    // Pass both req.files and req.body to upload.array
    upload.array("attachments")(req, res, async (err) => {
      if (err) {
        console.error("Error uploading files:", err);
        return res.status(500).json({ error: "Error uploading files" });
      }

      try {
        // Send the email with uploaded files and form data
        await sendEmail(req.files, req.body);
        res.status(200).json({
          message:
            "Your Form has been submitted successfully. We will shortly get back to you through your email.",
        });
      } catch (error) {
        res
          .status(500)
          .json({ error: "Something went wrong! Please try again later." });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
