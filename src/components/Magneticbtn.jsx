// MagneticButton.js
import React, { useRef } from "react";
import useMagneticEffect from "../components/useMagneticEffect.js";

const MagneticButton = ({ children, strength = 50, ...props }) => {
  const buttonRef = useRef(null);

  // Apply magnetic effect to the button
  useMagneticEffect(buttonRef, strength);

  return (
    <div ref={buttonRef} {...props}>
      {children}
    </div>
  );
};

export default MagneticButton;
