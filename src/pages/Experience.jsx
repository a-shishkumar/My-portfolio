import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Briefcase, Code, Database, Palette } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "UXDLab Software Pvt. Ltd.",
      dates: "August 2025 - November 2025",
      duration: "3 months internship",
      responsibilities: [
        {
          icon: <Code className="w-6 h-6" />,
          text: "Contributed to front-end and back-end development tasks.",
        },
        {
          icon: <Database className="w-6 h-6" />,
          text: "Worked with modern technologies like React, Node.js, and MongoDB.",
        },
        {
          icon: <Palette className="w-6 h-6" />,
          text: "Improved UI/UX flow with responsive and accessible design.",
        },
      ],
    },
  ];

  // Motion variants for consistency
  const containerVariant = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.08 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 12 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.45 },
    }),
    hover: { scale: 1.02, y: -4, transition: { duration: 0.18 } },
  };

  return (
    <section className="h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-[5vw]">
      <motion.div
        className="w-full max-w-[1400px]"
        initial="hidden"
        animate="show"
        variants={containerVariant}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f95e0] via-sky-400 to-blue-600 mb-8 text-center">
          Work Experience
        </motion.h1>

        {experiences.map((exp, expIndex) => (
          <div key={expIndex} className="space-y-6">
            {/* Main Experience Card */}
            <motion.div
              variants={itemVariant}
              custom={expIndex}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="relative"
            >
              <Card className="relative w-full p-6 bg-gradient-to-br from-white/3 to-blue-50/2 backdrop-blur-md border border-slate-700/40 rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(79,149,224,0.25)] shadow-[0_0_20px_rgba(79,149,224,0.3)]">
                <BorderBeam
                  size={110}
                  duration={8}
                  colorFrom="#4f95e0"
                  colorTo="#2563eb"
                />
                <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-0">
                  <div className="flex-shrink-0 w-20 h-20 flex justify-center items-center rounded-full bg-[#4f95e0]/20 border border-[#4f95e0]/30">
                    <Briefcase className="text-[#4f95e0] w-10 h-10" />
                  </div>
                  <div className="flex flex-col gap-2 text-center sm:text-left">
                    <h2 className="text-2xl font-semibold text-white">
                      {exp.title}
                    </h2>
                    <p className="text-gray-400 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-400">
                      <span className="text-[#4f95e0] font-semibold">
                        {exp.dates}
                      </span>{" "}
                      • {exp.duration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Responsibility Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {exp.responsibilities.map((resp, respIndex) => (
                <motion.div
                  key={respIndex}
                  variants={itemVariant}
                  custom={expIndex * 3 + respIndex + 1}
                  initial="hidden"
                  animate="show"
                  whileHover="hover"
                  className="relative"
                >
                  <Card className="relative w-full p-4 bg-gradient-to-br from-white/3 to-blue-50/2 backdrop-blur-md border border-slate-700/40 rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(79,149,224,0.25)] shadow-[0_0_20px_rgba(79,149,224,0.3)] flex flex-col items-center text-center">
                    <BorderBeam
                      size={90}
                      duration={8}
                      colorFrom="#4f95e0"
                      colorTo="#2563eb"
                    />
                    <CardContent className="flex flex-col items-center gap-3 p-0">
                      <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#4f95e0]/20 border border-[#4f95e0]/30">
                        {resp.icon}
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {resp.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
