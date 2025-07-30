import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import telephone from "../assets/telephone.png";
import Map from "../assets/Map.png";
import Transition from "../Transition";
function Contact() {
  return (
    <div className="relative overflow-hidden py-20">
      {/* Background Images */}
      <img
        src={Map}
        alt="map"
        className="absolute top-0 left-0 md:w-1/2 opacity-20 z-0 "
      />
      <img
        src={telephone}
        alt="phone"
        className="absolute bottom-0 right-0 w-[300px] opacity-20 z-0"
      />

      <div className="relative z-10 px-6 md:px-16 md:py-20 text-[#1a1a1a] font-serif max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Section */}
          <motion.div
            className="w-full max-w-xl"
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
              <a
                href="https://wa.me/919313944698?text=Hi%20Jay%2C%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I'd%20love%20to%20connect%20regarding%20a%20project%20or%20opportunity.%20Let%20me%20know%20when%20you're%20available!"
                className="bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition"
                target="_blank"
              >
                Message Me on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Info Boxes */}
          <motion.div className="flex flex-col gap-4 w-full max-w-md">
            {/* Email Box */}
            <motion.a
              initial={{ opacity: 1, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              href="mailto:jaypanchal06334@email.com"
              target="_blank"
              className="flex items-center justify-between border-2 rounded-xl px-5 py-4 hover:shadow-md transition  border-black shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.8)]"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>Email Anytime</span>
              </div>
              <span className="text-gray-500">Email</span>
            </motion.a>

            {/* WhatsApp Box */}
            <motion.a
              initial={{ opacity: 1, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              href="+919313944698"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-2 rounded-xl px-5 py-4 hover:shadow-md transition border-black shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.8)]"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Talk on call</span>
              </div>
              <span className="text-gray-500">Phone</span>
            </motion.a>

            {/* Location Box */}
            <motion.a
              initial={{ opacity: 1, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              href="https://www.google.com/maps/place/Kalol,+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-2 rounded-xl px-5 py-4 hover:shadow-md transition border-black shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.8)]"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Kalol, Gujarat</span>
              </div>
              <span className="text-gray-500">India</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Transition(Contact);
