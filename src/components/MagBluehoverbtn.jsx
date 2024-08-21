import React from "react";
import MagneticButton from "./Magneticbtn";

const MagBluehoverbtn = ({ href, buttonText, countNumber }) => {
  return (
    <MagneticButton strength={20}>
      <a href={href}>
        <div className="btn btn-normal border-[1px] overflow-hidden border-gray py-6 rounded-full px-8 relative group">
          <div className="btn-fill absolute top-[100%] transition-all duration-500 w-full h-full left-0 bg-blue group-hover:top-0 -z-10"></div>
          <div className="btn-text">
            <div className="btn-text-inner flex group-hover:text-white transition-all duration-300">
              {buttonText}
              <div className="count-nr text-[10px] p-1">{countNumber}</div>
            </div>
          </div>
        </div>
      </a>
    </MagneticButton>
  );
};

export default MagBluehoverbtn;
