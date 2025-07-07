import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 px-6 mt-12 relative bottom-0 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        {/* Left Address */}
        <div>
          <h4 className="text-cyan-400 font-semibold mb-2">Branch 1 – New Bus Stand</h4>
          <a
            href="https://www.google.com/maps?q=RM+Complex,+New+Bus+Stand,+Thanjavur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block"
          >
            3rd Floor, RM Complex<br />
            New Bus Stand, Thanjavur
          </a>
          <p>📞 96265 34614</p>
        </div>

        {/* Growth Manager Center */}
        <div className="flex flex-col items-center justify-center text-center">
          <h4 className="text-cyan-400 font-semibold text-lg mb-2">Growth Manager</h4>
          <p className="text-2xl font-bold text-white">📞 84899 77530</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Address */}
        <div className="text-right md:text-left">
          <h4 className="text-cyan-400 font-semibold mb-2">Branch 2 – Near Railway Station</h4>
          <a
            href="https://www.google.com/maps?q=Nallaiyah+Complex,+Near+Railway+Station,+Thanjavur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block"
          >
            2nd Floor, Nallaiyah Complex<br />
            Near Railway Station, Thanjavur
          </a>
          <p>📞 90039 73489</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} LIVEWIRE Thanjavur. All rights reserved.
      </div>
    </footer>
  );
}
