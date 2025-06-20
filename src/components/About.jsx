import {
  Code,
  Palette,
  Smartphone,
  Globe,
  GraduationCap,
  PenTool,
  Layout,
  Braces,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";
import "../index.css";

const About = () => {
  const uiuxSkills = [
    { name: "Figma", icon: <PenTool size={16} /> },
    { name: "Wireframing & Prototyping", icon: <Layout size={16} /> },
    { name: "User Research", icon: <Globe size={16} /> },
    { name: "Design Systems", icon: <Palette size={16} /> },
    { name: "Interaction Design", icon: <Smartphone size={16} /> },
  ];

  const frontendSkills = [
    { name: "React.js", icon: <Code size={16} /> },
    { name: "HTML CSS JavaScript", icon: <Braces size={16} /> },
    { name: "Tailwind CSS", icon: <Palette size={16} /> },
    { name: "Responsive Design", icon: <Smartphone size={16} /> },
    { name: "Version Control (Git)", icon: <GitBranch size={16} /> },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-gray-50 text-gray-900 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <h1 className="absolute top-32 left-6 sm:left-20 text-[60px] sm:text-[100px] md:text-[120px] font-black text-gray-300 opacity-45 rotate-[-10deg] leading-none tracking-tight max-w-[90%] sm:max-w-none break-words">
          About
        </h1>
        <h1 className="absolute bottom-10 right-4 sm:right-10 text-[60px] sm:text-[90px] md:text-[100px] font-bold text-gray-400 opacity-10 rotate-12 leading-none tracking-tight">
          🎨
        </h1>

        <div className="absolute top-[25%] left-[10%] text-indigo-300 opacity-10 rotate-[15deg]">
          <Palette size={120} />
        </div>
        <div className="absolute top-[60%] right-[5%] text-indigo-300 opacity-10 rotate-[-12deg]">
          <Code size={120} />
        </div>
        <div className="absolute bottom-[20%] left-[30%] text-indigo-300 opacity-10 rotate-[10deg]">
          <Smartphone size={100} />
        </div>
        <div className="absolute bottom-[5%] right-[40%] text-indigo-300 opacity-10">
          <Globe size={100} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: '"Irish Grover", cursive' }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Introduction */}
          <motion.div
            className="p-8 rounded-2xl shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all duration-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              👋 Hello, I'm <span className="text-indigo-600">Jay Panchal</span>
            </h3>
            <p className="mb-4 leading-relaxed">
              I'm a frontend developer and UI/UX enthusiast with a deep passion
              for crafting intuitive digital experiences. My journey started
              with a Diploma in IT, and I'm currently pursuing a Bachelor's
              degree in Information Technology.
            </p>
            <p className="mb-4 leading-relaxed">
              I actively lead team projects in internships and aim to solve
              real-world problems. My leadership mindset drives me toward my
              goal. I’m constantly learning, improving, and contributing to
              meaningful products.
            </p>
            <p className="leading-relaxed">
              Outside of dev, I’m passionate about innovation, teamwork, and
              pushing boundaries. Whether it’s leading or building from scratch,
              I bring focus and creativity to every project.
            </p>
          </motion.div>

          {/* Education + Skills */}
          <div className="space-y-10">
            {/* Education */}
            <motion.div
              className="p-6 rounded-2xl border border-gray-200 shadow-md bg-white hover:shadow-lg transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                <GraduationCap size={20} /> Education
              </h3>
              <div className="mb-6">
                <p className="font-medium">B.E. in Information Technology</p>
                <p className="text-sm text-gray-700">
                  Gujarat Technological University
                </p>
                <p className="text-xs text-gray-500">2023 – 2026</p>
              </div>
              <div>
                <p className="font-medium">Diploma in Information Technology</p>
                <p className="text-sm text-gray-700">
                  Gujarat Technological University
                </p>
                <p className="text-xs text-gray-500">2020 – 2023</p>
              </div>
            </motion.div>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                className="p-6 rounded-2xl border border-gray-200 shadow-md bg-white hover:shadow-lg transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Palette size={18} /> UI/UX Skills
                </h4>
                <ul className="space-y-2 text-gray-800">
                  {uiuxSkills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="bg-indigo-100 text-indigo-600 p-1 rounded-full">
                        {skill.icon}
                      </div>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl border border-gray-200 shadow-md bg-white hover:shadow-lg transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Code size={18} /> Frontend Skills
                </h4>
                <ul className="space-y-2 text-gray-800">
                  {frontendSkills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="bg-indigo-100 text-indigo-600 p-1 rounded-full">
                        {skill.icon}
                      </div>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mt-20">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What I Do
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Palette className="w-6 h-6" />,
                title: "UI/UX Design",
                description:
                  "Crafting clean and engaging user experiences with a user-first mindset.",
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Frontend Development",
                description:
                  "Creating high-performance interfaces using React, Tailwind, and modern JS.",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile Design",
                description:
                  "Designing seamless mobile-first responsive layouts and flows.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Web Development",
                description:
                  "Delivering scalable, accessible web apps using clean, maintainable code.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center text-sm text-gray-500">
            Fun fact: I enjoy brainstorming product ideas over chai ☕ and
            whiteboard sessions!
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
