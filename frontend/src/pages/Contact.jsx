// frontend/src/pages/Contact.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message");
      }

      const waMessage = `Hi, I'm ${formData.firstName} ${formData.lastName}. My email is ${formData.email}. ${formData.message}`;
      const waUrl = `https://wa.me/919843507231?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, "_blank");
    } catch (err) {
      alert("Something went wrong. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen">
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-cyan-300 mb-12">Contact Us</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-10 rounded-xl shadow-xl space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              className="p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              className="p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg"
          >
            Submit Message
          </button>
        </form>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
            Our Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5126012775697!2d79.13849487401001!3d10.79241958935526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacc7c6e5f0b0f%3A0x7f59fae43e18cb2a!2sLIVEWIRE%20-%20Thanjavur!5e0!3m2!1sen!2sin!4v1720000000000"
            width="100%"
            height="300"
            className="rounded-xl shadow-xl"
            allowFullScreen=""
            loading="lazy"
            title="Livewire Map"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
}
