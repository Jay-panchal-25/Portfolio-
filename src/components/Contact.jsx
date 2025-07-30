import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import telephone from "../assets/telephone.png";
import Map from "../assets/Map.png";

export default function Contact() {
  return (
    <>
      <img
        src={Map}
        alt="phone"
        className=" absolute w-1/2 top-0 left-18  opacity-30"
      />
      {/* Phone Image */}
      <img
        src={telephone}
        alt="phone"
        className=" absolute w-128 mx-auto right-0 bottom-0 mt-6 opacity-20"
      />
      <div
        className=" px-10 md:px-20 py-40
        text-[#1a1a1a] font-serif"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Section */}

          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let’s Make <br />
              Something Great
            </h1>
            <p className="text-gray-700 mb-6">
              Interested in working together or just want to connect? Shoot me a
              message, and I’ll get back to you as soon as I can.
            </p>

            <div className="flex gap-4 mb-6 flex-wrap">
              <button className="bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition">
                Email Me
              </button>
              <button className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
                Connect on LinkedIn
              </button>
            </div>
          </motion.div>

          {/* Right Info Boxes and Image */}
          <motion.div
            className="flex flex-col gap-4 w-full max-w-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Email Box */}
            <div className="flex items-center justify-between border rounded-xl px-5 py-4 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>Email Anytime</span>
              </div>
              <span className="text-gray-500">Email</span>
            </div>

            {/* WhatsApp Box */}
            <div className="flex items-center justify-between border rounded-xl px-5 py-4 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Contact Me on WhatsApp</span>
              </div>
              <span className="text-gray-500">Phone</span>
            </div>

            {/* Location Box */}
            <div className="flex items-center justify-between border rounded-xl px-5 py-4 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Kalol, Gujarat</span>
              </div>
              <span className="text-gray-500">Location</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
