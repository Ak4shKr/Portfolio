import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
    </>
  );
}

export default App;
