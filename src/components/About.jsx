import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import SkillsOrbit from "./SkillsOrbit";
import TimelineItem from "./TimelineItem";

const About = () => {
  return (
    <div className="px-4 md:px-20 py-16 space-y-20">
      {/* Hero Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Passion Fuels Purpose!
        </h1>
        <div className="flex flex-col md:flex-row items-center  justify-center gap-8 border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] border-black rounded-lg p-6">
          <img src={hero} alt="Jay" className="w-40 md:w-60 object-contain" />
          <div className="text-left max-w-xl">
            <p className="text-lg">
              <span className="text-2xl">👋</span>{" "}
              <strong>Hello, I'm Jay Panchal</strong>
            </p>
            <p className="text-sm mt-4 text-gray-700">
              I’m a frontend developer and UI/UX enthusiast with a deep passion
              for crafting intuitive digital experiences. My journey started
              with a Diploma in IT, and I’m currently pursuing a Bachelor's
              degree in Information Technology.
            </p>
            <p className="text-sm mt-2 text-gray-700">
              I actively lead team projects in internships and aim to solve
              real-world problems. My leadership mindset drives me toward my
              goal. I’m constantly learning, improving, and contributing to
              meaningful products.
            </p>
            <p className="text-sm mt-2 text-gray-700">
              Outside of dev, I’m passionate about innovation, teamwork, and
              pushing boundaries. Whether it’s leading or building from scratch,
              I bring focus and creativity to every project.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <SkillsOrbit />
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8 border-l-2 border-black pl-6">
          <TimelineItem
            title="Software Engineer @Google"
            subtitle="2022-Present | Mountain View, CA"
            description="Worked on a team responsible for developing new features for Google’s search engine, including improving accuracy and relevance of search results and new tools for data analysis."
          />
          <TimelineItem
            title="Intern @Facebook"
            subtitle="Summer 2021 | Menlo Park, CA"
            description="Developed a new mobile app feature, worked on UI/UX, backend architecture, and content sharing functionality."
          />
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8 border-l-2 border-black pl-6">
          <TimelineItem
            title="Bachelor Of Engineering In Information Technology"
            subtitle="2023-2026 | Gujarat Technological University (GTU)"
            description="Courses: Data Structures, Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <TimelineItem
            title="Diploma Engineering In Information Technology"
            subtitle="2020-2023 | Gujarat Technological University (GTU)"
            description="Completed a master's project on deep learning for natural language understanding."
          />
        </div>
      </section>
    </div>
  );
};

export default About;
