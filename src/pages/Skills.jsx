import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import LogoLoop from "@/components/LogoLoop";
import { IconCloud } from "@/components/ui/icon-cloud";

const Skills = () => {
  const skills = [
    { name: "Bootstrap", src: "/assets/tech logos/Bootstrap.png" },
    { name: "CSS3", src: "/assets/tech logos/CSS3.png" },
    { name: "Express", src: "/assets/tech logos/Express.png" },
    { name: "FastAPI", src: "/assets/tech logos/FastAPI.png" },
    { name: "HTML5", src: "/assets/tech logos/HTML5.png" },
    { name: "Java", src: "/assets/tech logos/Java.png" },
    { name: "JavaScript", src: "/assets/tech logos/JavaScript.png" },
    { name: "MongoDB", src: "/assets/tech logos/MongoDB.png" },
    { name: "MySQL", src: "/assets/tech logos/MySQL.png" },
    { name: "Next.js", src: "/assets/tech logos/Next.js.png" },
    { name: "Node.js", src: "/assets/tech logos/Node.js.png" },
    { name: "PostgresSQL", src: "/assets/tech logos/PostgresSQL.png" },
    { name: "React", src: "/assets/tech logos/React.png" },
    { name: "Redux", src: "/assets/tech logos/Redux.png" },
    { name: "Tailwind CSS", src: "/assets/tech logos/Tailwind CSS.png" },
    { name: "Vercel", src: "/assets/tech logos/Vercel.png" },
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
    hover: { scale: 1.02, y: -3, transition: { duration: 0.18 } },
  };

  const renderItem = (skill, index) => (
    <div key={`${skill.name}-${index}`} className="w-36  flex justify-center">
      <motion.div
        variants={itemVariant}
        custom={index}
        initial="hidden"
        animate="show"
        whileHover="hover"
        className="relative bg[#161A21]"
        role="listitem"
        aria-label={`${skill.name} logo`}
      >
        <Card className="relative w-36 p-5 bg-[#161A21] backdrop-blur-md border border-slate-700/40 rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(79,149,224,0.25)] shadow-[0_0_20px_rgba(79,149,224,0.3)] flex flex-col items-center">
          <BorderBeam
            size={110}
            duration={8}
            colorFrom="#4f95e0"
            colorTo="#2563eb"
          />
          <CardContent className="flex flex-col items-center gap-3 p-0">
            <motion.img
              src={skill.src}
              alt={`${skill.name} logo`}
              loading="lazy"
              className="w-15 h-15 mb-1 object-contain rounded-lg bg-white/3 p-2 backdrop-blur-sm shadow-lg shadow-blue-500/50"
              whileHover={{
                scale: 1.12,
                boxShadow: "0 8px 30px rgba(79,149,224,0.18)",
              }}
              transition={{ duration: 0.25 }}
              aria-hidden={false}
            />
            <p className="text-center font-semibold text-[#7EB1E4] text-sm select-none">
              {skill.name}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );

  return (
    <section className="h-full flex flex-col justify-center items-center px-2 sm:px-10 lg:px-[5vw]">
      <motion.div
        className="w-full max-w-[1400px]"
        initial="hidden"
        animate="show"
        variants={containerVariant}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 className="text-3xl mt-2 md:mt-5 sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f95e0] via-sky-400 to-blue-600 mb-2 md:b-8 text-center">
          Skills
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-1 md:gap-3 mb-2 md:mb-8"
          variants={containerVariant}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              variants={itemVariant}
              custom={index}
              className="inline-flex items-center px-2 md:px-4 py-1 md:py-2 rounded-full text-sm font-medium text-[#4f95e0] border border-[#4f95e0]/30 hover:bg-[#4f95e0]/10 transition-all duration-200 shadow-[0_0_10px_rgba(79,149,224,0.3)] hover:shadow-[0_0_30px_rgba(79,149,224,0.25)]"
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        <div className="w-full">
          <div className="flex justify-center items-center  md:hidden">
            <IconCloud images={skills.map((skill) => skill.src)} />
          </div>
          <div className="hidden md:block">
            <LogoLoop
              logos={skills}
              renderItem={renderItem}
              speed={50}
              direction="left"
              logoHeight={130}
              gap={15}
              scaleOnHover={true}
              pauseOnHover={true}
              className="py-1 md:py-4"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
