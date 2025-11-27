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

  // motion helpers that respect reduced motion
  const appear = reduceMotion
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45 },
      };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-slate-900/40 to-transparent">
      <div className="w-full max-w-6xl">
        <motion.div {...appear} className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#4f95e0] via-sky-400 to-blue-600">
            Get in Touch
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            I’m open to new projects, collaborations, or a friendly chat. Fill
            the form or reach me directly via the contact options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: contact summary card */}
          <motion.div {...appear} className="order-2 md:order-1">
            <Card className="relative overflow-hidden rounded-2xl border border-slate-700/40 shadow-lg bg-gradient-to-br from-white/3 to-blue-50/2">
              <BorderBeam
                size={140}
                duration={8}
                colorFrom="#4f95e0"
                colorTo="#2563eb"
              />

              <CardHeader>
                <CardTitle className="text-xl text-[#4f95e0]">
                  Contact Info
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-300">
                  Prefer email? I usually reply within 24–48 hours.
                </p>

                <div className="grid gap-3">
                  {contactInfo.map((c, i) => (
                    <a
                      key={i}
                      href={c.href}
                      aria-label={c.label}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/3 border border-white/6 hover:bg-white/4 transition"
                    >
                      <div className="text-[#4f95e0]">{c.icon}</div>
                      <div className="text-sm text-gray-200">{c.text}</div>
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${s.label}`}
                      className="p-2 rounded-full bg-white/3 border border-white/6 hover:bg-white/4 transition"
                    >
                      <span className="text-[#4f95e0]">{s.icon}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-2 text-sm text-gray-400">
                  <strong>Tip:</strong> Brief subject lines get faster
                  responses.
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: form card */}
          <motion.div {...appear} className="order-1 md:order-2">
            <Card className="relative rounded-2xl border border-slate-700/40 shadow-lg bg-gradient-to-br from-white/3 to-blue-50/2">
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
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                    Don’t fill this out if you’re human:
                    <input
                      name="_honey"
                      value={formData._honey}
                      onChange={handleChange}
                    />
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Your Name
                      </label>
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

                    <div>
                      <label className="block text-sm text-gray-300 mb-1">
                        Your Email
                      </label>
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

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Subject
                    </label>
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
                            animate={reduceMotion ? {} : { rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.9 }}
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
          </motion.div>
        </div>

        <motion.div
          {...(reduceMotion
            ? {}
            : {
                animate: { opacity: [0.5, 1, 0.5], scale: [1, 1.06, 1] },
                transition: { repeat: Infinity, duration: 2 },
              })}
          className="mt-8 text-[#4f95e0] text-4xl flex justify-center"
          aria-hidden
        >
          <Sparkles />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
