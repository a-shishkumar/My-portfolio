import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contacts from "./Contacts";
import Footer from "./Footer";
import { StarsBackground } from "../components/animate-ui/components/backgrounds/stars";
import Ribbons from "../components/Ribbons";

const Home = () => {
  return (
    <>
      <Header />
      {/* Option 2: Wrap entire content with Ribbons */}
      <div className="relative">
        <Ribbons className="fixed inset-0 -z-10" />

        <StarsBackground className="text-white w-full min-h-full flex flex-col relative z-10">
          <div className="relative z-10 flex flex-col">
            {/* <div className="z-30">
              <Navbar />
            </div> */}

            <div className=" p-1 flex-1">
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
            </div>
          </div>
        </StarsBackground>
        <StarsBackground className="text-white w-full min-h-full h-full flex flex-col relative z-10">
          <div className="relative z-10 flex flex-col">
            <div className="pt-20 p-8 flex-1">
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
        </StarsBackground>
      </div>
    </>
  );
};

export default Home;
