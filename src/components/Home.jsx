import React from "react";
import { motion } from "framer-motion";
import book from "../assets/book.png";
import bulb from "../assets/blub.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      {" "}
      <img
        src={book}
        alt="book"
        className="absolute top-0  w-1/3 opacity-20 -z-10"
      />
      <img
        src={bulb}
        alt="bulb"
        className="absolute right-0 bottom-0  w-1/3 -z-10 "
      />
      <div className="relative flex flex-col  items-center justify-center text-center py-32 px-4">
        {/* Background Images */}

        {/* Heading Text */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I Believe Great Design Tells A Story And Great Code Brings It To Life.
          I Blend Logic With Visual Language To Craft Interfaces That Speak
          Clearly.
        </motion.h2>

        {/* Subheading */}
        <p className="text-gray-700 mt-6 text-sm md:text-base">
          UI/UX Designer • Frontend Developer • <em>Code-Driven Storyteller</em>
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border-2 shadow-[3px_3px_0px_0px_rgba(0,_0,_0,_0.8)] border-black px-6 py-2 font-semibold rounded-md flex items-center gap-2"
          >
            About Me →
          </motion.button>
          <button className="underline text-sm font-medium">SEE MY WORK</button>
        </div>
      </div>
    </>
  );
};

export default Home;
