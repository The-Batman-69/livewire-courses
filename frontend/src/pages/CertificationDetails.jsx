import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { certificationDetails } from "../data/certificationDetails";

export default function CertificationDetails() {
  const { certSlug } = useParams();
  // const cert = certificationDetails[certSlug];
  const cert = certificationDetails[certSlug];



  if (!cert) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Certification not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-black text-white min-h-screen">
      <Header />

      <div className="w-full h-64 md:h-96 overflow-hidden">
       <img src={cert.detailBanner} alt={cert.name} className="w-full h-full object-cover" />

      </div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-10">Certification Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { title: "Duration", desc: cert.duration },
            { title: "Mode", desc: "Online / Offline" },
            { title: "Focus", desc: "Practical + Theory" },
            { title: "Certification", desc: "Internationally Recognized" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-800 p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">About {cert.name}</h3>
        <p className="text-gray-300 leading-relaxed">
          This certification in {cert.name} is designed to build deep understanding and industry-ready skills. 
          You'll get hands-on training, expert mentorship, and real-time exposure to domain tools.
        </p>
      </section>

      <div className="text-center mt-10 mb-20">
        <a
          href="https://wa.me/message/V5TO26EIADBCE1"
          className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full shadow-md transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat with Us on WhatsApp
        </a>
      </div>

      <Footer />
    </div>
  );
}
