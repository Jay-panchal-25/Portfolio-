import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.header
      className="flex justify-between shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.8)] items-center p-4 md:px-12 py-6 border-2 border-black rounded-lg m-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="font-bold text-xl tracking-wide">JAY PANCHAL</h1>
      <nav>
        <ul className="flex space-x-6">
          <Link to="/home" className="flex items-center gap-1">
            <Home size={16} /> Home
          </Link>
          <Link to="about" className="flex items-center gap-1">
            <User size={16} /> About
          </Link>
          <Link to="work" className="flex items-center gap-1">
            <Briefcase size={16} /> Work
          </Link>
          <Link to="contact" className="flex items-center gap-1">
            <Mail size={16} /> Contact
          </Link>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
