import './App.css';
import React, { useState, useEffect } from "react";
import Loader from './components/Loader';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for n seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return isLoading ? (
    // If page is still loading then splash screen
    <Loader isLoading={isLoading} />
  ) : (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Footer />
      {/* <ProjectDetails /> */}
    </>
  );
};

export default App;
