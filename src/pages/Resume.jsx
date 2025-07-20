import React from "react";

function Resume() {
  return (
    <section className="flex flex-col items-center justify-center bg-transparent px-6 py-10 scroll-mt-24">
      <h2 className="text-4xl font-bold mb-8 text-primary dark:text-secondary">My Resume</h2>
      <div className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-6 backdrop-blur-md border border-white/20 max-w-md w-full">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl shadow-lg mb-2">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V7.828a2 2 0 00-.586-1.414l-3.828-3.828A2 2 0 0014.172 2H6a2 2 0 00-2 2v16a2 2 0 002 2h2" />
          </svg>
        </div>
        <a
          href="/Vanshika_SharmaResume.pdf"
          download
          className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition text-lg"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;