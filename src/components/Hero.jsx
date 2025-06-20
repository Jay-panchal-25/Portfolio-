import { ArrowRight, Download } from "lucide-react";
import { useEffect } from "react";
import hero from "../assets/Hero.jpg"; // Robot image

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-white text-black px-4 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-24 sm:mt-20 px-2 sm:px-4 md:px-6">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-2 animate-pulse">
            Hello, digital wanderer 👋 Welcome to my corner of the web.
          </p>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl mb-2"
            style={{ fontFamily: "'Irish Grover', cursive" }}
          >
            JAY PANCHAL
          </h1>

          <p className="text-sm sm:text-lg text-gray-800 font-medium mb-3 max-w-xl">
            UI/UX Designer • Frontend Developer •{" "}
            <span className="italic">Code-Driven Storyteller</span>
          </p>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light italic max-w-md mb-8">
            I believe great design tells a story — and great code brings it to
            life. I blend logic with visual language to craft interfaces that
            speak clearly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <button
              onClick={scrollToContact}
              className="group bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 text-sm tracking-wide justify-center shadow-sm"
            >
              LET’S CONNECT
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
            <button
              onClick={scrollToProjects}
              className="group border border-black text-black px-6 py-3 rounded font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 text-sm tracking-wide justify-center shadow-sm"
            >
              SEE MY WORK
              <Download
                size={16}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Robot + Speech Bubble */}
        <div className="relative w-full flex justify-center md:justify-end items-center mt-10 md:mt-0">
          <img
            src={hero}
            alt="Robot Illustration"
            className="w-[260px] sm:w-[320px] md:w-[380px] h-auto animate-bounce-slow"
          />

          {/* Speech Bubble */}
          <div className="absolute top-2 right-4 sm:top-4 sm:right-8 md:top-[-40px] md:right-[10px] bg-white border border-gray-300 rounded-xl p-3 shadow-md max-w-[220px] text-xs sm:text-sm text-gray-800 leading-snug animate-fade-in z-10">
            “Design meets logic. Let’s build something great!”
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-l border-b border-gray-300 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
