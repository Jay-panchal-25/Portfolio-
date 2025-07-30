import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Web",
  "CSS",
  "Git",
  "GitHub",
  "HTML",
  "ReactJS",
  "Appwrite",
  "Tailwind CSS",
  "JavaScript",
  "Web Design",
  "UX",
  "Figma",
];

const orbitClasses = [
  "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[230px]",
  "top-1/2 left-[70%] transform -translate-y-[170px]",
  "top-[60%] left-[85%]",
  "top-[75%] left-[70%]",
  "bottom-1/3 left-[60%]",
  "bottom-1/4 left-1/2 transform -translate-x-1/2",
  "bottom-[20%] left-[30%]",
  "bottom-[30%] left-[15%]",
  "top-[70%] left-[10%]",
  "top-1/2 left-[20%] transform -translate-y-1/2",
  "top-[30%] left-[35%]",
  "top-[20%] left-1/2 transform -translate-x-1/2",
];

const SkillsOrbit = () => {
  return (
    <div className="relative w-full max-w-2xl h-[500px] mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          className={`absolute px-3 py-1 text-sm font-medium bg-black text-white rounded-full ${orbitClasses[index]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsOrbit;
