import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Github size={18} />,
      label: "GitHub",
      href: "https://github.com/Jay-panchal-25",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jay-panchal-791451336",
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      href: "https://www.instagram.com/_jay_panchal_007",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-24 px-4 bg-white border-t border-black"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Text & CTA */}
        <div className="space-y-6">
          <h2
            className="text-4xl sm:text-5xl font-bold text-black"
            style={{ fontFamily: '"Irish Grover", cursive' }}
          >
            Let’s Make Something Great
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-md">
            Interested in working together or just want to connect? Shoot me a
            message, and I’ll get back to you as soon as I can.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 flex-wrap">
            <a
              href="mailto:jaypanchal06334@gmail.com"
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-all text-center"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/jay-panchal-791451336"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Info Cards */}
        <div className="space-y-6">
          {/* Info Boxes */}
          <div className="space-y-4">
            <a
              href="mailto:jaypanchal06334@gmail.com"
              className="flex items-center justify-between px-6 py-4 border border-black rounded-xl hover:bg-black hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <Mail />
                <span className="text-sm sm:text-lg">
                  jaypanchal06334@gmail.com
                </span>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">Email</span>
            </a>

            <a
              href="tel:+919313944698"
              className="flex items-center justify-between px-6 py-4 border border-black rounded-xl hover:bg-black hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone />
                <span className="text-sm sm:text-lg">+91 9313944698</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">Phone</span>
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 border border-black rounded-xl hover:bg-black hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <MapPin />
                <span className="text-sm sm:text-lg">Kalol, Gujarat</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">Location</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-black">
              Follow Me
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-black bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center">
          <p className="text-lg sm:text-xl font-semibold text-black mb-2 tracking-tight">
            Building clean code with bold ideas.
          </p>
          <p className="text-gray-600 text-xs sm:text-sm">
            © {new Date().getFullYear()} Jay Panchal — All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
