import React from "react";
// Sections

import Profile from "../components/Sections/Profile";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Experience from "../components/Sections/Experience";



export default function Landing() {
  return (
    <>
      <Profile />
      <About />
      <Projects />
      <Experience />
    </>
  );
}


