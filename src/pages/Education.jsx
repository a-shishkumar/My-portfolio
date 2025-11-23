import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import bookLoadingGif from "@/assets/Book loading.gif";

const Education = () => {
  const educationData = [
    {
      school: "University of Example",
      degree: "Bachelor of Science in Computer Science",
      session: "2018 - 2022",
      description:
        "Focused on software engineering, data structures, algorithms, and web development. Graduated with honours and worked on several team projects.",
    },
    {
      school: "High School Example",
      degree: "High School Diploma",
      session: "2014 - 2018",
      description:
        "Science stream with emphasis on mathematics and computer science.",
    },
    // Add more education entries as needed
  ];

  return (
    <section className="p-6 md:p-10 lg:p-14">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Education
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          A concise timeline of my formal education — click or hover a card for
          more details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.article
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ translateY: -6 }}
            >
              <Card className="h-full shadow-lg ring-1 ring-white/6 overflow-hidden bg-gradient-to-b from-gray-900/80 to-gray-800/60 border border-gray-700">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <img
                    src={bookLoadingGif}
                    alt={`book loading icon for ${edu.school}`}
                    className="w-20 h-20 select-none"
                  />

                  <div className="flex flex-col min-w-0">
                    <CardTitle className="text-lg md:text-xl font-semibold text-gray-100 truncate">
                      {edu.school}
                    </CardTitle>
                    <p className="text-sm text-gray-400 truncate">
                      {edu.degree}
                    </p>
                    <p className="text-sm font-medium text-amber-400 mt-1">
                      {edu.session}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="pt-4">
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {edu.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 border border-white/10">
                      Academic
                    </span>
                    <button
                      className="text-xs px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition"
                      onClick={() =>
                        console.log(`Clicked details for ${edu.school}`)
                      }
                    >
                      Details
                    </button>
                  </div>
                </CardContent>
              </Card>

              <BorderBeam
                size={120}
                duration={3.5}
                delay={index * 0.4}
                colorFrom="#9c40ff"
                colorTo="#ffaa40"
              />
            </motion.article>
          ))}
        </div>
      </div>

      {/* small responsive helper - sticky CTA on small screens */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:hidden">
        <a
          href="#top"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg ring-1 ring-white/10"
        >
          Back to top
        </a>
      </div>
    </section>
  );
};

export default Education;
