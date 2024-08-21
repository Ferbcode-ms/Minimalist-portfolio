import React, { useRef } from "react";
import useMagneticEffect from "../components/useMagneticEffect.js";

const MagneticRoundedbtn = ({
  href,
  strength = 50,
  text,
  className = "",
  top = "",
  ...props
}) => {
  const buttonRef = useRef(null);
  useMagneticEffect(buttonRef, strength);

  return (
    <div className={`btn`}>
      <a
        href={href}
        ref={buttonRef}
        className={`magnetic flex justify-center items-center text-white rounded-full h-44 w-44 absolute   ${className} group overflow-hidden`}
        {...props}
      >
        <div className="absolute flex justify-center items-center z-10">
          <p className="text-white">{text}</p>
        </div>
        <div className="scale-y-0 absolute top-0 left-0 h-full w-full group-hover:bg-blue group-hover:scale-y-100 origin-bottom duration-300 transition-all rounded-full"></div>
      </a>
    </div>
  );
};

export default MagneticRoundedbtn;
