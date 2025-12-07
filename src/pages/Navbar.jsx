import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 mx-5 mt-3 border-transparent  rounded-full fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300/80"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300/80"
              onClick={() => scrollToSection("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300/80"
              onClick={() => scrollToSection("education")}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300/80"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300/80"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300/80"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300/80"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
