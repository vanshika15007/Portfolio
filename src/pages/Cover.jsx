import React, { useState, useEffect } from "react";

const taglines = [
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "UI/UX Designer"
];

function Cover() {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < taglines[current].length) {
        timeout = setTimeout(() => {
          setDisplayed(taglines[current].slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1200);
      }
    } else {
      // Instead of a long blank, immediately start the next word
      timeout = setTimeout(() => {
        setDisplayed("");
        setCurrent((prev) => (prev + 1) % taglines.length);
        setTyping(true);
      }, 200); // very short blank
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, current]);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b0764] dark:from-black dark:via-gray-900 dark:to-gray-800 overflow-hidden pt-32 pb-12">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full top-[-10%] left-[-10%] blur-3xl animate-pulse" />
        <div className="absolute w-72 h-72 bg-pink-400/20 rounded-full bottom-[-10%] right-[-10%] blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center gap-4 w-full max-w-2xl">
        <div className="relative mb-2">
          <span className="absolute inset-0 w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 blur-xl opacity-70 animate-pulse z-0"></span>
          <img
            src="/images/img2.jpeg"
            alt="Profile"
            className="relative w-60 h-60 aspect-square rounded-full object-cover object-top border-4 border-white shadow-xl z-10 animate-fade-in"
          />
        </div>
        <span className="text-lg text-white/80 animate-fade-in">Hi, I'm</span>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-1 text-white drop-shadow-lg animate-fade-in">Vanshika Sharma</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-white animate-fade-in min-h-[2.5rem] flex items-center justify-center">
          <span className="border-r-2 border-white pr-2 animate-pulse">{displayed}</span>
        </h2>
        <div className="flex justify-center gap-4 mt-2 animate-fade-in">
          <a href="https://github.com/vanshika15007" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition text-3xl">
            {/* GitHub SVG icon */}
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.25-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.104.823 2.225 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/vanshika-sharma-8880a2330" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition text-3xl">
            {/* LinkedIn SVG icon */}
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
        </div>
        <a href="#about" className="mt-6 inline-block px-8 py-3 bg-white/90 text-primary font-semibold rounded-full shadow-md hover:bg-white transition-all duration-200 animate-fade-in">
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Cover; 