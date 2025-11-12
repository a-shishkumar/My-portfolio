import Plasma from "../components/Plasma";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contacts from "./Contacts";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="relative text-white bg-black w-full min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Plasma
          color="#1a1526"
          speed={2}
          direction="forward"
          scale={2.6}
          opacity={1}
          mouseInteractive={true}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="z-30">
          <Navbar />
        </div>
        <div className="pt-20 p-8">
          <div id="hero">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="contact">
            <Contacts />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
