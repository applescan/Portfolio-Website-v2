import React from "react";
// Sections

import Header from "../components/Sections/Header";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Pricing from "../components/Sections/Pricing";



export default function Landing() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Pricing />
    </>
  );
}


