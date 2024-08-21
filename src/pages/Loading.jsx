import React, { useEffect } from "react";
import { loading } from "../content/content";
import { gsap } from "gsap";
const Loading = () => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const tl = gsap.timeline();

    loading.forEach((greeting, index) => {
      tl.to(`.greeting-${index}`, {
        opacity: 1,
        duration: 0.1,
        ease: "power4.inOut",
      }).to(`.greeting-${index}`, {
        opacity: 0,
        duration: 0.1,
        delay: 0.1,
        ease: "power2.inOut",
      });
    });
    tl.to(".loading-container", {
      borderRadius: "0% 0% 48% 53% / 10% 10% 64% 62% ",
      scaleY: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="loading-container fixed flex items-center justify-center w-[100%] h-[100vh]  bg-black origin-top z-50">
      <div className="loading-screen">
        <div className="loading-words flex justify-center items-center text-white">
          {loading.map((greeting, index) => (
            <h2
              key={index}
              className={`greeting-${index} absolute transition-opacity duration-300 flex items-center gap-6 opacity-0 text-white`}
            >
              {greeting.text}
              <div className="h-2 w-2 bg-white animate-spin"></div>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
