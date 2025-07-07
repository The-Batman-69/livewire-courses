
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const webinars = [
  {
    title: "Introduction to Ethical Hacking",
    date: "2025-07-12",
    time: "4:00 PM IST",
    image: "https://marketing.caddcentre.com/uploads/thumbnails/1744883625_cyber.jpg",
    description: "Join our expert-led webinar on ethical hacking basics and careers."
  },
  {
    title: "Data Science Career Path",
    date: "2025-07-18",
    time: "5:00 PM IST",
    image: "https://marketing.caddcentre.com/uploads/thumbnails/1682070758_chatGPT-thumb.jpg",
    description: "Explore what it takes to become a data scientist in today's market."
  },
  {
    title: "AI & ML Trends in 2025",
    date: "2025-07-25",
    time: "3:30 PM IST",
    image: "https://marketing.caddcentre.com/uploads/thumbnails/1681124290_Robotic-Process-Automation-(RPA).jpg",
    description: "Understand current industry trends in AI/ML and project ideas."
  }
];

const googleFormLink = "https://forms.gle/YOUR_FORM_ID_HERE"; // Replace with your actual form link

export default function Webinar() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center text-cyan-300 mb-12">
          Upcoming Webinars
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {webinars.map((webinar, i) => (
            <div
              key={i}
              className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition shadow-xl"
            >
              <img
                src={webinar.image}
                alt={webinar.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-cyan-400 mb-1">
                  {webinar.title}
                </h2>
                <p className="text-sm text-gray-400">
                  {webinar.date} @ {webinar.time}
                </p>
                <p className="text-sm mt-2 text-gray-300">
                  {webinar.description}
                </p>

                {/* Buttons */}
                <div className="mt-4 space-y-2">
                  <a
                    href={googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded transition"
                  >
                    Register
                  </a>

                  <a
                    href="https://wa.me/message/V5TO26EIADBCE1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
