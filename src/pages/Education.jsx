import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

const Education = () => {
  const educationData = [
    {
      name: "Bachelor of Technology in Computer Science",
      university: "AKTU UNIVERSITY ",
      percentage: "71%",
      batch: "2021-2025",
      degree: "B.Tech",
    },
    {
      name: "Higher Secondary Certificate",
      university: "CBSE",
      percentage: "84%",
      batch: "2020-2021",
      degree: "HSC",
    },
    {
      name: "Secondary School Certificate",
      university: "CBSE",
      percentage: "88%",
      batch: "2018-2019",
      degree: "SSC",
    },
  ];

  return (
    <section className="h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-[9vw] py-3">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f95e0] via-sky-400 to-blue-600 mb-6 text-center">
          Education
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative"
            >
              <Card className="relative p-6 bg-blue-500/5 backdrop-blur-md border border-gray-600 shadow-lg hover:shadow-[0_0_25px_rgba(79,149,224,0.5)] transition-shadow duration-300 overflow-hidden shadow-[0_0_20px_rgba(79,149,224,0.3)]">
                <BorderBeam
                  size={100}
                  duration={8}
                  colorFrom="#4f95e0"
                  colorTo="#2563eb"
                />
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-[#7EB1E4] mb-1">
                    {edu.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-0.5">
                  <p className="text-base text-gray-300 font-medium">
                    {edu.university}
                  </p>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-[#4f95e0]">
                        Batch:
                      </span>{" "}
                      {edu.batch}
                    </p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#4f95e0]/20 text-[#4f95e0] border border-[#4f95e0]/30 w-fit">
                      {edu.percentage}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
