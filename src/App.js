import React from "react";
import { Helmet } from "react-helmet";
// Screens
import TopNavbar from "../src/components/Nav/TopNavbar";
import Footer from "./components/Nav/Footer";
import Landing from "../src/screens/Landing";
import NzLocum from "../src/screens/NZLocum";
import Mixtape from '../src/screens/Mixtape';
import Airscammer from "../src/screens/Airscammer";
import WhatToEat from "../src/screens/WhatToEat"
import Dpm from "../src/screens/Dpm";
import Cti from "../src/screens/Cti";
import Talk from '../src/screens/Talk';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <TopNavbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/nz-locum' element={<NzLocum />} />
        <Route path='/mixtape-me' element={<Mixtape />} />
        <Route path='/airscammer' element={<Airscammer />} />
        <Route path='/what-to-eat' element={<WhatToEat />} />
        <Route path='/dpm' element={<Dpm />} />
        <Route path='/cti' element={<Cti />} />
        <Route path='/dpm-talk' element={<Talk />} />
      </Routes>
      <Footer />
    </>
  );
}

