import React from "react";
// Sections

import Header from "../components/Sections/Header";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Experience from "../components/Sections/Experience";



export default function Landing() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Experience />
    </>
  );
}


