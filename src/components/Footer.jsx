import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-3 border-t flex px-8 justify-between border-black">
      <p className="text-sm mb-4">© 2025 Jay Panchal — All rights reserved.</p>
      <p className=" text-xl font-semibold">
        Building clean code with bold ideas.
      </p>
      <div className="flex justify-center space-x-4">
        <FaWhatsapp className="hover:text-green-500 w-8 h-8 " />
        <FaLinkedin className="hover:text-blue-600 w-8 h-8 " />
        <FaGithub className="hover:text-gray-700 w-8 h-8 " />
        <FaInstagram className="hover:text-pink-600 w-8 h-8 " />
      </div>
    </footer>
  );
};

export default Footer;
