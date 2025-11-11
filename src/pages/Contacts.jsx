import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-transparent">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-purple-400 mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Let’s collaborate or chat! I’m always open to discussing new projects,
        creative ideas, or opportunities to be part of your vision.
      </motion.p>

      {/* Main Container */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Left Side - Animated Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* You can use an animated GIF, Lottie, or SVG illustration here */}
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Contact animation"
            className="w-80 sm:w-96 lg:w-full max-w-md rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Side - Contact Form Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 w-full lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10 text-center text-gray-300">
            <div className="flex flex-col items-center gap-2">
              <Mail className="text-purple-400 w-6 h-6" />
              <p>ashish@example.com</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="text-purple-400 w-6 h-6" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="text-purple-400 w-6 h-6" />
              <p>New Delhi, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg w-full transition duration-300"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Decorative sparkles */}
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

export default Contact;
