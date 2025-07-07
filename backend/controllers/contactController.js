// backend/controllers/contactController.js
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

export const submitContactForm = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    // Save to MongoDB
    const newContact = new Contact({ firstName, lastName, email, phone, message });
    await newContact.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "caddtechtnj@gmail.com",
      subject: `New Contact Message from ${firstName} ${lastName}`,
      text: `Phone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message stored and email sent!" });
  } catch (error) {
    console.error("Contact submission error:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
