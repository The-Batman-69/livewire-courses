


// // frontend/src/pages/Certification.jsx
// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { certificationDetails } from "../data/certificationDetails";

// export default function Certification() {
//   return (
//     <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-black text-white min-h-screen">
//       <Header />

//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <h1 className="text-4xl font-bold text-center text-cyan-300 mb-12">
//           Our AI-Powered PG Certifications
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
//           {Object.entries(certificationDetails).map(([slug, cert], i) => (
//             <motion.div
//               key={slug}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//               className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
//             >
//               <img
//                 src={cert.img}
//                 alt={cert.name}
//                 className="rounded mb-4 w-full h-48 object-cover"
//               />
//               <h3 className="text-xl font-semibold mb-2 text-cyan-300">{cert.name}</h3>
//               <p className="text-sm text-gray-400 mb-3">Duration: {cert.duration}</p>
//               <Link
//                 to={`/certification/${slug}`}
//                 className="text-cyan-400 hover:underline text-sm"
//               >
//                 View More
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { certificationDetails } from "../data/certificationDetails"; // object format

export default function Certification() {
  return (
    <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-black text-white min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center text-cyan-300 mb-12">
          Our AI-Powered PG Certifications
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {Object.entries(certificationDetails).map(([slug, cert], i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img
                src={cert.img}
                alt={cert.name}
                className="rounded mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">{cert.name}</h3>
              <p className="text-sm text-gray-400 mb-3">Duration: {cert.duration}</p>
              <Link
                to={`/certification/${slug}`}
                className="text-cyan-400 hover:underline text-sm"
              >
                View More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
