import { useState } from "react";
import { Menu, X, Home, User2, Briefcase, Mail } from "lucide-react";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={16} /> },
    { id: "about", label: "About", icon: <User2 size={16} /> },
    { id: "projects", label: "Work", icon: <Briefcase size={16} /> },
    { id: "contact", label: "Contact", icon: <Mail size={16} /> },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              style={{ fontFamily: "'Irish Grover', cursive" }}
              className="text-xl sm:text-2xl font-black text-black hover:text-gray-700 transition-colors duration-300 tracking-tight font-irish"
            >
              JAY PANCHAL
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-black group font-irish ${
                  activeSection === item.id ? "text-black" : "text-gray-600"
                }`}
              >
                {item.icon}
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 sm:py-6 space-y-2 sm:space-y-4 border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 w-full text-left text-base sm:text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 font-irish ${
                  activeSection === item.id
                    ? "text-black bg-gray-50"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
