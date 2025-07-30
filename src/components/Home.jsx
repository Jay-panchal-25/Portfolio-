import React from "react";
import { motion } from "framer-motion";
import book from "../assets/book.png";
import bulb from "../assets/blub.png";
import { useNavigate } from "react-router-dom";
import Transition from "../Transition";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background Images */}
        <img
          src={book}
          alt="book"
          className="absolute top-0 left-18 w-1/2 md:w-1/4 opacity-20 -z-10"
        />
        <img
          src={bulb}
          alt="bulb"
          className="absolute right-18 bottom-0 w-1/2 md:w-1/4  -z-10"
        />

        {/* Content Section */}
        <div className="relative flex flex-col items-center justify-center text-center md:py-32 py-18 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I Believe Great Design Tells A Story And Great Code Brings It To
            Life. I Blend Logic With Visual Language To Craft Interfaces That
            Speak Clearly.
          </motion.h2>

          <p className="text-gray-700 mt-6 text-sm sm:text-base md:text-lg">
            UI/UX Designer • Frontend Developer •{" "}
            <em>Code-Driven Storyteller</em>
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/about")}
              className="border-2 border-black px-6 py-2 font-semibold rounded-md flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,_0,_0,_0.8)] transition"
            >
              About Me →
            </motion.button>
            <button
              onClick={() => navigate("/work")}
              className="underline text-sm font-medium"
            >
              SEE MY WORK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition(Home);
