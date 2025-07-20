import React from "react";

function About() {
  return (
    <section id="about" className="flex items-center justify-center bg-transparent px-6 py-10">
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center gap-10 bg-white/10 dark:bg-white/10 rounded-2xl shadow-2xl p-10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-[1.02]">
        <img
          src="/images/img2.jpeg"
          alt="Profile"
          className="w-56 h-56 aspect-square rounded-full object-cover object-top border-4 border-primary shadow-lg mb-6 md:mb-0 transition-transform duration-300 hover:scale-105"
        />
        <div className="text-center md:text-left flex-1">
          <h2 className="text-4xl font-bold mb-4 text-primary dark:text-secondary">About Me</h2>
          <p className="text-lg text-gray-200 dark:text-gray-200 leading-relaxed">
            Hi! I'm Vanshika Sharma, a tech enthusiast, passionate about exploring different areas of technology as I begin my journey. I'm currently focused on building a strong foundation in programming and continuously learning new skills to grow and improve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
