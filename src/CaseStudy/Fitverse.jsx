import {
  ArrowLeft,
  Footprints,
  Activity,
  ShieldCheck,
  Trophy,
  Code,
  Rocket,
  GaugeCircle,
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

const FitVerseCaseStudy = () => {
  return (
    <section className="min-h-screen bg-white text-black pt-10 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1 className="text-5xl font-irish text-center text-black mb-16">
          FitVerse
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {[
            {
              icon: Activity,
              title: "Overview",
              text: "FitVerse is a fitness app powered by blockchain where users are rewarded with cryptocurrency for staying active. It connects with health APIs to track daily steps, workouts, and sleep patterns, and incentivizes consistency through a gamified system. The platform encourages healthy habits by offering real rewards for achieving fitness milestones.",
              span: "md:col-span-3",
            },
            {
              icon: GaugeCircle,
              title: "My Role",
              text: "I was responsible for designing the wireframes, building the frontend UI, and ensuring the overall user experience was seamless and engaging. I developed the application using React and Tailwind CSS, contributed to the visual layout and animations, and collaborated with backend developers to integrate the MERN stack architecture.",
              span: "md:col-span-3",
            },
            {
              icon: ShieldCheck,
              title: "The Problem",
              text: "Most fitness apps lack real motivation to stay consistent. While tracking is easy, users often stop without an incentive. FitVerse solves this by rewarding users with crypto for daily health tasks like walking, sleeping on time, and exercising regularly.",
              span: "md:col-span-4",
            },
            {
              icon: Code,
              title: "Tech Stack",
              text: "FitVerse was built using the MERN stack (MongoDB, Express, React, Node.js). I used Figma for designing the UI. It integrates Google APIs for health data and is deployed on Vercel.",
              span: "md:col-span-2",
            },
            {
              icon: Trophy,
              title: "Key Features",
              text: "• Daily step tracking via Google Fit\n• Sleep data integration\n• Crypto reward system\n• Personal goal progress and stats\n• Smooth Web3 login experience\n• Fully responsive UI for mobile-first fitness use",
              span: "md:col-span-2",
            },
            {
              icon: Footprints,
              title: "Challenges",
              text: "One challenge was syncing accurate health data with real-time validations. Another was implementing secure, scalable blockchain reward logic while maintaining user trust and app speed. I also had to balance animation with performance on low-end mobile devices.",
              span: "md:col-span-2",
            },
            {
              icon: Rocket,
              title: "Outcome",
              text: "FitVerse launched successfully with a smooth user experience and high engagement. Users now complete daily health tasks more consistently and enjoy earning real rewards. This project demonstrated my skills in frontend development, UI/UX design, and collaboration within a MERN stack environment.",
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
              className={`relative h-full p-6 bg-white rounded-2xl border-2 border-black shadow-[7px_7px_0px_rgba(0,0,0,0.9)] hover: transition duration-300 ease-in-out ${span}`}
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

export default FitVerseCaseStudy;
