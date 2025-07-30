import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "", icon: <Home size={16} />, label: "Home" },
  { to: "about", icon: <User size={16} />, label: "About" },
  { to: "work", icon: <Briefcase size={16} />, label: "Work" },
  { to: "contact", icon: <Mail size={16} />, label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="border-2 border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white px-4 py-2 md:px-10 md:py-4 m-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <h1
          className="font-bold text-xl tracking-wide"
          style={{ fontFamily: '"Irish Grover", cursive' }}
        >
          JAY PANCHAL
        </h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ to, icon, label }) => (
            <motion.li
              key={label}
              whileHover={{ scale: 1.05 }}
              className="transition duration-300"
            >
              <Link
                to={to}
                className="flex items-center gap-1 px-2 py-1 border-b-2 border-transparent hover:border-black transition"
              >
                {icon}
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden">
          {navLinks.map(({ to, icon, label }) => (
            <motion.li
              key={label}
              whileHover={{ scale: 1.05 }}
              className="transition duration-300"
            >
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 px-2 py-1 border-b-2 border-transparent hover:border-black transition"
              >
                {icon}
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.header>
  );
};

export default Navbar;
