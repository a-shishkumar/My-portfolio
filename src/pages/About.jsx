import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Download, Sparkles, Mail, Github, Linkedin } from "lucide-react";
import { BorderBeam } from "../components/ui/border-beam";
import { Card } from "../components/ui/card";
import TextType from "../components/TextType";
import contactGif from "../assets/contact.gif";

// Mobile-first responsive variants and shared animations
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});

const pop = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function About() {
  const reduce = useReducedMotion();

  const skills = [
    { name: "React", level: 92 },
    { name: "Next.js", level: 86 },
    { name: "Node.js", level: 84 },
    { name: "TypeScript", level: 78 },
    { name: "Tailwind CSS", level: 90 },
    { name: "MongoDB", level: 75 },
  ];

  return (
    <section
      aria-labelledby="about-heading"
      className="h-full mt-3 flex flex-col justify-center items-center px-6 sm:px-10 lg:px-[9vw] py-3"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-5xl"
      >
        {/* Header */}
        <motion.header variants={fadeUp(0)} aria-hidden={reduce}>
          <h1 className="text-2xl  sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f95e0] via-sky-400 to-blue-600 mb-2 md:mb-6">
            What I Do ?
          </h1>
          <p className="text-sm hidden md:inline  md:my-9 sm:text-base text-[#bdd5ef]  leading-relaxed">
            I'm{" "}
            <TextType
              text={["Full-Stack Developer"]}
              as="span"
              className="font-bold text-gray-300/80"
              typingSpeed={100}
              deletingSpeed={40}
              pauseDuration={2000}
              showCursor={false}
              loop={false}
            />
            , a who builds fast, accessible, and delightful web experiences. I
            focus on clear code, practical UX, and ship features that solve real
            user problems. I enjoy working across the stack — from responsive
            front-ends to reliable backends and APIs.
          </p>
        </motion.header>
        <motion.div
          variants={fadeUp(0.1)}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" mt-3 md:mt-8"
        >
          <Card className="relative p-3 md:p-6 bg-blue-500/5 backdrop-blur-md border border-gray-600 shadow-lg hover:shadow-[0_0_25px_rgba(79,149,224,0.5)] transition-shadow duration-300 overflow-hidden shadow-[0_0_20px_rgba(79,149,224,0.3)] flex f items-center gap-6">
            <BorderBeam
              size={100}
              duration={8}
              colorFrom="#4f95e0"
              colorTo="#2563eb"
            />
            <img
              src={contactGif}
              alt="Contact Animation"
              className="flex-[0_0_35%] hidden md:inline w-full h-auto object-contain rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <div className=" md:flex-[0_0_65%]  md:px-3">
              <h2 className=" text-lf mdtext-4xl font-bold mb-2 md:mb-5 text-[#7EB1E4]">
                Full Stack Development
              </h2>
              <div className="flex flex-wrap justify-center  gap-2 md:gap-4 mb-3 md:mb-6">
                <img
                  src="/assets/tech logos/HTML5.png"
                  alt="HTML5"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/CSS3.png"
                  alt="CSS3"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/JavaScript.png"
                  alt="JavaScript"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/React.png"
                  alt="React"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/Node.js.png"
                  alt="Node.js"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/Express.png"
                  alt="Express"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/Tailwind CSS.png"
                  alt="Tailwind CSS"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/Vercel.png"
                  alt="Vercel"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/Redux.png"
                  alt="Redux"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/Bootstrap.png"
                  alt="Bootstrap"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/MongoDB.png"
                  alt="MongoDB"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
                <img
                  src="/assets/tech logos/MySQL.png"
                  alt="MySQL"
                  className="w-8 md:w-12 h-8 md:h-12 object-contain rounded-lg bg-blue-500/10 backdrop-blur-sm p-1 shadow-sm md:shadow-md shadow-blue-500/50 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <ul className="text-sm sm:text-base text-gray-300/80 leading-relaxed list-disc list-inside  md:space-y-2">
                <li>
                  Building full-stack web applications using Next.js with
                  TypeScript, TailwindCSS, ShadCN, and Prisma
                </li>
                <li>
                  Developing responsive single-page applications using React.js
                </li>
                <li>
                  Creating RESTful APIs using Express for backend development
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>
        {/* Decorative visual + CTA */}
        <motion.div
          variants={fadeUp(0.08)}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6"
        ></motion.div>
      </motion.div>
    </section>
  );
}
