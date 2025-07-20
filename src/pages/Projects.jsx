import React from "react";

function Projects() {
  const projects = [
    {
      title: "CineScope Movie App",
      description:
        "A React app that allows users to search and view movies using the OMDB API. Styled with styled-components.",
      techStack: ["React", "OMDB API", "Styled-components"],
      githubUrl: "https://github.com/vanshika15007/movie-app",
      liveDemoUrl: "https://cinescopeflix.netlify.app",
    },
    {
      title: "Accessibility Analyzer",
      description:
        "Analyze any website for accessibility issues using Playwright + Flask. Real-time scanning with a user-friendly frontend.",
      techStack: ["Python", "Flask", "Playwright", "React"],
      githubUrl: "https://github.com/vanshika15007/Accessibility-analyzer",
      liveDemoUrl: "https://accessibility-analyzer.netlify.app",
    },
    {
      title: "realtime-todo-board",
      description:
        "A full-stack Kanban-style task manager with real-time sync, user auth, drag-and-drop, filters, and dark mode.",
      techStack: ['React', 'Node.js', 'MongoDB','Socket.IO'],
      githubUrl: "https://github.com/vanshika15007/realtime-todo-board",
      liveDemoUrl: "https://realtime-todo-board.netlify.app/",
    },
    {
      title: "inscripts-spreadsheet",
      description:
        "It replicates the layout and structure from the provided Figma design with features like filtering tabs, dynamic table rows, and CSV export.",
      techStack: ['React 18', 'TypeScript', 'Tailwind CSS'],
      githubUrl: "https://github.com/vanshika15007/inscripts-spreadsheet",
      liveDemoUrl: "https://inscripts-spreadsheet.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-transparent px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-center text-primary dark:text-secondary mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white/10 dark:bg-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-white/20 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-500/30 group"
          >
            {/* Icon Section */}
            <div className="flex justify-center mb-2">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg text-3xl group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1m4 0h-1v4h-1"
                  />
                </svg>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-blue-300 dark:text-cyan-300 text-center">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-200 dark:text-gray-200 text-center">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-800/80 text-blue-100 rounded-full text-xs font-semibold shadow"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-800 text-white rounded-full font-semibold shadow hover:bg-gray-900 transition"
              >
                GitHub
              </a>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
