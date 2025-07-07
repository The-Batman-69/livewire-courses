

// // src/pages/CourseDetails.jsx
// import React from "react";
// import { useParams } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { motion } from "framer-motion";
// import { courseDetails } from "../data/courseDetails";

// export default function CourseDetails() {
//   const { courseSlug } = useParams();
//   const course = courseDetails[courseSlug];

//   if (!course) {
//     return (
//       <div className="bg-black text-white min-h-screen flex items-center justify-center">
//         <p className="text-xl">Course not found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-black text-white min-h-screen">
//       <Header />

//       {/* Banner */}
//       <div className="w-full h-64 md:h-96 overflow-hidden">
//         <img src={course.img} alt={course.name} className="w-full h-full object-cover" />
//       </div>

//       {/* Highlights */}
//       <section className="max-w-6xl mx-auto px-6 py-12">
//         <h2 className="text-3xl font-bold text-center text-cyan-300 mb-10">Course Highlights</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
//           {[ 
//             { title: "Program Duration", desc: course.duration },
//             { title: "Flexible Learning", desc: "Online / Offline" },
//             { title: "Practical Learning", desc: "Project-Oriented" },
//             { title: "Hands-on Experience", desc: "Real-time Scenarios" }
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//               className="bg-slate-800 p-6 rounded-xl shadow hover:scale-105 transition"
//             >
//               <h4 className="text-xl font-semibold text-cyan-400 mb-2">{item.title}</h4>
//               <p className="text-sm text-gray-300">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* About Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-5xl mx-auto px-6 py-10"
//       >
//         <h3 className="text-2xl font-bold text-cyan-300 mb-4">About {course.name} Training</h3>
//         <p className="text-gray-300 leading-relaxed">
//           The {course.name} training offered at LIVEWIRE Thanjavur is designed to give you
//           a practical understanding of the subject with real-world exposure and certified tools.
//           You’ll work on projects, industry-based tasks, and gain job-ready skills.
//         </p>
//       </motion.section>

//       {/* Course Objectives */}
//       <motion.section
//         initial={{ opacity: 0, x: -40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-5xl mx-auto px-6 py-10"
//       >
//         <h3 className="text-2xl font-bold text-cyan-300 mb-4">Course Objectives</h3>
//         <ul className="list-disc pl-6 text-gray-300 space-y-2">
//           <li>Build a strong foundation in {course.name}</li>
//           <li>Master tools & technologies used in the industry</li>
//           <li>Practice with live projects and assignments</li>
//           <li>Prepare for certifications and job interviews</li>
//         </ul>
//       </motion.section>

//       {/* Scope & Career Opportunities */}
//       <motion.section
//         initial={{ opacity: 0, x: 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-5xl mx-auto px-6 py-10"
//       >
//         <h3 className="text-2xl font-bold text-cyan-300 mb-4">Scope & Career Opportunities</h3>
//         <p className="text-gray-300 leading-relaxed">
//           Completing this {course.name} course opens up many job opportunities in IT companies, startups,
//           and product-based organizations. You can become a developer, analyst, tester,
//           or work in automation roles depending on your specialization.
//         </p>
//       </motion.section>

//       {/* Salary */}
//       <motion.section
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-5xl mx-auto px-6 py-10"
//       >
//         <h3 className="text-2xl font-bold text-cyan-300 mb-4">Salary Scale</h3>
//         <p className="text-gray-300 leading-relaxed">
//           Starting salary can range between ₹3 – ₹6 LPA. With experience and certification,
//           professionals in {course.name} can earn ₹10 – ₹20 LPA or more depending on domain and role.
//         </p>
//       </motion.section>

//       {/* WhatsApp CTA */}
//       <div className="text-center mt-10 mb-20">
//         <a
//           href="https://wa.me/message/V5TO26EIADBCE1"
//           className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full shadow-md transition"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Chat with Us on WhatsApp
//         </a>
//       </div>

//       <Footer />
//     </div>
//   );
// }


// src/pages/CourseDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { courseDetails } from "../data/courseDetails";

export default function CourseDetails() {
  const { courseSlug } = useParams();
  const course = courseDetails[courseSlug];

  if (!course) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Course not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-black text-white min-h-screen">
      <Header />

      {/* Banner */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img
          src={course.detailBanner || course.img}
          alt={course.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-10">Course Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { title: "Program Duration", desc: course.duration },
            { title: "Flexible Learning", desc: "Online / Offline" },
            { title: "Practical Learning", desc: "Project-Oriented" },
            { title: "Hands-on Experience", desc: "Real-time Scenarios" },
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

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-10"
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">About {course.name} Training</h3>
        <p className="text-gray-300 leading-relaxed">
          The {course.name} training offered at LIVEWIRE Thanjavur is designed to give you
          a practical understanding of the subject with real-world exposure and certified tools.
          You’ll work on projects, industry-based tasks, and gain job-ready skills.
        </p>
      </motion.section>

      {/* Course Objectives */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-10"
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">Course Objectives</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Build a strong foundation in {course.name}</li>
          <li>Master tools & technologies used in the industry</li>
          <li>Practice with live projects and assignments</li>
          <li>Prepare for certifications and job interviews</li>
        </ul>
      </motion.section>

      {/* Scope & Career Opportunities */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-10"
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">Scope & Career Opportunities</h3>
        <p className="text-gray-300 leading-relaxed">
          Completing this {course.name} course opens up many job opportunities in IT companies, startups,
          and product-based organizations. You can become a developer, analyst, tester,
          or work in automation roles depending on your specialization.
        </p>
      </motion.section>

      {/* Salary */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-10"
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">Salary Scale</h3>
        <p className="text-gray-300 leading-relaxed">
          Starting salary can range between ₹3 – ₹6 LPA. With experience and certification,
          professionals in {course.name} can earn ₹10 – ₹20 LPA or more depending on domain and role.
        </p>
      </motion.section>

      {/* WhatsApp CTA */}
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
