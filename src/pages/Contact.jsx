
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-transparent px-6 py-10 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-center text-primary dark:text-secondary mb-8">
        Contact Me
      </h2>
      <div className="max-w-2xl w-full mx-auto bg-white/10 dark:bg-white/10 p-10 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 space-y-6 transition-all duration-300 hover:scale-[1.02] text-gray-200 text-lg">
        <div className="mb-4 flex items-center gap-3">
          <FaEnvelope className="text-blue-400 w-6 h-6" />
          <span className="font-semibold">Email:</span>
          <a href="mailto:vanshika02007@gmail.com" className="text-blue-400 underline">vanshika02007@gmail.com</a>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-400 w-6 h-6" />
          <span className="font-semibold">Location:</span> India, Delhi
        </div>
      </div>
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-8 animate-fade-in">
        <a
          href="https://github.com/vanshika15007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition text-3xl"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/vanshika-sharma-8880a2330"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition text-3xl"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
