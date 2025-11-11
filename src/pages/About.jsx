import React from "react";
import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent py-16">
      {/* Section Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-purple-400 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* About Text */}
      <motion.p
        className="text-lg sm:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm a passionate{" "}
        <span className="text-purple-400 font-semibold">
          Full Stack Developer
        </span>{" "}
        with a strong eye for detail and a love for building seamless digital
        experiences. From creating intuitive front-end interfaces to developing
        robust back-end systems, I aim to bridge creativity and functionality in
        every project I take on.
      </motion.p>

      {/* Why Hire Me Section */}
      <motion.div
        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 max-w-4xl text-left mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-purple-400 mb-4 text-center">
          Why Hire Me?
        </h2>
        <ul className="space-y-3 text-gray-300 text-lg">
          <li>✨ I write clean, maintainable, and scalable code.</li>
          <li>
            🚀 I’m experienced with modern web technologies (React, Node.js,
            Tailwind, MongoDB).
          </li>
          <li>
            💡 I focus on creating elegant UI/UX that enhances user engagement.
          </li>
          <li>
            🤝 I’m reliable, deadline-driven, and a strong team collaborator.
          </li>
          <li>
            🎯 I’m passionate about learning, improving, and pushing creative
            boundaries.
          </li>
        </ul>
      </motion.div>

      {/* Resume Button */}
      <motion.a
        href="/Ashish_Resume.pdf" // Place your resume in /public folder
        download
        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Download className="w-5 h-5" />
        Download Resume
      </motion.a>

      {/* Decorative sparkles animation */}
      <motion.div
        className="mt-12 text-purple-500 text-4xl"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Sparkles />
      </motion.div>
    </section>
  );
};

export default About;
