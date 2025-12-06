import React, { useState } from "react";
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
          icon: <Code className="w-6 h-6 text-yellow-500 z-10000" />,
          text: "Contributed to front-end and back-end development tasks.",
        },
        {
          icon: <Database className="w-6 h-6 text-yellow-500" />,
          text: "Worked with modern technologies like React, Node.js, and MongoDB.",
        },
        {
          icon: <Palette className="w-6 h-6 text-yellow-500" />,
          text: "Improved UI/UX flow with responsive and accessible design.",
        },
      ],
    },
  ];

  // keep current slide index per experience (array of indexes)
  const [currentResps, setCurrentResps] = useState(experiences.map(() => 0));

  const setCurrentRespFor = (expIndex, value) => {
    setCurrentResps((prev) => {
      const next = [...prev];
      next[expIndex] = value;
      return next;
    });
  };

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

        {experiences.map((exp, expIndex) => {
          const currentResp = currentResps[expIndex] ?? 0;

          return (
            <motion.div
              key={expIndex}
              variants={itemVariant}
              custom={expIndex}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="relative group mb-6"
            >
              <Card className="relative w-full p-6 bg-[#161A21] border border-[#4f95e0]/30 rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 shadow-[0_0_30px_rgba(79,149,224,0.25)] shadow-[0_0_20px_rgba(79,149,224,0.3)] shadow-[inset 0 0 0 1px rgba(79,149,224,0.3)] drop-shadow-[0_0_10px_rgba(79,149,224,0.5)] hover:shadow-[0_0_20px_rgba(79,149,224,0.4)]">
                <BorderBeam
                  size={100}
                  duration={8}
                  colorFrom="#4f95e0"
                  colorTo="#2563eb"
                />
                <CardContent className="p-0 space-y-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 flex justify-center items-center rounded-full border border-[#4f95e0]/30">
                      <motion.div
                        whileHover={{ rotate: 12 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Briefcase className="text-[#4f95e0] w-10 h-10" />
                      </motion.div>
                    </div>
                    <div className="flex flex-col gap-2 text-center sm:text-left">
                      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4f95e0] via-sky-400 to-blue-600">
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
                  </div>

                  {/* Desktop: grid */}
                  <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.div
                        key={respIndex}
                        variants={itemVariant}
                        custom={expIndex * 3 + respIndex + 1}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        className="relative group p-4 bg-[#161A21] backdrop-blur-md border border-[#4f95e0]/30 rounded-2xl flex flex-col items-center text-center transition-shadow duration-300 shadow-[0_0_20px_rgba(79,149,224,0.15)] hover:shadow-[0_0_25px_rgba(79,149,224,0.2)] overflow-hidden"
                      >
                        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-yellow-500/20 border border-yellow-500/30">
                          <motion.div
                            whileHover={{ rotate: 12 }}
                            transition={{ duration: 0.3 }}
                          >
                            {resp.icon}
                          </motion.div>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed mt-3">
                          {resp.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile: carousel card + dots */}
                  <div 
                    className="md:hidden flex flex-col items-center justify-center gap-4 w-full"
                    onTouchStart={(e) => {
                      const touchStartX = e.touches[0].clientX;
                      const touchStartY = e.touches[0].clientY;
                      
                      const handleTouchMove = (moveEvent) => {
                        const touchEndX = moveEvent.changedTouches[0].clientX;
                        const touchEndY = moveEvent.changedTouches[0].clientY;
                        const diffX = touchStartX - touchEndX;
                        const diffY = touchStartY - touchEndY;
                        
                        // Only trigger if horizontal movement is greater than vertical and exceeds threshold
                        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
                          if (diffX > 0) {
                            // Swipe left - show next
                            setCurrentRespFor(expIndex, (currentResp + 1) % exp.responsibilities.length);
                          } else {
                            // Swipe right - show previous
                            setCurrentRespFor(expIndex, (currentResp - 1 + exp.responsibilities.length) % exp.responsibilities.length);
                          }
                          document.removeEventListener('touchend', handleTouchMove);
                        }
                      };
                      
                      document.addEventListener('touchend', handleTouchMove, { once: true });
                    }}
                  >
                    <motion.div
                      variants={itemVariant}
                      custom={expIndex + 1}
                      initial="hidden"
                      animate="show"
                      whileHover="hover"
                      className="relative group p-4 bg-[#161A21] backdrop-blur-md border border-[#4f95e0]/30 rounded-2xl flex flex-col items-center text-center transition-shadow duration-300 shadow-[0_0_20px_rgba(79,149,224,0.15)] hover:shadow-[0_0_25px_rgba(79,149,224,0.2)] overflow-hidden max-w-xs cursor-grab active:cursor-grabbing"
                    >
                      <div className="w-12 h-12 flex justify-center items-center rounded-full bg-yellow-500/20 border border-yellow-500/30">
                        <motion.div
                          whileHover={{ rotate: 12 }}
                          transition={{ duration: 0.3 }}
                        >
                          {exp.responsibilities[currentResp].icon}
                        </motion.div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed mt-3">
                        {exp.responsibilities[currentResp].text}
                      </p>
                    </motion.div>

                    {/* Pagination dots */}
                    <div className="flex gap-2 mt-2">
                      {exp.responsibilities.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => setCurrentRespFor(expIndex, dotIndex)}
                          aria-label={`Show responsibility ${dotIndex + 1}`}
                          className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f95e0] ${
                            currentResp === dotIndex
                              ? "bg-[#4f95e0] scale-100"
                              : "bg-gray-500/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Experience;
