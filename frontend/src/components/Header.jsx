// frontend/src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/">
          <img
            src="https://livewireindia.com/assets/livewirelogo.png?v1.2"
            alt="Livewire Logo"
            className="h-10 object-contain"
          />
        </Link>
        <nav className="space-x-6 hidden md:flex text-lg text-black">
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/courses" className="hover:text-cyan-400">Courses</Link>
          <Link to="/certification" className="hover:text-cyan-400">Certification</Link>
          <Link to="/webinar" className="hover:text-cyan-400">Webinar</Link>
          <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}