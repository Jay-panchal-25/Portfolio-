import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Fitverse from "./CaseStudy/Fitverse";
import Taskpilot from "./CaseStudy/Taskpilot";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/fitverse" element={<Fitverse />} />
          <Route path="/case-studies/taskpilot" element={<Taskpilot />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
