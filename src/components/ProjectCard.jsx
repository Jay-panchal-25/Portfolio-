import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  image,
  stack,
  liveLink,
  caseStudyLink,
  reverse,
}) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } border-2 border-black rounded-lg shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] overflow-hidden`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img src={image} alt={title} className="md:w-1/2 w-full object-cover" />
      <div className="p-6 space-y-4 flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="border border-black text-xs px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={liveLink}
            className="border border-black px-4 py-1 rounded text-sm hover:bg-black hover:text-white transition"
          >
            Live Site
          </a>
          <a href={caseStudyLink} className="underline text-sm font-medium">
            Read Case Study
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
