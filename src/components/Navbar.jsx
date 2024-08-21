import { React } from "react";

import MagneticButton from "./Magneticbtn.jsx";
const Navbar = () => {
  return (
    <nav className="absolute flex justify-between items-center w-full m-4 mx-0 text-white p-4 px-10 max-sm:p-0 max-sm:px-4 max-sm:z-10 ">
      {/* left side-------------------- */}
      <MagneticButton
        strength={20}
        className="group btn-text flex gap-4 max-sm:gap-2 cursor-pointer"
      >
        <div className="credit group-hover:rotate-180 duration-500">
          <span>©</span>
        </div>
        <div className="cbd w-[136px] max-sm:w-[118px] group-hover:w-[200px] max-sm:group-hover:w-[118px] overflow-hidden duration-500 ">
          <p className="code-by font-medium text-nowrap  transition-transform duration-500 transform group-hover:-translate-x-[70px] max-sm:group-hover:-translate-x-0 text-white">
            Code by Dennis Snellenberg
          </p>
        </div>
      </MagneticButton>

      {/* ----rightside---------- */}
      <ul className="flex gap-10 max-sm:gap-1 items-center justify-center ">
        <MagneticButton strength={20} className="btn btn-link p-2 max-sm:p-1">
          <a href="" className="btn-click transition-all  relative magnetic ">
            <span className="btn-text">
              <span className="btn-text-inner font-medium">Work</span>
            </span>
          </a>
        </MagneticButton>
        <MagneticButton strength={20} className="btn btn-link max-sm:p-1">
          <a
            href=""
            className="btn-click relative magnetic"
            data-strength="20"
            data-strength-text="10"
          >
            <span className="btn-text">
              <span className="btn-text-inner font-medium">About</span>
            </span>
          </a>
        </MagneticButton>
        <MagneticButton strength={20} className="btn btn-link max-sm:p-1 ">
          <a
            href=""
            className="btn-click relative magnetic"
            data-strength="20"
            data-strength-text="10"
          >
            <span className="btn-text">
              <span className="btn-text-inner font-medium">Contact</span>
            </span>
          </a>
        </MagneticButton>
      </ul>
    </nav>
  );
};

export default Navbar;
