import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center bg-purple-300/10 border-t border-purple-400/30 backdrop-blur-md">
      <motion.div
        className="text-gray-300 text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Designed with{" "}
        <motion.span
          className="inline-block text-purple-400 mx-1"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          💜
        </motion.span>{" "}
        by <span className="text-purple-400 font-semibold">Ashish</span>
      </motion.div>
    </footer>
  );
};

export default Footer;
