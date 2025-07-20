import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, offset: Math.abs(rect.top - 100) };
      });
      const closest = offsets.reduce((a, b) => (a.offset < b.offset ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] bg-opacity-90 backdrop-blur-md shadow-md py-4 px-6 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 text-transparent bg-clip-text tracking-wider">
          Vanshika
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm sm:text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`hover:text-blue-400 transition relative pb-1 ${
                  activeSection === item.id
                    ? "text-blue-400 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:rounded-full after:scale-x-100 after:transition-transform after:duration-300"
                    : "after:scale-x-0 after:transition-transform after:duration-300"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex flex-col items-center justify-start md:hidden animate-slideDown">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <ul className="mt-12 md:mt-24 w-full max-w-xs bg-black bg-opacity-80 rounded-xl space-y-2 text-center p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={`block text-2xl py-4 px-8 rounded-lg hover:text-blue-400 transition ${
                    activeSection === item.id ? "text-blue-400 bg-white/10" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;