import React from "react";
import TaskpilotBook from "../assets/TaskpilotBook.png";
import FitverseBook from "../assets/FitverseBook.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();
  return (
    <section className="px-4">
      <h2 className="text-4xl md:text-6xl font-bold text-center">
        Case Studies
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center pt-7">
        <motion.img
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src={FitverseBook}
          alt="Fitverse"
          className="w-full sm:w-2/3 md:w-1/3 rounded hover:cursor-pointer"
          onClick={() => navigate("/case-studies/fitverse")}
        />
        <motion.img
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src={TaskpilotBook}
          alt="Taskpilot"
          className="w-full sm:w-2/3 md:w-1/3 rounded hover:cursor-pointer"
          onClick={() => navigate("/case-studies/taskpilot")}
        />
      </div>
    </section>
  );
};

export default CaseStudies;
