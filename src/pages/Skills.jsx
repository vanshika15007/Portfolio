const skills = [
  { name: "HTML", level: 90, icon: "🌐" },
  { name: "CSS", level: 85, icon: "🎨" },
  { name: "JavaScript", level: 75, icon: "📜" },
  { name: "React", level: 70, icon: "⚛️" },
  { name: "Python", level: 65, icon: "🐍" },
  { name: "Node.js", level: 30, icon: "🟢" },
];

function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center justify-center bg-transparent px-6 py-10 scroll-mt-24">
      <h2 className="text-4xl font-bold text-center text-primary dark:text-secondary mb-12">My Skills</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-2xl p-8 flex flex-col gap-4 items-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-500/30 group"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <div className="flex justify-between w-full mb-1">
              <span className="text-lg font-medium text-gray-200 dark:text-gray-200">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200/40 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
