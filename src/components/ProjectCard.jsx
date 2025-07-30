import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  liveLink,
  stacked = false,
}) => {
  return (
    <motion.div
      className={`${
        stacked ? "flex flex-col" : `flex flex-col md:flex-row`
      } rounded-3xl border-2 border-black shadow-[7px_7px_0px_rgba(0,0,0,0.9)] overflow-hidden bg-white`}
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Image Section */}
      <div className={`${stacked ? "" : "w-full md:w-1/2"}`}>
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${
            stacked ? "aspect-video" : "md:aspect-auto"
          } p-6 hover:scale-105 transition-transform duration-300 `}
        />
      </div>

      {/* Content Section */}
      <div
        className={`${
          stacked ? "" : "w-full md:w-1/2"
        } flex items-center p-6 md:p-10`}
      >
        <div className="w-full">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-gray-700 pt-5 text-sm leading-relaxed">
            {description}
          </p>

          <div className="flex gap-4 pt-5 flex-wrap">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
              >
                <ExternalLink size={16} />
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
