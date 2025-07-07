
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { courseDetails } from "../data/courseDetails";

export default function Courses() {
  return (
    <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-black text-white min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-cyan-300 mb-12">
          Explore Our Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(courseDetails).map(([slug, course], i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={course.img}
                alt={course.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Duration: {course.duration}
                </p>
                <Link
                  to={`/course/${slug}`}
                  className="inline-block mt-2 text-cyan-400 hover:underline text-sm"
                >
                  View Course
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
