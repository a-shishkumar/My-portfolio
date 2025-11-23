import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  User,
  MessageSquare,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess(false);
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      }, 2000);
    }
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
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl w-full lg:w-full max-w-lg">
            <CardHeader>
              <CardTitle className="text-center text-purple-400 text-2xl">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Info */}
              <div className="grid sm:grid-cols-3 gap-4 text-center text-gray-300">
                <div className="flex flex-col items-center gap-2">
                  <Mail className="text-purple-400 w-5 h-5" />
                  <p className="text-sm">ashish@example.com</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Phone className="text-purple-400 w-5 h-5" />
                  <p className="text-sm">+91 98765 43210</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="text-purple-400 w-5 h-5" />
                  <p className="text-sm">New Delhi, India</p>
                </div>
              </div>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center bg-green-900/20 p-3 rounded-lg"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition"
                      placeholder="What's this about?"
                    />
                  </div>
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition resize-none"
                      placeholder="Tell me about your project or idea..."
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
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
