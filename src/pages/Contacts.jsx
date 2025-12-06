import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BorderBeam } from "@/components/ui/border-beam";
import connectImg from "../assets/connectus.png";

const Contact = () => {
  const reduceMotion = useReducedMotion();

  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honey: "", // honeypot to deter bots
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    setMessageCount(formData.message.length);
  }, [formData.message]);

  // keep success message accessible
  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(t);
    }
  }, [success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));

    // simple live validation: remove error when corrected
    if (errors[name]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[name];
        return n;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData._honey) newErrors.bot = "Spam detected"; // honeypot
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess(false);

    const newErrors = validate();
    if (Object.keys(newErrors).length) return setErrors(newErrors);

    setLoading(true);
    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        _honey: "",
      });
    }, 1100);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" aria-hidden />,
      text: "ashish@example.com",
      href: "mailto:ashish@example.com",
      label: "Email Ashish",
    },
    {
      icon: <Phone className="w-5 h-5" aria-hidden />,
      text: "+91 98765 43210",
      href: "tel:+919876543210",
      label: "Call Ashish",
    },
    {
      icon: <MapPin className="w-5 h-5" aria-hidden />,
      text: "New Delhi, India",
      href: "#",
      label: "Location",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/ashish-kumar-b64066252",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" aria-hidden />,
    },
    {
      href: "https://github.com/a-shishkumar",
      label: "GitHub",
      icon: <Github className="w-5 h-5" aria-hidden />,
    },
  ];

  const middleIcons = [
    {
      href: "tel:+919876543210",
      label: "Call Ashish",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      href: "https://github.com/a-shishkumar",
      label: "GitHub",
      icon: <Github className="w-6 h-6" />,
    },
    {
      href: "https://www.linkedin.com/in/ashish-kumar-b64066252",
      label: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
    },
  ];

  // motion helpers that respect reduced motion
  const appear = reduceMotion
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45 },
      };

  return (
    <section className="min-h-screen flex items-center justify-center md:px-6 md:py-16 ">
      <div className="w-full max-w-6xl lg:max-w-[70vw]">
        <motion.h1
          {...appear}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f95e0] via-sky-400 to-blue-600 mb-8 text-center"
        >
          Get in Touch
        </motion.h1>
        <Card className="relative w-full  md:p-6 bg-[#161A21] border-slate-700/40 rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(79,149,224,0.25)] shadow-[0_0_20px_rgba(79,149,224,0.3)] shadow-[inset 0 0 0 1px rgba(79,149,224,0.3)] drop-shadow-[0_0_10px_rgba(79,149,224,0.5)]">
          <BorderBeam
            size={100}
            duration={8}
            colorFrom="#4f95e0"
            colorTo="#2563eb"
          />
          <CardContent className="p-0 md:space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between md:px-2 md:gap-10">
              <div>
                {/* Left: connect image */}
                <motion.div
                  {...appear}
                  className="order-4 md:order-1 flex justify-center group"
                  whileHover={!reduceMotion ? { scale: 1.05, rotate: 2 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={connectImg}
                    alt="Connect"
                    className=" w-full md:w-[30vw] max-w-sm h-[25vh] md:h-[30vw] rounded-2xl"
                    animate={!reduceMotion ? { scale: [1, 1.05, 1] } : {}}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
              <div className="flex flex-col mb-3 md:flex-row justify-between gap-4 md:gap-7 ">
                {/* Middle: linked icons */}
                <motion.div
                  {...appear}
                  className="order-3 md:order-2 flex md:flex-col items-center justify-center gap-2 md/;gap-4"
                >
                  {middleIcons.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={item.label}
                      whileHover={!reduceMotion ? { scale: 1.06, y: -2 } : {}}
                      whileTap={!reduceMotion ? { scale: 0.94 } : {}}
                      className="group inline-flex items-center justify-center p-1 md:p-3 rounded-full
                  bg-white/3 border border-white/6 hover:bg-white/4 transition"
                    >
                      {React.cloneElement(item.icon, {
                        className:
                          "text-[#4f95e0] group-hover:text-sky-300 group-hover:animate-spin group-hover:-translate-y-1 transition-all",
                      })}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Right: form card - card on large screens, without card on small screens */}
                <motion.div {...appear} className="order-1 md:order-3">
                  {/* Form without card - visible only on small screens */}
                  <div className="md:hidden">
                    <div>
                      <h2 className="text-center text-[#4f95e0] text-2xl font-semibold ">
                        Send a Message
                      </h2>

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-1"
                        noValidate
                      >
                        {/* accessible live region for status */}
                        <div role="status" aria-live="polite">
                          {success && (
                            <div className="rounded-md bg-green-900/20 border border-green-500/20 text-green-300 p-3 text-center">
                              Message sent successfully — thank you!
                            </div>
                          )}
                        </div>

                        {/* honeypot - hidden from users */}
                        <label
                          style={{ position: "absolute", left: -9999 }}
                          aria-hidden
                        >
                          Don't fill this out if you're human:
                          <input
                            name="_honey"
                            value={formData._honey}
                            onChange={handleChange}
                          />
                        </label>

                        <div className="grid grid-cols-1 gap-3">
                          <div>
                            <label className="flex justify-between text-sm text-gray-300 mb-1">
                              Your Name
                            </label>
                            <div className="flex-1">
                              <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full name"
                                aria-invalid={errors.name ? "true" : "false"}
                                required
                                className={`bg-white/6 border-white/10 text-gray-100 placeholder-gray-400 focus:border-[#4f95e0] focus:ring-[#4f95e0]/20 ${
                                  errors.name ? "ring-2 ring-red-500/30" : ""
                                }`}
                              />
                              {errors.name && (
                                <p className="text-xs text-red-400 mt-1">
                                  {errors.name}
                                </p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label className="flex justify-between text-sm text-gray-300 mb-1">
                              Your Email
                            </label>
                            <div className="flex-1">
                              <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@domain.com"
                                aria-invalid={errors.email ? "true" : "false"}
                                required
                                className={`bg-white/6 border-white/10 text-gray-100 placeholder-gray-400 focus:border-[#4f95e0] focus:ring-[#4f95e0]/20 ${
                                  errors.email ? "ring-2 ring-red-500/30" : ""
                                }`}
                              />
                              {errors.email && (
                                <p className="text-xs text-red-400 mt-1">
                                  {errors.email}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="flex justify-between text-sm text-gray-300 mb-1">
                            Subject
                          </label>
                          <div className="flex-1">
                            <Input
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="What's this about?"
                              aria-invalid={errors.subject ? "true" : "false"}
                              required
                              className={`bg-white/6 border-white/10 text-gray-100 placeholder-gray-400 focus:border-[#4f95e0] focus:ring-[#4f95e0]/20 ${
                                errors.subject ? "ring-2 ring-red-500/30" : ""
                              }`}
                            />
                            {errors.subject && (
                              <p className="text-xs text-red-400 mt-1">
                                {errors.subject}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="flex justify-between text-sm text-gray-300 mb-1">
                            <span>Message</span>
                            <span className="text-xs text-gray-400">
                              {messageCount}/1000
                            </span>
                          </label>
                          <Textarea
                            name="message"
                            rows={2}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project or idea..."
                            maxLength={1000}
                            aria-invalid={errors.message ? "true" : "false"}
                            required
                            className={`bg-white/6 border-white/10 text-gray-100 placeholder-gray-400 focus:border-[#4f95e0] focus:ring-[#4f95e0]/20 resize-y ${
                              errors.message ? "ring-2 ring-red-500/30" : ""
                            }`}
                          />
                          {errors.message && (
                            <p className="text-xs text-red-400 mt-1">
                              {errors.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Button
                            type="submit"
                            disabled={loading}
                            aria-disabled={loading}
                            className="w-full flex items-center  justify-center gap-3 md:py-3 rounded-lg font-semibold shadow hover:shadow-lg transition transform active:scale-95"
                          >
                            {loading ? (
                              <div className="flex items-center gap-2">
                                <motion.div
                                  animate={reduceMotion ? {} : { rotate: 360 }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 0.9,
                                  }}
                                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                />
                                Sending...
                              </div>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                <span>Send Message</span>
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Card wrapper - visible only on large screens */}
                  <div className="hidden md:block">
                    <Card className="relative rounded-2xl border border-slate-700/40 shadow-lg transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(79,149,224,0.25)] shadow-[0_0_20px_rgba(79,149,224,0.3)] shadow-[inset 0 0 0 1px rgba(79,149,224,0.3)] drop-shadow-[0_0_10px_rgba(79,149,224,0.5)] bg-[#161A21] min-w-[35vw]">
                      <BorderBeam
                        size={100}
                        duration={6}
                        colorFrom="#4f95e0"
                        colorTo="#2563eb"
                      />

                      <CardHeader>
                        <CardTitle className="text-center text-[#4f95e0] text-2xl">
                          Send a Message
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <form
                          onSubmit={handleSubmit}
                          className="space-y-4"
                          noValidate
                        >
                          {/* accessible live region for status */}
                          <div role="status" aria-live="polite">
                            {success && (
                              <div className="rounded-md bg-green-900/20 border border-green-500/20 text-green-300 p-3 text-center">
                                Message sent successfully — thank you!
                              </div>
                            )}
                          </div>

                          {/* honeypot - hidden from users */}
                          <label
                            style={{ position: "absolute", left: -9999 }}
                            aria-hidden
                          >
                            Don't fill this out if you're human:
                            <input
                              name="_honey"
                              value={formData._honey}
                              onChange={handleChange}
                            />
                          </label>

                          <div className="grid grid-cols-1 gap-3">
                            <div>
                              <label className="flex justify-between text-sm text-gray-300 mb-1">
                                Your Name
                              </label>
                              <div className="flex-1">
                                <Input
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder="Full name"
                                  aria-invalid={errors.name ? "true" : "false"}
                                  required
                                  className={`bg-white/6 border-white/10 text-gray-100 placeholder-gray-400 focus:border-[#4f95e0] focus:ring-[#4f95e0]/20 ${
                                    errors.name ? "ring-2 ring-red-500/30" : ""
                                  }`}
                                />
                                {errors.name && (
                                  <p className="text-xs text-red-400 mt-1">
                                    {errors.name}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div>
                              <label className="flex justify-between text-sm text-gray-300 mb-1">
                                Your Email
                              </label>
                              <div className="flex-1">
                                <Input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="you@domain.com"
                                  aria-invalid={errors.email ? "true" : "false"}
                                  required
                                  className={`bg-white/6 border-white/10 text-gray-100 placeholder-gray-400 focus:border-[#4f95e0] focus:ring-[#4f95e0]/20 ${
                                    errors.email ? "ring-2 ring-red-500/30" : ""
                                  }`}
                                />
                                {errors.email && (
                                  <p className="text-xs text-red-400 mt-1">
                                    {errors.email}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="flex justify-between text-sm text-gray-300 mb-1">
                              Subject
                            </label>
                            <div className="flex-1">
                              <Input
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What's this about?"
                                aria-invalid={errors.subject ? "true" : "false"}
                                required
                                className={`bg-white/6 border-white/10 text-gray-100 placeholder-gray-400 focus:border-[#4f95e0] focus:ring-[#4f95e0]/20 ${
                                  errors.subject ? "ring-2 ring-red-500/30" : ""
                                }`}
                              />
                              {errors.subject && (
                                <p className="text-xs text-red-400 mt-1">
                                  {errors.subject}
                                </p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label className="flex justify-between text-sm text-gray-300 mb-1">
                              <span>Message</span>
                              <span className="text-xs text-gray-400">
                                {messageCount}/1000
                              </span>
                            </label>
                            <Textarea
                              name="message"
                              rows={5}
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell me about your project or idea..."
                              maxLength={1000}
                              aria-invalid={errors.message ? "true" : "false"}
                              required
                              className={`bg-white/6 border-white/10 text-gray-100 placeholder-gray-400 focus:border-[#4f95e0] focus:ring-[#4f95e0]/20 resize-y ${
                                errors.message ? "ring-2 ring-red-500/30" : ""
                              }`}
                            />
                            {errors.message && (
                              <p className="text-xs text-red-400 mt-1">
                                {errors.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <Button
                              type="submit"
                              disabled={loading}
                              aria-disabled={loading}
                              className="w-full flex items-center justify-center gap-3 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition transform active:scale-95"
                            >
                              {loading ? (
                                <div className="flex items-center gap-2">
                                  <motion.div
                                    animate={
                                      reduceMotion ? {} : { rotate: 360 }
                                    }
                                    transition={{
                                      repeat: Infinity,
                                      duration: 0.9,
                                    }}
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                  />
                                  Sending...
                                </div>
                              ) : (
                                <>
                                  <Send className="w-4 h-4" />
                                  <span>Send Message</span>
                                </>
                              )}
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
