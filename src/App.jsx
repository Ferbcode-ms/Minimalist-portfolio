import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import "./index.css";

import {
  Hero,
  Projects,
  About,
  Loading,
  Footer,
  Recentwork,
} from "./pages/index";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // Adjust scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: "vertical", // Vertical scroll direction
      smooth: true, // Enable smooth scroll
      mouseMultiplier: 2, // Mouse scroll speed multiplier
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Set a timer to disable loading after 3.6 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0); // Scroll to top after loading
      document.body.style.cursor = "default";
      document.documentElement.style.overflow = "";
    }, 3600);

    // Cleanup function to clear timer and destroy Lenis instance
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="app">
        <section className="h-[100vh]">
          <Hero />
        </section>
        <section className="h-[80vh]">
          <About />
        </section>
        <section className="h-[auto]">
          <Recentwork />
        </section>
        <section className="h-[auto]">
          <Projects />
        </section>
        <section className="h-[100vh]">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
