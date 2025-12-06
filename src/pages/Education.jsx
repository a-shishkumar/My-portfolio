import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import educationGif from "/assets/education.gif";

const Education = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

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

  // Mobile carousel navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? educationData.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === educationData.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndXRef.current = e.changedTouches[0].clientX;
    const difference = touchStartXRef.current - touchEndXRef.current;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        // Swiped left
        handleNextSlide();
      } else {
        // Swiped right
        handlePrevSlide();
      }
    }
  };

  const EducationCard = ({ edu, isActive }) => (
    <Card className="relative p-2 bg-blue-500/5 backdrop-blur-md border border-gray-600 hover:shadow-[0_0_25px_rgba(79,149,224,0.5)] transition-shadow duration-300 overflow-hidden shadow-[0_0_20px_rgba(79,149,224,0.3)]">
      <BorderBeam
        size={100}
        duration={8}
        colorFrom="#4f95e0"
        colorTo="#2563eb"
      />
      <div className="flex gap-4 items-center">
        <div className="shrink-0">
          <img src={educationGif} alt="Education" className="w-25 h-30" />
        </div>
        <div className="my-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl font-bold text-[#7EB1E4] mb-1">
              {edu.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 mx-2">
            <div className="flex gap-4 items-center justify-between">
              <p className="text-base text-gray-300 font-medium">
                {edu.university}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-[#4f95e0]">Batch:</span>{" "}
                {edu.batch}
              </p>
            </div>
            <div className="flex justify-end">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ffd151]/20 text-[#ffd151] border border-[#ffd151]/30">
                {edu.percentage}
              </span>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );

  const CarouselEducationCard = ({ edu }) => (
    <Card className="relative p-3 pt-1 bg-blue-500/5 backdrop-blur-md border border-gray-600 hover:shadow-[0_0_25px_rgba(79,149,224,0.5)] transition-shadow duration-300 overflow-hidden shadow-[0_0_20px_rgba(79,149,224,0.3)]">
      <BorderBeam
        size={100}
        duration={8}
        colorFrom="#4f95e0"
        colorTo="#2563eb"
      />
      <div className="flex flex-col mt-0 pt-0 ">
        {/* Heading */}
        <CardHeader className="pb-0 px-0">
          <CardTitle className="text-xl font-bold text-[#7EB1E4]">
            {edu.name}
          </CardTitle>
        </CardHeader>

        {/* Image and Batch in one line */}
        <div className="flex gap-4 items-center px-4 mb-2">
          <div className="shrink-0">
            <img src={educationGif} alt="Education" className="w-20 h-24" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-[#4f95e0]">Batch:</span>{" "}
              <span className="text-gray-100">{edu.batch}</span>
            </p>

            <div className="flex flex-row items-center justify-between px-2 mt-2  ">
              <p className="text-base text-gray-300 text-sm ">
                {edu.university}
              </p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ffd151]/20 text-[#ffd151] border border-[#ffd151]/30">
                {edu.percentage}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="h-full flex flex-col justify-center items-center px-1 sm:px-10 lg:px-[9vw] md:py-1">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#4f95e0] via-sky-400 to-blue-600 mb-6 text-center">
          Education
        </motion.h1>

        {/* Carousel for small screens (md and below) */}
        <div
          className="md:hidden flex flex-col items-center gap-4 mb-3"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <CarouselEducationCard edu={educationData[currentSlide]} />
          </motion.div>

          {/* Dot Navigation */}
          <div className="flex gap-1.5 justify-center">
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-500 ease-out ${
                  index === currentSlide
                    ? "w-2 h-2 bg-[#4f95e0] shadow-[0_0_8px_rgba(79,149,224,0.6)]"
                    : "w-1.5 h-1.5 bg-gray-500/60 hover:bg-gray-400 hover:shadow-[0_0_4px_rgba(107,114,128,0.4)]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid for large screens (md and above) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative"
            >
              <EducationCard edu={edu} isActive={true} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
