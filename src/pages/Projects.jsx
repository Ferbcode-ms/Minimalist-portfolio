import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { items, mediaItems } from "../content/content";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  useEffect(() => {
    // Animation for the first row
    gsap.fromTo(
      ".horizontal-items .first-row",
      { x: "0%" },
      {
        x: "-5%",
        ease: "power1",
        duration: 1,
        scrollTrigger: {
          trigger: ".horizontal-items",
          // scroller: ".app",
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      },
    );

    // Animation for the second row
    gsap.fromTo(
      ".horizontal-items .second-row",
      { x: "-10%" },
      {
        x: "-5%",
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".horizontal-items",
          // scroller: ".app",
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      },
    );
  }, []);
  return (
    <section className="section horizontal-items mb-10 overflow-hidden p-8 max-sm:hidden">
      {/* --------first row -- w */}
      <div className="first-row flex h-full w-[150%] items-center">
        {items.map((item, index) => (
          <div className="horizontal-single-item m-5" key={index}>
            {item.type === "image" ? (
              <div
                className="overlay lazy"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  //   aspectRatio: 16 / 9,
                  width: "400px",
                  height: "300px",
                }}
                alt={item.alt}
              ></div>
            ) : (
              <div className="overlay playpauze">
                <video
                  className="overlay lazy"
                  src={item.src}
                  loop
                  muted
                  playsInline
                  autoPlay
                  alt={item.alt}
                  width="400px"
                  height="350px"
                ></video>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* -------------row 2 -------- */}
      <div className="second-row flex w-[150%] flex-row items-center">
        {mediaItems.map((item, index) => (
          <div className="horizontal-single-item m-5" key={index}>
            <div
              className={`overlay ${item.className || ""}`}
              style={item.style || {}}
            >
              {item.type === "video" ? (
                <video
                  className="overlay lazy"
                  src={item.src}
                  loop
                  muted
                  autoPlay
                  playsInline
                  width="400px"
                  height="350px"
                ></video>
              ) : (
                <div
                  className="overlay lazy"
                  style={{
                    ...item.style,
                    backgroundImage: `url(${item.src})`,
                    width: "400px",
                    height: "300px",
                  }}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
