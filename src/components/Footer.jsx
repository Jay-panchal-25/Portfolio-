import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-6 border-t-2 border-black bg-white"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="text-sm text-center md:text-left">
        © 2025 Jay Panchal — All rights reserved.
      </p>

      <p className="text-center text-lg font-semibold flex">
        <FaHeart className="w-6 h-6 text-red-500 pt-0.5" />
        Building clean code with bold ideas.
      </p>

      <div className="flex justify-center gap-4">
        <motion.a
          href="https://wa.me/919313944698?text=Hi%20Jay%2C%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'd%20love%20to%20connect%20regarding%20a%20project%20or%20opportunity.%20Let%20me%20know%20when%20you're%20available!"
          whileHover={{ scale: 1.2 }}
          target="_blank"
          className="transition-colors duration-300 text-gray-800"
        >
          <FaWhatsapp className="w-6 h-6 hover:text-green-500" />
        </motion.a>
        <motion.a
          href="  https://www.linkedin.com/in/jay-panchal-791451336/"
          whileHover={{ scale: 1.2 }}
          target="_blank"
          className="transition-colors duration-300 text-gray-800"
        >
          <FaLinkedin className="w-6 h-6 hover:text-blue-600" />
        </motion.a>
        <motion.a
          href="https://github.com/Jay-panchal-25"
          whileHover={{ scale: 1.2 }}
          target="_blank"
          className="transition-colors duration-300 text-gray-800"
        >
          <FaGithub className="w-6 h-6 hover:text-gray-700" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/_jay_panchal_007/?next=%2F"
          whileHover={{ scale: 1.2 }}
          target="_blank"
          className="transition-colors duration-300 text-gray-800"
        >
          <FaInstagram className="w-6 h-6 hover:text-pink-600" />
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;
