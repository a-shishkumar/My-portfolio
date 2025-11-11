import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Github, Linkedin, Mail } from "lucide-react";
import TextType from "../components/TextType";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent">
      {/* Greeting */}
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello,&nbsp;
        <TextType
          text="I'm Ashish"
          as="span"
          className="text-purple-400"
          typingSpeed={170}
          showCursor={true}
          loop={true}
          delay={3000} // wait 3 seconds before retyping
        />
        <motion.span
          className="inline-block origin-[70%_70%] ml-2"
          animate={{ rotate: [0, 14, -8, 14, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          👋
        </motion.span>
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold text-gray-300 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Building seamless{" "}
        <span className="text-purple-400">digital experiences</span> from
        concept to code.
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg sm:text-xl text-gray-400 max-w-3xl mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I’m a passionate{" "}
        <span className="text-purple-400 font-semibold">
          Full Stack Developer
        </span>{" "}
        who thrives on transforming ideas into high-performing web applications.
        I enjoy crafting intuitive user interfaces, architecting robust
        backends, and delivering clean, efficient, and scalable solutions that
        merge creativity with technology.
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex justify-center space-x-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* LinkedIn */}
        <Link
          to="https://www.linkedin.com/in/ashish-kumar-b64066252"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full transition duration-300"
        >
          <span className="absolute inset-0 bg-purple-500/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300"></span>
          <Linkedin className="relative w-8 h-8 text-gray-400 group-hover:text-purple-400 transition duration-300" />
        </Link>

        {/* GitHub */}
        <Link
          to="https://github.com/a-shishkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full transition duration-300"
        >
          <span className="absolute inset-0 bg-purple-500/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300"></span>
          <Github className="relative w-8 h-8 text-gray-400 group-hover:text-purple-400 transition duration-300" />
        </Link>

        {/* Email */}
        <Link
          to="mailto:ASHISHKR.0727@GMAIL.COM?subject=Hello%20Ashish!&body=Hi%20Ashish,%20I%20would%20like%20to%20connect%20with%20you."
          className="group relative p-3 rounded-full transition duration-300"
        >
          <span className="absolute inset-0 bg-purple-500/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300"></span>
          <Mail className="relative w-8 h-8 text-gray-400 group-hover:text-purple-400 transition duration-300" />
        </Link>
      </motion.div>

      {/* Call to Action */}
      <motion.button
        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Sparkles className="w-5 h-5" />
        Explore My Work
      </motion.button>
    </section>
  );
};

export default Hero;
