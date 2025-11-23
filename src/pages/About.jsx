import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Download, Sparkles, Mail, Github, Linkedin } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const pop = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-heading"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-b from-transparent via-white/2 to-transparent"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-4xl"
      >
        {/* Heading */}
        <motion.h1
          id="about-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400 mb-6"
          variants={fadeUp}
          aria-hidden={shouldReduceMotion}
        >
          About Me
        </motion.h1>

        {/* Intro / paragraph */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          I'm a{" "}
          <span className="text-purple-300 font-semibold">
            Full Stack Developer
          </span>{" "}
          who loves building polished, accessible, and high-performance web
          applications. I focus on approachable UI/UX, readable code, and
          features that actually help people. I work across the stack — from
          interactive front-ends to resilient backends.
        </motion.p>

        {/* Card with reasons */}
        <motion.div
          variants={pop}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-300 mb-4">
            Why hire me?
          </h2>

          <motion.ul
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-gray-200 text-sm sm:text-base"
          >
            {[
              "Clean, maintainable, and scalable code",
              "Modern stack: React, Next.js, Node, Tailwind, MongoDB",
              "Focus on performance and accessibility (a11y)",
              "Team player: good communication & timely delivery",
              "Fast learner, loves exploring new tech",
              "Design-minded: attention to UI/UX details",
            ].map((item, idx) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/3 transition"
              >
                <span className="flex-shrink-0 mt-1 text-purple-300">✨</span>
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Actions: Resume + Links */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <motion.a
            href="/Ashish_Resume.pdf"
            download
            role="button"
            aria-label="Download resume"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-5 py-3 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            <Download className="w-5 h-5" aria-hidden />
            <span>Download Resume</span>
          </motion.a>

          <div className="flex items-center gap-2">
            <motion.a
              href="mailto:your.email@example.com"
              aria-label="Email me"
              whileHover={{ y: -3 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/6 transition focus:ring-2 focus:ring-offset-2 focus:ring-purple-300"
            >
              <Mail className="w-4 h-4 text-purple-300" />
            </motion.a>

            <motion.a
              href="#"
              aria-label="GitHub profile"
              whileHover={{ y: -3 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/6 transition focus:ring-2 focus:ring-offset-2 focus:ring-purple-300"
            >
              <Github className="w-4 h-4 text-purple-300" />
            </motion.a>

            <motion.a
              href="#"
              aria-label="LinkedIn profile"
              whileHover={{ y: -3 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/6 transition focus:ring-2 focus:ring-offset-2 focus:ring-purple-300"
            >
              <Linkedin className="w-4 h-4 text-purple-300" />
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative sparkles + skill chips */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.div
            aria-hidden
            animate={{ rotate: [0, 12, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="text-4xl text-purple-300"
          >
            <Sparkles />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
