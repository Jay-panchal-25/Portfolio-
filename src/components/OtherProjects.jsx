import React from "react";
import TaskPilot from "../assets/Taskpilot.jpg";
import HRMS from "../assets/HRMS.png";

const projects = [
  {
    name: "TaskPilot",
    desc: "Modern productivity app for daily tasks. Clean UX.",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    image: { TaskPilot },
  },
  {
    name: "HRMS",
    desc: "HR management platform for leave, payroll, employee data.",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    image: { HRMS },
  },
  {
    name: "Consulting App",
    desc: "Platform for IT consulting firms — session & workflow automation.",
    stack: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "/assets/Consulting.png",
  },
];

const OtherProjects = () => {
  return (
    <div>
      <h3 className="text-center text-xl font-semibold mb-6">Other Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            className="border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] rounded-lg overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <h4 className="font-semibold">{p.name}</h4>
              <p className="text-xs text-gray-600">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-black text-xs px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
