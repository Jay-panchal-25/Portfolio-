import {
  ArrowLeft,
  CheckCircle,
  ClipboardList,
  LayoutList,
  Settings2,
  Code,
  Rocket,
  UserSquare2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const TaskPilotCaseStudy = () => {
  return (
    <section className="min-h-screen bg-white text-black pt-10 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1
          className="text-5xl font-irish text-center text-black mb-16"
          style={{ fontFamily: '"Irish Grover", cursive' }}
        >
          Task Pilot
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {[
            {
              icon: ClipboardList,
              title: "Overview",
              text: "Task Pilot is a modern task and lightweight project management tool designed for individuals and small teams. It helps users stay focused and organized by allowing them to manage tasks, track progress, and streamline daily workflows. Built with the MERN stack, it's optimized for performance, clarity, and ease of use, while offering a foundation for collaborative features and team dashboards in the future.",
              span: "md:col-span-3",
            },
            {
              icon: UserSquare2,
              title: "My Role",
              text: "I handled the UI/UX planning and implemented the frontend using React and Tailwind. I created wireframes for a distraction-free dashboard experience, ensuring it worked well for both task and basic project management use cases. I also worked with backend developers to connect MongoDB APIs and plan future extensions like team roles and activity logs.",
              span: "md:col-span-3",
            },
            {
              icon: LayoutList,
              title: "The Problem",
              text: "Most productivity tools either lack focus or overwhelm users with features. Many task management apps don’t scale well into project tracking needs. Task Pilot solves this by offering a clean and focused space to manage tasks and small projects, with core essentials and room to grow—ideal for solo developers, students, and startup teams.",
              span: "md:col-span-4",
            },
            {
              icon: Code,
              title: "Tech Stack",
              text: "MongoDB, Express, React, and Node.js (MERN stack) power the backend and frontend. Tailwind CSS ensures responsive, modern UI. Future tech plans include user authentication, project boards, and analytics integration.",
              span: "md:col-span-2",
            },
            {
              icon: CheckCircle,
              title: "Key Features",
              text: "• Create and manage individual tasks\n• Mark tasks complete and edit them anytime\n• Responsive layout for desktop & mobile\n• Fast performance with minimal UI clutter\n• Project-friendly features: task groups, status tracking\n• Scalable to support collaboration, tags, and deadlines",
              span: "md:col-span-2",
            },
            {
              icon: Settings2,
              title: "Challenges",
              text: "Balancing simplicity with future scalability was a key challenge. I had to ensure the design stayed minimal for solo use, but flexible enough for future team/project features like shared boards or real-time updates. Mobile optimization and clean component logic were also core development priorities.",
              span: "md:col-span-2",
            },
            {
              icon: Rocket,
              title: "Outcome",
              text: "Task Pilot is live and actively used as a personal task and micro project manager. It demonstrates strong UI/UX thinking, responsive design, and full-stack collaboration. Its clean structure supports future growth into a more powerful team-based productivity platform.",
              span: "md:col-span-2",
            },
          ].map(({ icon: Icon, title, text, span }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className={`h-full p-6 bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition duration-300 ease-in-out ${span}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-black text-white rounded-full">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-semibold">{title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskPilotCaseStudy;
