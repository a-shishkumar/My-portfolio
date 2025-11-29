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
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "../components/ui/shadcn-io/dock/index";
import { Home as HomeIcon, User, Briefcase, Mail } from "lucide-react";

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative">
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
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Dock>
          <DockItem>
            <DockIcon>
              <HomeIcon className="h-6 w-6" />
            </DockIcon>
            <DockLabel>Home</DockLabel>
          </DockItem>
          <DockItem>
            <DockIcon>
              <User className="h-6 w-6" />
            </DockIcon>
            <DockLabel>About</DockLabel>
          </DockItem>
          <DockItem>
            <DockIcon>
              <Briefcase className="h-6 w-6" />
            </DockIcon>
            <DockLabel>Projects</DockLabel>
          </DockItem>
          <DockItem>
            <DockIcon>
              <Mail className="h-6 w-6" />
            </DockIcon>
            <DockLabel>Contact</DockLabel>
          </DockItem>
        </Dock>
      </div>
    </>
  );
};

export default Home;
