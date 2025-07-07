// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Certification from "./pages/Certification";
import Webinar from "./pages/Webinar";
import ContactPage from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";
import CertificationDetails from "./pages/CertificationDetails";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/course/:courseSlug" element={<CourseDetails />} />
        <Route path="/certification/:certSlug" element={<CertificationDetails />} />

        

      </Routes>
    </Router>
  );
}
