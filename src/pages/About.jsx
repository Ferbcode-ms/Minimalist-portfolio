import { useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticRoundedbtn } from "../components/index";
// Register the GSAP plugin (only need to do this once in your app)
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".para",
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          scrub: true,
          trigger: ".aboutinfo",
          // scroller: ".app",/
          start: "top 50%",
          end: "top 20%",
          // toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section className="aboutinfo w-full py-40 max-sm:py-20">
      <div className="mx-20 px-20 max-sm:mx-4 max-sm:px-4">
        <div className="flex items-center justify-center max-sm:flex-col">
          <div className="max-w-[750px]">
            <h4 className="para">
              Helping brands to stand out in the digital era. Together we will
              set the new status quo. No nonsense, always on the cutting edge.
            </h4>
          </div>
          <div className="relative flex max-w-[280px] flex-col gap-2 self-start max-sm:mt-6 max-sm:w-[240px]">
            <div className="text-wrap">
              <p>
                The combination of my passion for design, code & interaction
                positions me in a unique place in the web design world.
              </p>
            </div>
            <MagneticRoundedbtn
              href="#"
              text="About me"
              strength={60}
              className="top-[200px] bg-dark max-sm:-right-20 max-sm:top-[150px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
