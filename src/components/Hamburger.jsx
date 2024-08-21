import { data } from "../content/content";
import { React, useState } from "react";
import MagneticButton from "./Magneticbtn";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hamburger = () => {
  // Apply the magnetic effect to each element

  const [width, setWidth] = useState(true);
  const activeNav = () => {
    setWidth(!width);
    if (width === true) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".hamburger",
      { scale: 0 },
      {
        scale: 1,
        duration: 0.5,
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: ".about",
          start: "top top",
          end: "bottom top",
          scrub: true,
          onEnter: () => gsap.to(".hamburger", { scale: 1 }),
          onLeaveBack: () => gsap.to(".hamburger", { scale: 0 }),
        },
      },
    );
  }, []);
  return (
    <main>
      {/* --------------------------- */}
      <MagneticButton
        strength={100}
        className={`hamburger transition-scale group fixed right-0 top-0 z-[20] m-8 h-20 w-20 cursor-pointer overflow-hidden rounded-full border-[1px] border-border-solid-light duration-500 max-sm:h-16 max-sm:w-16 ${
          width ? "bg-dark" : "bg-blue"
        } `}
        onClick={activeNav}
      >
        <div
          className={`fill transition-top left- absolute top-20 -z-10 h-full w-full rounded-full bg-blue duration-300 group-hover:top-0`}
        ></div>
        <div className="btn-text z-50 flex h-full w-full flex-col items-center justify-center gap-[6px]">
          <div
            className={`${
              width ? "rotate-[0deg]" : "rotate-[40deg]"
            } h-[1px] w-[35%] bg-white transition-all`}
          ></div>
          <div
            className={`${
              width ? "rotate-[0deg]" : "-translate-y-[8px] -rotate-[40deg]"
            } h-[1px] w-[35%] bg-white transition-all`}
          ></div>
        </div>
      </MagneticButton>
      {/* -------------------------------- */}
      <div
        className={`fixed right-0 top-0 w-[38%] origin-right p-20 pl-28 pt-28 transition-all duration-700 max-sm:w-[100%] max-sm:pl-16 max-sm:pt-20 ${
          width ? "translate-x-[40rem] rounded-custom-b" : "translate-x-0"
        } z-[12] h-full border-[1px] border-border-solid-light bg-dark`}
      >
        {/* Navigation Menu */}
        <div className="fixed-nav-inner">
          <div
            className={`flex flex-col items-start justify-center transition-all ${
              width ? "translate-x-10" : "translate-x-0"
            }`}
          >
            <h5 className="mb-8 text-white">{data.navigation.title}</h5>
            <div className="stripe h-[1px] w-[80%] bg-border-light"></div>
            <ul className="links-wrap py-16">
              {data.navigation.links.map((link, index) => (
                <MagneticButton
                  strength={20}
                  key={index}
                  className={`btn btn-link ${link.active ? "active" : ""}`}
                >
                  <a
                    href={link.href}
                    className="btn-click-ham magnetic relative"
                  >
                    <span className="btn-text">
                      <p className="btn-text-inner text-[4rem] leading-[90px] text-white">
                        {link.text}
                      </p>
                    </span>
                  </a>
                </MagneticButton>
              ))}
            </ul>
          </div>
          <div className="row social-row">
            {/* <div className="stripe w-[80%] bg-border-light h-[1px]"></div> */}
            <div className="socials flex flex-col items-start max-sm:-translate-x-4">
              <h5 className="text-white">{data.socials.title}</h5>
              <ul className="flex items-center justify-start gap-4">
                {data.socials.links.map((link, index) => (
                  <MagneticButton strength={20} key={index} className=" ">
                    <a href={link.href} target="_blank" className="magnetic">
                      <span className="btn-text">
                        <p className="text-[15px] font-semibold text-white">
                          {link.text}
                        </p>
                      </span>
                    </a>
                  </MagneticButton>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hamburger;
