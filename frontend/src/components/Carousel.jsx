// frontend/src/components/Carousel.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Empowering Tech Skills",
    subtitle: "Learn trending technologies with certified trainers",
    bg: "https://source.unsplash.com/1600x600/?technology,classroom"
  },
  {
    title: "Live Industry Projects",
    subtitle: "Build real-world experience with live projects",
    bg: "https://source.unsplash.com/1600x600/?coding,students"
  },
  {
    title: "NASSCOM Approved Programs",
    subtitle: "Get certified with industry-endorsed credentials",
    bg: "https://source.unsplash.com/1600x600/?data,certification"
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="w-full h-full bg-black/60 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-cyan-300 mb-4">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              {slide.subtitle}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
