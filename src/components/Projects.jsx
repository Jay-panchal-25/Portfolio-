import {
  ExternalLink,
  Github,
  Star,
  Code,
  LibraryBig,
  Atom,
  Wind,
  Cloud,
  Server,
  Send,
  Database,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Fitverse from "../assets/fitverse.png";
import ims from "../assets/ims.png";
import taskpilot from "../assets/taskpilot.jpg";

const getTechIcon = (tech) => {
  const iconSize = 16;
  const iconMap = {
    "React.js": <Atom size={iconSize} className="text-blue-600" />,
    "Tailwind CSS": <Wind size={iconSize} className="text-cyan-500" />,
    Appwrite: <Cloud size={iconSize} className="text-pink-500" />,
    "Node.js": <Server size={iconSize} className="text-green-600" />,
    Express: <Send size={iconSize} className="text-gray-700" />,
    MongoDB: <Database size={iconSize} className="text-green-500" />,
    "Google API": <Globe size={iconSize} className="text-red-600" />,
  };

  return iconMap[tech] || <Code size={iconSize} />;
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Inventory Management System",
      description:
        "A full-featured inventory solution with role-based authentication, stock control, and order tracking. Built with React, Tailwind, and Appwrite.",
      image: ims,
      tech: ["React.js", "Tailwind CSS", "Appwrite"],
      liveUrl: "https://inventory-management-systems.vercel.app/",
      caseStudyUrl: "/case-studies/inventory-management",
    },
    {
      id: 2,
      title: "FitVerse – Gamified Fitness Tracker",
      description:
        "FitVerse rewards users with crypto for meeting daily fitness goals. Integrates Google Fit APIs and blockchain incentives.",
      image: Fitverse,
      tech: ["React.js", "Node.js", "MongoDB", "Google API"],
      liveUrl: "https://its-fitverse.vercel.app/",
      caseStudyUrl: "/case-studies/fitverse",
    },
    {
      id: 3,
      title: "Task Pilot – Task Management Tool",
      description:
        "A modern productivity app for managing daily tasks, deadlines, and progress tracking. MERN stack powered with clean UX.",
      image: taskpilot,
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://task-pilot-demo.vercel.app",
      caseStudyUrl: "/case-studies/task-pilot",
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: '"Irish Grover", cursive' }}
          >
            Work & Case Study
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mt-4" />
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Real-world projects crafted with clean code, smart architecture, and
            a designer's touch.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-20 sm:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col-reverse lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-10 sm:gap-12 group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 flex items-center gap-2">
                  <LibraryBig className="text-indigo-600" size={28} />
                  {project.title}
                </h3>

                <p className="text-gray-700 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="mt-3 mb-1 flex items-center gap-2 text-gray-800 font-medium">
                  <Code size={18} className="text-purple-600" />
                  Built With:
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 bg-gray-100 text-gray-800 rounded-full hover:shadow transition"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 border border-gray-300 text-black hover:bg-gray-100 hover:shadow transition rounded"
                  >
                    <ExternalLink size={16} />
                    Live Site
                  </a>

                  <Link
                    to={project.caseStudyUrl}
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-black text-white hover:bg-gray-800 hover:shadow-lg transition rounded"
                  >
                    <Star size={16} />
                    Read Case Study
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden group-hover:shadow-xl transition duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
