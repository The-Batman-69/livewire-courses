import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const contact = new Contact({ firstName, lastName, email, phone, message });
    await contact.save();
    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;