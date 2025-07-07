

// // // frontend/src/pages/Home.jsx
// // import React from "react";
// // import { motion } from "framer-motion";
// // import Footer from "../components/Footer";
// // import Header from "../components/Header";

// // export default function Home() {
// //   // Sample hardcoded images (replace with your own)
// //   const trendingCourses = [
// //     { name: "Python", img: "https://marketing.caddcentre.com/uploads/thumbnails/1686200831_python_thubnail.webp" },
// //     { name: "Java", img: "https://marketing.caddcentre.com/uploads/thumbnails/1744883650_full-stack.jpg" },
// //     { name: "Full Stack", img: "https://marketing.caddcentre.com/uploads/thumbnails/1744883675_software.jpg" },
// //     { name: "Power BI", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680689009_Django.jpg" },
// //     { name: "Cyber Security", img: "https://marketing.caddcentre.com/uploads/thumbnails/1744883625_cyber.jpg" },
// //     { name: "Android", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680686120_android.jpg" },
// //   ];

// //   const nasscomCourses = [
// //     { name: "Data Science", img: "https://marketing.caddcentre.com/uploads/thumbnails/1716630621_data-science-thumb.jpg" },
// //     { name: "AI", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680691231_machine-learning.jpg" },
// //     { name: "RPA", img: "https://marketing.caddcentre.com/uploads/thumbnails/1681124290_Robotic-Process-Automation-(RPA).jpg" },
// //   ];

// //   const trendingTech = [
// //     { name: "IoT", img: "https://marketing.caddcentre.com/uploads/thumbnails/1681135008_IOT.jpg" },
// //     { name: "Machine Learning", img: "https://marketing.caddcentre.com/uploads/thumbnails/1682070758_chatGPT-thumb.jpg" },
// //     { name: "Blockchain", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680686746_block-chain.jpg" },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
// //       <Header />

// //       {/* Hero Section */}
// //       <section className="h-[80vh] flex items-center justify-center">
// //         <motion.div
// //           className="text-center"
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <h1 className="text-5xl font-bold text-cyan-400 mb-6">Welcome to LIVEWIRE Thanjavur</h1>
// //           <p className="text-lg text-gray-300 max-w-xl mx-auto">
// //             Empowering your career with certified tech courses and industry-ready skills.
// //           </p>
// //         </motion.div>
// //       </section>

// //       {/* Top Trending Courses */}
// //       <section className="px-6 py-16">
// //         <h2 className="text-3xl font-bold text-cyan-300 mb-10 text-center">Top Trending Courses</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {trendingCourses.map((course, i) => (
// //             <motion.div
// //               key={i}
// //               className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 transition"
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <img src={course.img} alt={course.name} className="rounded mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
// //               <p className="text-sm text-gray-400">Explore our top-rated {course.name} training program.</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* NASSCOM Approved Courses */}
// //       <section className="px-6 py-16 bg-slate-900">
// //         <h2 className="text-3xl font-bold text-cyan-300 mb-10 text-center">NASSCOM Approved Programs</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {nasscomCourses.map((course, i) => (
// //             <motion.div
// //               key={i}
// //               className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 transition"
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <img src={course.img} alt={course.name} className="rounded mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
// //               <p className="text-sm text-gray-400">Certified by NASSCOM for future-ready careers.</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Trending Technologies */}
// //       <section className="px-6 py-16">
// //         <h2 className="text-3xl font-bold text-cyan-300 mb-10 text-center">Top Trending Technologies</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {trendingTech.map((tech, i) => (
// //             <motion.div
// //               key={i}
// //               className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 transition"
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <img src={tech.img} alt={tech.name} className="rounded mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
// //               <p className="text-sm text-gray-400">Stay ahead with our hands-on {tech.name} courses.</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }

// // frontend/src/pages/Home.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import Footer from "../components/Footer";
// import Header from "../components/Header";

// export default function Home() {
//   const trendingCourses = [
//     { name: "Python", img: "https://marketing.caddcentre.com/uploads/thumbnails/1686200831_python_thubnail.webp" },
//     { name: "Java", img: "https://marketing.caddcentre.com/uploads/thumbnails/1744883650_full-stack.jpg" },
//     { name: "Full Stack", img: "https://marketing.caddcentre.com/uploads/thumbnails/1744883675_software.jpg" },
//     { name: "Power BI", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680689009_Django.jpg" },
//     { name: "Cyber Security", img: "https://marketing.caddcentre.com/uploads/thumbnails/1744883625_cyber.jpg" },
//     { name: "Android", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680686120_android.jpg" },
//   ];

//   const nasscomCourses = [
//     { name: "Data Science", img: "https://marketing.caddcentre.com/uploads/thumbnails/1716630621_data-science-thumb.jpg" },
//     { name: "AI", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680691231_machine-learning.jpg" },
//     { name: "RPA", img: "https://marketing.caddcentre.com/uploads/thumbnails/1681124290_Robotic-Process-Automation-(RPA).jpg" },
//   ];

//   const trendingTech = [
//     { name: "IoT", img: "https://marketing.caddcentre.com/uploads/thumbnails/1681135008_IOT.jpg" },
//     { name: "Machine Learning", img: "https://marketing.caddcentre.com/uploads/thumbnails/1682070758_chatGPT-thumb.jpg" },
//     { name: "Blockchain", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680686746_block-chain.jpg" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="h-[80vh] flex items-center justify-center">
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl font-bold text-cyan-400 mb-6">Welcome to LIVEWIRE Thanjavur</h1>
//           <p className="text-lg text-gray-300 max-w-xl mx-auto">
//             Empowering your career with certified tech courses and industry-ready skills.
//           </p>
//         </motion.div>
//       </section>

//       {/* Top Trending Courses */}
//       <section className="px-6 py-16">
//         <h2 className="text-3xl font-bold text-cyan-300 mb-10 text-center">Top Trending Courses</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {trendingCourses.map((course, i) => (
//             <motion.div
//               key={i}
//               className="bg-slate-800 max-w-sm mx-auto p-6 rounded-xl shadow-md hover:scale-105 transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               <img
//                 src={course.img}
//                 alt={course.name}
//                 className="rounded mb-4 w-full h-[180px] object-cover"
//               />
//               <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
//               <p className="text-sm text-gray-400">Explore our top-rated {course.name} training program.</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* NASSCOM Approved Courses */}
//       <section className="px-6 py-16 bg-slate-900">
//         <h2 className="text-3xl font-bold text-cyan-300 mb-10 text-center">NASSCOM Approved Programs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {nasscomCourses.map((course, i) => (
//             <motion.div
//               key={i}
//               className="bg-slate-800 max-w-sm mx-auto p-6 rounded-xl shadow-md hover:scale-105 transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               <img
//                 src={course.img}
//                 alt={course.name}
//                 className="rounded mb-4 w-full h-[180px] object-cover"
//               />
//               <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
//               <p className="text-sm text-gray-400">Certified by NASSCOM for future-ready careers.</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Trending Technologies */}
//       <section className="px-6 py-16">
//         <h2 className="text-3xl font-bold text-cyan-300 mb-10 text-center">Top Trending Technologies</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {trendingTech.map((tech, i) => (
//             <motion.div
//               key={i}
//               className="bg-slate-800 max-w-sm mx-auto p-6 rounded-xl shadow-md hover:scale-105 transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               <img
//                 src={tech.img}
//                 alt={tech.name}
//                 className="rounded mb-4 w-full h-[180px] object-cover"
//               />
//               <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
//               <p className="text-sm text-gray-400">Stay ahead with our hands-on {tech.name} courses.</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// frontend/src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

export default function Home() {
  const trendingCourses = [
    { name: "Python", img: "https://marketing.caddcentre.com/uploads/thumbnails/1686200831_python_thubnail.webp" },
    { name: "Java", img: "https://marketing.caddcentre.com/uploads/thumbnails/1744883650_full-stack.jpg" },
    { name: "Full Stack", img: "https://marketing.caddcentre.com/uploads/thumbnails/1744883675_software.jpg" },
    { name: "Power BI", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680689009_Django.jpg" },
    { name: "Cyber Security", img: "https://marketing.caddcentre.com/uploads/thumbnails/1744883625_cyber.jpg" },
    { name: "Android", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680686120_android.jpg" },
  ];

  const nasscomCourses = [
    { name: "Data Science", img: "https://marketing.caddcentre.com/uploads/thumbnails/1716630621_data-science-thumb.jpg" },
    { name: "AI", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680691231_machine-learning.jpg" },
    { name: "RPA", img: "https://marketing.caddcentre.com/uploads/thumbnails/1681124290_Robotic-Process-Automation-(RPA).jpg" },
  ];

  const trendingTech = [
    { name: "IoT", img: "https://marketing.caddcentre.com/uploads/thumbnails/1681135008_IOT.jpg" },
    { name: "Machine Learning", img: "https://marketing.caddcentre.com/uploads/thumbnails/1682070758_chatGPT-thumb.jpg" },
    { name: "Blockchain", img: "https://marketing.caddcentre.com/uploads/thumbnails/1680686746_block-chain.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center text-center px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">Welcome to LIVEWIRE Thanjavur</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto">
            Empowering your career with certified tech courses and industry-ready skills.
          </p>
        </motion.div>
      </section>

      {/* Carousel */}
      <section className="px-4 md:px-8">
        <Carousel />
      </section>

      {/* Top Trending Courses */}
      <section className="px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-cyan-300 mb-10 text-center">Top Trending Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {trendingCourses.map((course, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 max-w-sm mx-auto p-6 rounded-xl shadow-md hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={course.img}
                alt={course.name}
                className="rounded mb-4 w-full h-[180px] object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-sm text-gray-400">Explore our top-rated {course.name} training program.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NASSCOM Approved Courses */}
      <section className="px-4 md:px-6 py-16 bg-slate-900">
        <h2 className="text-3xl font-bold text-cyan-300 mb-10 text-center">NASSCOM Approved Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {nasscomCourses.map((course, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 max-w-sm mx-auto p-6 rounded-xl shadow-md hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={course.img}
                alt={course.name}
                className="rounded mb-4 w-full h-[180px] object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-sm text-gray-400">Certified by NASSCOM for future-ready careers.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Technologies */}
      <section className="px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-cyan-300 mb-10 text-center">Top Trending Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {trendingTech.map((tech, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 max-w-sm mx-auto p-6 rounded-xl shadow-md hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="rounded mb-4 w-full h-[180px] object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-400">Stay ahead with our hands-on {tech.name} courses.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
