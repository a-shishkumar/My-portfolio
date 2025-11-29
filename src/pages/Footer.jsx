import { motion } from "framer-motion";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/ashish-kumar-b64066252",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      href: "https://github.com/a-shishkumar",
      label: "GitHub",
      icon: <Github className="w-5 h-5" />,
    },
    {
      href: "mailto:ASHISHKR.0727@GMAIL.COM?subject=Hello%20Ashish",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="w-full py-8 text-center bg-black/40 backdrop-blur-md relative overflow-hidden">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex justify-center items-center gap-4 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${link.label}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#4f95e0]/40 transition-all duration-200 shadow-lg hover:shadow-[0_0_15px_rgba(79,149,224,0.3)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
            >
              <span className="text-[#4f95e0] hover:text-sky-300 transition-colors">
                {link.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-gray-300 text-sm sm:text-base mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Designed with{" "}
          <motion.span
            className="inline-block text-[#4f95e0] mx-1"
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
            💙
          </motion.span>{" "}
          by <span className="text-[#4f95e0] font-semibold">Ashish</span>
        </motion.div>

        <motion.div
          className="text-gray-400 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          © 2025 Ashish Kumar. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
