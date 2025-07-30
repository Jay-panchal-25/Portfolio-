import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import CaseStudies from "./CaseStudies";
import IMS from "../assets/Ims.png";
import Fitverse from "../assets/Fitverse.png";
import HRMS from "../assets/HRMS.png";
import Consulting from "../assets/Consulting.png";
import Transition from "../Transition";

const Work = () => {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A robust web application for managing inventory with real-time stock updates, admin vs. user role-based access, order placement and approval flows. Built using React.js, Appwrite for authentication and database, and designed with a modern, bento-style UI using Tailwind CSS and Framer Motion for smooth animations.",
      image: IMS,
      liveLink: "https://inventory-management-systems.vercel.app/",
      reverse: false,
    },
    {
      title: "HRMS ",
      description:
        "An HR management platform designed to handle employee records, leave applications, and basic payroll features. Built with a clean, responsive frontend and structured for scalable enterprise use. Supports multi-role access and focuses on internal team coordination and transparency.",
      image: [HRMS],
      liveLink: "https://hrms-lac.vercel.app/login",
    },
    {
      title: "Consulting App",
      description:
        "A digital solution for IT consulting firms to streamline appointment scheduling, client communication, and session tracking. Includes admin and consultant dashboards, service booking flows, and workflow automation tools. Built with React and tailored for real-world consulting scenarios.",
      image: [Consulting],
      liveLink: "https://ten-consulting.vercel.app/",
    },
    {
      title: "FitVerse – Gamified Fitness Tracker",
      description:
        "A blockchain-based fitness platform that rewards users with crypto coins for daily physical activities like walking, running, and sleeping. Integrated with Google Fit API, the app uses gamification to boost health engagement. Users complete tasks, earn rewards, and track stats in a sleek, animated interface.",
      image: Fitverse,
      liveLink: "https://its-fitverse.vercel.app/",
      reverse: true,
    },
  ];
  return (
    <div className="px-4 md:px-20 py-10 space-y-14">
      <motion.h1
        className="text-6xl font-bold text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Some Hard Works
      </motion.h1>

      {/* Featured Projects with layout */}
      <div className="space-y-12">
        {projects.map((project, index) => {
          if (index % 3 === 0) {
            return (
              <div key={index}>
                <ProjectCard {...project} />
              </div>
            );
          }

          if (index % 3 === 1) {
            return (
              <div key={index} className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <ProjectCard {...project} stacked />
                </div>
                {projects[index + 1] && (
                  <div className="md:w-1/2">
                    <ProjectCard {...projects[index + 1]} stacked />
                  </div>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>
      <CaseStudies />
    </div>
  );
};

export default Transition(Work);
