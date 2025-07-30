import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import OtherProjects from "./OtherProjects";
import CaseStudies from "./CaseStudies";
import IMS from "../assets/Ims.png";
import Fitverse from "../assets/Fitverse.png";

const Work = () => {
  return (
    <div className="px-4 md:px-20 py-16 space-y-20">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Some Hard Works
      </motion.h1>

      {/* Featured Projects */}
      <div className="space-y-12">
        <ProjectCard
          title="Inventory Management System"
          description="A full-featured inventory solution with role-based authentication, stock control, and order tracking."
          image={IMS}
          stack={["React.js", "Tailwind CSS", "Appwrite"]}
          liveLink="#"
          caseStudyLink="#"
          reverse={false}
        />
        <ProjectCard
          title="FitVerse – Gamified Fitness Tracker"
          description="Rewards users with crypto for meeting daily fitness goals. Google Fit API + blockchain incentives."
          image={Fitverse}
          stack={["React.js", "Node.js", "MongoDB", "Google API"]}
          liveLink="#"
          caseStudyLink="#"
          reverse
        />
      </div>

      {/* Other Projects */}
      <OtherProjects />

      {/* Case Studies */}
      <CaseStudies />
    </div>
  );
};

export default Work;
