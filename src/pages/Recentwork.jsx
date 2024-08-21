import React, { useState } from "react";
import { buttonData, works } from "../content/content";
import { MagneticButton } from "../components/index";
import MagBluehoverbtn from "../components/MagBluehoverbtn";

const Recentwork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <section className="section work-grid large-work-grid relative overflow-hidden max-sm:mt-10">
        {/* ------- */}
        <div className="container flex flex-col items-start px-48 py-10 max-sm:px-6">
          <div className="grid-sub-title pb-11">
            <div className="flex-col">
              <h5 className="max-sm:text-[15px]">Recent work</h5>
            </div>
          </div>
          <ul className="work-items mouse-pos-list-image-wrap w-full">
            {works.map((work, index) => (
              <li key={index} className="development interaction visible">
                <div className="stripe animate h-[1px] w-full bg-border-solid"></div>
                <a href={work.link} className="sm:hidden">
                  <img src={work.image} alt="" />
                </a>
                <a
                  href={work.link}
                  className="row flex w-full items-center justify-between py-10"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex-col">
                    <h3
                      className={`${
                        hoveredIndex === index ? "-translate-x-2 text-gray" : ""
                      } transition-all duration-500 max-sm:text-[25px]`}
                    >
                      <span>{work.title}</span>
                    </h3>
                  </div>
                  <div className="animate flex-col">
                    <p
                      className={`${
                        hoveredIndex === index ? "translate-x-2 text-gray" : ""
                      } transition-all duration-500 max-sm:text-[12px]`}
                    >
                      {work.description}
                    </p>
                  </div>
                </a>
              </li>
            ))}
            <div className="stripe last animate h-[1px] w-full bg-border-solid"></div>
          </ul>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div className="container pointer-events-none absolute left-0 top-[18%] h-full w-full overflow-hidden max-sm:hidden">
          <ul>
            {works.map((work, index) => (
              <li
                key={index}
                className={`absolute transition-transform duration-1000 ease-in-out`}
                style={{
                  top: `${hoveredIndex === index ? 5 : -60}vh `,
                  left: "40%",
                  transition: "all 0.5s",
                  width: 400,
                  height: 400,
                }}
              >
                <div className="single-tile-wrap">
                  <a href={work.link} className="row">
                    <div
                      className="lazy relative flex items-center justify-center"
                      style={{
                        backgroundColor: work.bgColor,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${work.image})`,
                        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

                        height: 400,
                        width: 400,
                      }}
                    ></div>

                    <div className="absolute left-3 top-3 flex-col">
                      <p className="rounded-xl bg-black p-1 px-3 text-white">
                        {work.year}
                      </p>
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* -------btn more work  */}

        <div className="flex items-center justify-center py-16">
          {buttonData.map((btn, index) => (
            <MagBluehoverbtn
              key={index}
              href={btn.href}
              buttonText={btn.buttonText}
              countNumber={btn.countNumber}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Recentwork;
