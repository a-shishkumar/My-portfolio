import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-transparent text-center">
      {/* Section Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-purple-400 mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Work Experience
      </motion.h1>

      {/* Experience Card */}
      <motion.div
        className="max-w-3xl w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg overflow-hidden p-6 text-left"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 relative">
          {/* Custom Animated Background (Magic Bento alternative) */}
          <motion.div
            className="absolute -z-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 blur-3xl opacity-40"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          />

          {/* Left side icon */}
          <div className="flex-shrink-0 w-24 h-24 flex justify-center items-center rounded-full bg-purple-500/20 border border-purple-400/30">
            <Briefcase className="text-purple-300 w-12 h-12" />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-2 z-10">
            <h2 className="text-2xl font-semibold text-white">
              Software Engineer Intern
            </h2>
            <p className="text-gray-400 font-medium">
              UXDLab Software Pvt. Ltd.
            </p>
            <p className="text-sm text-gray-400">
              <span className="text-purple-300 font-semibold">
                August 2025 - November 2025
              </span>{" "}
              • 3 months internship
            </p>

            <ul className="mt-3 text-gray-300 list-disc pl-6 space-y-1 text-base">
              <li>Contributed to front-end and back-end development tasks.</li>
              <li>
                Worked with modern technologies like React, Node.js, and
                MongoDB.
              </li>
              <li>
                Improved UI/UX flow with responsive and accessible design.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
