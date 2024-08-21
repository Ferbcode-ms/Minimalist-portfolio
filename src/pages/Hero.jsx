import React from "react";
import { arrowdown, globeinner } from "../assets";
import { Navbar, Hamburger } from "../components/index";

const Hero = () => {
  document.documentElement.style.overflow = "";

  return (
    <>
      <header className="about transition-all h-[100vh] w-full relative overflow-hidden">
        <Navbar />
        <Hamburger />
        <div className=" h-full object-center w-full flex justify-center bg-gray overflow-hidden ">
          <img
            data-scroll
            data-scroll-speed="0.9"
            src="https://dennissnellenberg.com/assets/img/DSC07033.jpg"
            alt=""
            className="h-[125%] -translate-y-16 max-sm:h-[110%] max-sm:-translate-y-5 max-sm:object-cover"
          />
        </div>
        <div className="absolute top-[40%] max-sm:top-[80%] max-sm:left-[10%] left-[0%] px-0 flex justify-between  items-center w-full text-white">
          <div className=" bg-dark flex justify-between items-center px-3 rounded-r-full max-sm:hidden">
            <p
              data-scroll
              data-scroll-speed="0.5"
              className="p-3  mx-4 text-white  leading-6 translate-y-2 "
            >
              Located <br /> in the <br /> Netherlands
            </p>
            <div className="bg-gray rounded-[100%] p-5 ">
              <img src={globeinner} className="animate-rotate  " alt="" />
            </div>
          </div>
          <div className="mr-24 -mt-10">
            <div className="arrow mb-8  ">
              <img src={arrowdown} alt="" />
            </div>

            <h4>
              <span>Freelance</span>
              <br /> Designer & Developer
            </h4>
          </div>
        </div>

        {/* big name------- */}
        <div className=" absolute bottom-0 max-sm:bottom-[22%]  w-full p-4">
          <div className="h1">
            <div className="">
              <marquee behavior="" direction="" scrollamount="13">
                <h1 className="text-white text-[16rem] max-sm:text-[8rem]">
                  Dennis Snellenberg<span className="spacer">—</span>
                </h1>
              </marquee>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
