import React, { useRef } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import TimelineItem from "./TimelineItem";
import rings from "../assets/rings.png";
import Transition from "../Transition";
// Define skills and their (x, y) offsets from center (in pixels)
const skills = [
  { name: "Web", x: -30, y: -15 },
  { name: "CSS", x: 0, y: -140 },
  { name: "Git", x: -300, y: -100 },
  { name: "GitHub", x: -460, y: 0 },
  { name: "HTML", x: -200, y: 70 },
  { name: "ReactJS", x: 200, y: 200 },
  { name: "Appwrite", x: 100, y: 100 },
  { name: "Tailwind CSS", x: -460, y: -180 },
  { name: "JavaScript", x: -400, y: 180 },
  { name: "Web Design", x: 450, y: 0 },
  { name: "UX", x: 230, y: -180 },
  { name: "Figma", x: 0, y: -280 },
];

const About = () => {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-12 space-y-16">
      {/* Hero Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
          Passion Fuels Purpose!
        </h1>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] rounded-lg p-4 sm:p-6 md:p-10 bg-white">
          {/* Image */}
          <img src={hero} alt="Jay" className="w-32 sm:w-40 md:w-60 lg:w-96" />

          {/* Text */}
          <div className="text-left max-w-xl">
            <p className="text-2xl font-semibold">
              <span className="text-2xl">👋</span>{" "}
              <strong>Hello, I'm Jay Panchal</strong>
            </p>
            <p className="text-md mt-4 text-gray-900">
              I’m a frontend developer and UI/UX enthusiast with a deep passion
              for crafting intuitive digital experiences. My journey started
              with a Diploma in IT, and I’m currently pursuing a Bachelor's
              degree in Information Technology.
            </p>
            <p className="text-md mt-2 text-gray-900">
              I actively lead team projects in internships and aim to solve
              real-world problems. My leadership mindset drives me toward my
              goal. I’m constantly learning, improving, and contributing to
              meaningful products.
            </p>
            <p className="text-md mt-2 text-gray-900">
              Outside of dev, I’m passionate about innovation, teamwork, and
              pushing boundaries. Whether it’s leading or building from scratch,
              I bring focus and creativity to every project.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <section className="text-center px-4">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10 sm:mb-12">
          Skills
        </h2>
        <motion.div className="relative w-full max-w-5xl h-[500px] sm:h-[550px] md:h-[600px] mx-auto my-12 sm:my-16">
          {/* Background image with circles */}
          <img
            src={rings}
            alt="Orbit Background"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          />

          {/* Skill tags animated from center */}
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="absolute left-1/2 top-1/2 px-3 py-1 text-sm sm:text-md font-medium bg-black text-white rounded-full whitespace-nowrap"
              initial={{ x: 0, y: 0, opacity: 0 }}
              style={{
                transform: `translate(${skill.x}px, ${skill.y}px)`,
              }}
              viewport={{ once: true }}
              whileInView={{
                x: skill.x,
                y: skill.y,
                opacity: 1,
                transition: {
                  duration: 1,
                },
              }}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience */}
      <section className="px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="relative px-2 sm:px-6 md:px-24 lg:px-80">
          {/* Scroll-animated vertical line */}
          <motion.div
            className="absolute  transform -translate-x-1/2 top-0 h-full w-[4px] bg-black origin-top z-0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          <div className="space-y-20 relative z-10">
            <TimelineItem
              title="FrontEnd Developer @CreArt Solutions"
              subtitle="July 2025 | Remote"
              description="Worked with React.js and PHP for frontend and backend integration. Gained hands-on experience in connecting APIs and building modular UI components."
            />
            <TimelineItem
              title="Tech-Lead & FrontEnd Developer @The Entrepreneurship Network"
              subtitle="Feb 2025 - June 2025 | Remote"
              description="Led the design and development of multiple web projects. Responsible for architecture, responsive UI, and coordinating with team members to ensure project delivery."
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="relative px-2 sm:px-6 md:px-24 lg:px-80 pb-12">
          {/* Scroll-animated vertical line */}
          <motion.div
            className="absolute  transform -translate-x-1/2 top-0 h-full w-[4px] bg-black origin-top z-0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          <div className="space-y-20 relative z-10">
            <TimelineItem
              title="Bachelor Of Engineering In Information Technology"
              subtitle="2023-2026 | Gujarat Technological University (GTU)"
              description="Focused on software development, algorithms, system design, and modern web technologies. Participated in team projects."
            />
            <TimelineItem
              title="Diploma Engineering In Information Technology"
              subtitle="2020-2023 | Gujarat Technological University (GTU)"
              description="Gained foundational knowledge in programming, databases, and networks. Final project involved deep learning for NLP applications."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transition(About);
