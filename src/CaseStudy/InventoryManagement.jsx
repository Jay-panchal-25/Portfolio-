import {
  ArrowLeft,
  LayoutDashboard,
  UserCheck,
  ShieldCheck,
  Boxes,
  Code,
  Paintbrush2,
  Rocket,
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

const InventoryCaseStudy = () => {
  return (
    <section className="min-h-screen bg-white text-black py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1
          className="text-5xl font-irish text-center text-black mb-20"
          style={{ fontFamily: '"Irish Grover", cursive' }}
        >
          Inventory Management System
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,_auto)] gap-6">
          {[
            {
              icon: LayoutDashboard,
              title: "Overview",
              text: "The Inventory Management System is a comprehensive web application built to solve the common issues of manual stock tracking and user management in small to mid-sized businesses. It enables organizations to maintain real-time visibility over their inventory, streamline order processing, and ensure role-specific access using a secure and scalable architecture. Designed with modern aesthetics and high responsiveness, the application provides a seamless user experience across all devices.",
              span: "md:col-span-3",
            },
            {
              icon: Boxes,
              title: "Key Features",
              text: "• Role-based authentication: admins can manage items, users, and orders; users can place and view orders.\n• Real-time inventory tracking with instant UI updates.\n• Item and stock CRUD operations for admins.\n• Responsive layout with accessibility in mind.\n• Confirmation and order approval system to ensure quality control.\n• Easy onboarding experience and secure login.",
              span: "md:col-span-3",
            },
            {
              icon: ShieldCheck,
              title: "The Problem",
              text: "Traditional inventory systems are often either too simplistic or overly complex and expensive for small teams. Manual methods like spreadsheets lead to stock discrepancies, slow order processing, and no access control. This project aims to bridge that gap with a simple yet powerful digital tool that allows different users to interact with the system based on their roles while maintaining a clean, intuitive interface.",
              span: "md:col-span-4",
            },
            {
              icon: Code,
              title: "Tech Stack",
              text: "Built using React.js and Tailwind CSS for a responsive UI. Appwrite handles authentication and database operations. Used Lucide icons for clarity, Framer Motion for animations, and deployed the project on Vercel with GitHub integration.",
              span: "md:col-span-2",
            },
            {
              icon: UserCheck,
              title: "My Role",
              text: "As the sole developer on this project, I took full responsibility for the frontend and backend integration. I created all UI components using React and Tailwind CSS, managed authentication and data handling via Appwrite, and structured the logic for role-based access throughout the app. I also optimized performance, ensured mobile responsiveness, and deployed the final version on Vercel with continuous updates.",
              span: "md:col-span-2",
            },
            {
              icon: Paintbrush2,
              title: "Challenges",
              text: "The major challenge was implementing secure and dynamic role-based access control without a traditional backend framework. Managing permissions for admin and regular users required precise conditional rendering and route protection, which was achieved using Appwrite’s document-based user roles. Another challenge was maintaining smooth UI updates with minimal latency, solved using efficient state management and async Appwrite queries.",
              span: "md:col-span-2",
            },
            {
              icon: Rocket,
              title: "Outcome",
              text: "The final product is a well-structured, scalable, and visually refined web application that is both technically sound and user-friendly. It has helped demonstrate my full-stack development skills, especially in frontend design, API integration, and deployment workflows. The system serves as a valuable addition to my portfolio and reflects my ability to convert real-world problems into polished digital solutions.",
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

export default InventoryCaseStudy;
