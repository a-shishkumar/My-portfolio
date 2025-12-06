import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Github, Linkedin, Mail } from "lucide-react";
import TextType from "../components/TextType";
import { BorderBeam } from "../components/ui/border-beam";
import profileImg from "../assets/profile.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const float = {
  hidden: { scale: 0.8, y: 20, opacity: 0 },
  show: {
    scale: 1,
    y: [0, -10, 0],
    opacity: 1,
    transition: {
      scale: { type: "spring", stiffness: 300, damping: 20 },
      y: {
        duration: 2,
        repeat: Infinity,
        ease: [0.68, -0.55, 0.265, 1.55],
      },
      opacity: { duration: 0.5 },
    },
  },
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  // control start of sliding animation for the name (after typing completes)
  const [startSlide, setStartSlide] = useState(false);

  // scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // typing settings for the name TextType (keep in sync with the component props below)
  const nameText = "I'm Ashish";
  const nameTypingSpeed = 180; // ms per character (matches TextType prop)
  const namePauseDuration = 1000; // same as pauseDuration prop in TextType

  // Scroll to hero on mount (optional)
  useEffect(() => {
    const el = document.getElementById("hero");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // estimate when the name typing completes, then start the slide animation
    if (!reduceMotion) {
      // estimate: typing time = chars * speed + small buffer + pauseDuration
      const estimatedTypingTime =
        nameText.length * nameTypingSpeed + namePauseDuration + 250;
      const t = setTimeout(() => setStartSlide(true), estimatedTypingTime);
      return () => clearTimeout(t);
    } else {
      // if reduced motion is preferred, don't start sliding
      setStartSlide(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  // scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // waving animation values (applied only when motion is allowed)
  const waveAnim = { rotate: [0, 14, -8, 14, 0] };
  const waveTrans = { repeat: Infinity, duration: 2.2, ease: "easeInOut" };

  // sliding animation for name after typing completes
  const nameSlideAnim =
    startSlide && !reduceMotion ? { x: [0, 8, -8, 0] } : { x: 0 };
  const nameSlideTrans =
    startSlide && !reduceMotion
      ? { duration: 3.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }
      : { duration: 0 };

  // scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-full   flex items-center mx-5xl px-[9vw]"
      aria-labelledby="hero-heading"
    >
      <div className="w-full mt-18 md:mt-30 max-w-full flex flex-col lg:flex-row items-center lg:justify-between gap-2 md:gap-8 text-center lg:text-left">
        {/* MOBILE: show profile image above the Hello text (only on small screens) */}
        <motion.div
          variants={float}
          initial="hidden"
          animate={reduceMotion ? undefined : "show"}
          className="flex-shrink-0 lg:hidden flex justify-center w-full"
        >
          <div className="relative w-35 md:w-40 h-35 mdh-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-2">
            <BorderBeam colorFrom="#ffd151" colorTo="#ffbf00" />
            <img
              src={profileImg}
              alt="Ashish Kumar Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center lg:items-start gap-4  "
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="w-full">
            {/* Hello line */}
            <motion.h1
              variants={fadeUp}
              className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight 
             text-[#FFCF50]/80 text-left ps-7 md:ps-0"
            >
              Hello
            </motion.h1>

            {/* Name (typed) + waving hand on same line; roles on next line */}
            <motion.div
              variants={fadeUp}
              className="mt-2 flex flex-col items-center lg:items-start"
            >
              {/* Line 1: Name typed (TextType) + waving hand */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Wrapper for typed name — we animate this wrapper to slide after typing */}
                <motion.span
                  className="inline-flex items-center"
                  animate={nameSlideAnim}
                  transition={nameSlideTrans}
                  whileHover={!reduceMotion ? { scale: 1.02, y: -2 } : {}}
                >
                  <motion.span
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-[#83b0e1] via-sky-400 to-blue-500 text-left "
                    aria-hidden="false"
                  >
                    <TextType
                      text={[nameText]}
                      as="span"
                      className="inline-block"
                      typingSpeed={nameTypingSpeed}
                      deletingSpeed={40}
                      pauseDuration={namePauseDuration}
                      showCursor={false}
                      loop={false}
                    />
                  </motion.span>
                </motion.span>

                {/* Waving hand aligned to right of name */}
                {!reduceMotion ? (
                  <motion.span
                    aria-hidden="true"
                    className="inline-block origin-[60%_60%] text-4xl"
                    animate={waveAnim}
                    transition={waveTrans}
                  >
                    👋
                  </motion.span>
                ) : (
                  <span aria-hidden className="inline-block text-3xl">
                    👋
                  </span>
                )}
              </motion.div>

              {/* Line 2: Roles (TextType) — inside a styled box */}
              <div className="relative mt-3 md:mt-7 p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-left">
                <BorderBeam colorFrom="#83b0e1" colorTo="#60a5fa" />
                <motion.div
                  className="text-sm font-semibold sm:text-xl text-slate-300 text-left "
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                >
                  <TextType
                    text={[
                      "Full Stack Developer",
                      "Web Developer",
                      "MERN Stack Developer",
                      "Software Developer",
                    ]}
                    as="span"
                    className="inline-block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#83b0e1] via-sky-300 to-blue-400"
                    typingSpeed={60}
                    deletingSpeed={40}
                    pauseDuration={1600}
                    showCursor={!reduceMotion}
                    loop={true}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Short description */}
            <motion.p
              variants={fadeUp}
              className=" mt-3 md:mt-7 text-sm sm:text-base text-[#bdd5ef]  pl-0 font-semibold max-w-4xl leading-relaxed"
            >
              I build accessible, fast and maintainable web apps. I focus on
              responsive interfaces, clean code, and delightful user
              experiences. Currently crafting full-stack projects using the
              modern web stack.
            </motion.p>

            {/* Social + CTA */}
            <motion.div
              variants={fadeUp}
              className=" mt-3 md:mt-8 flex md:items-center flex-col sm:flex-row sm:items-center sm:justify-start  gap-1  md:gap-4"
            >
              <div className="flex items-center gap-1  md:gap-4">
                {[
                  {
                    href: "https://www.linkedin.com/in/ashish-kumar-b64066252",
                    label: "LinkedIn",
                    icon: <Linkedin className=" w-3  md:w-5 h-3 md:h-5" />,
                  },
                  {
                    href: "https://github.com/a-shishkumar",
                    label: "GitHub",
                    icon: <Github className="w-3 md:w-5 h-3 md:h-5" />,
                  },
                  {
                    href: "mailto:ASHISHKR.0727@GMAIL.COM?subject=Hello%20Ashish",
                    label: "Email",
                    icon: <Mail className="w-3 md:w-5 h-3 md:h-5" />,
                  },
                ].map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.label}`}
                    whileHover={!reduceMotion ? { scale: 1.06, y: -2 } : {}}
                    whileTap={!reduceMotion ? { scale: 0.94 } : {}}
                    className="group inline-flex items-center justify-center p-1.5 md:p-2.5 rounded-full
                      bg-gradient-to-br from-white/3 to-white/2 border border-white/6 backdrop-blur-md shadow-lg
                      hover:shadow-lg hover:shadow-sky-400/30 transition-all duration-200"
                  >
                    {React.cloneElement(item.icon, {
                      className:
                        "text-[#83b0e1] group-hover:text-sky-300 group-hover:animate-spin group-hover:-translate-y-1 transition-all",
                    })}
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-4 justify-center  px-auto md:px-4   md:mt-4 mt-1">
                {/* Contact (now same frosted style as Resume) */}
                <motion.a
                  href="#contact"
                  className="relative text-sm md:text-lg inline-flex items-center gap-2 px-4 md:px-6  md:py-3 rounded-full
               font-semibold text-[#ffd151] border border-[#ffd151]/40
               bg-white/5 backdrop-blur-md shadow-[0_0_12px_rgba(255,209,81,0.15)]"
                  whileHover={
                    !reduceMotion
                      ? {
                          y: -4,
                          scale: 1.05,
                          boxShadow:
                            "0 0 20px rgba(255,209,81,0.4), 0 0 35px rgba(255,180,0,0.2)",
                        }
                      : {}
                  }
                  whileTap={!reduceMotion ? { scale: 0.96 } : {}}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                >
                  <BorderBeam colorFrom="#ffd151" colorTo="#ffbf00" />
                  Contact Me
                </motion.a>

                {/* Resume (unchanged frosted style) */}
                <motion.a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm md:text-lg inline-flex items-center gap-2 px-4 md:px-6 py-2  md:py-3 rounded-full
               font-semibold text-[#ffd151] border border-[#ffd151]/40
               bg-white/5 backdrop-blur-md shadow-[0_0_12px_rgba(255,209,81,0.15)]"
                  whileHover={
                    !reduceMotion
                      ? {
                          y: -4,
                          scale: 1.05,
                          boxShadow:
                            "0 0 20px rgba(255,209,81,0.4), 0 0 35px rgba(255,180,0,0.2)",
                        }
                      : {}
                  }
                  whileTap={!reduceMotion ? { scale: 0.96 } : {}}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                >
                  <BorderBeam colorFrom="#ffd151" colorTo="#ffbf00" />
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Image for DESKTOP (unchanged) */}
        <motion.div
          variants={float}
          initial="hidden"
          animate={reduceMotion ? undefined : "show"}
          className="relative flex-shrink-0 hidden lg:block"
          whileHover={!reduceMotion ? { scale: 1.05, rotate: 2 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <BorderBeam colorFrom="#ffd151" colorTo="#ffbf00" />
            <img
              src={profileImg}
              alt="Ashish Kumar Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#ffd151] text-black rounded-full shadow-lg hover:bg-[#ffbf00] transition-colors z-50"
          whileHover={!reduceMotion ? { scale: 1.1 } : {}}
          whileTap={!reduceMotion ? { scale: 0.9 } : {}}
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </section>
  );
};

export default Hero;
