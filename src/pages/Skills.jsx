import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import LogoLoop from "@/components/LogoLoop";

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

  const renderItem = (skill, index) => (
    <Card className="flex flex-col items-center p-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-0">
      <CardContent className="flex flex-col items-center">
        <img
          src={skill.src}
          alt={skill.name}
          className="w-16 h-16 mb-2 object-contain"
        />
        <p className="text-center font-semibold text-gray-800">{skill.name}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <LogoLoop
        logos={skills}
        renderItem={renderItem}
        speed={50}
        direction="left"
        logoHeight={120}
        gap={20}
        scaleOnHover={true}
        pauseOnHover={true}
        className="py-4"
      />
    </div>
  );
};

export default Skills;
