// useMagneticEffect.js
import { useEffect } from "react";
import gsap from "gsap";

const useMagneticEffect = (ref, strength = 50) => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!ref.current) return; 

      const rect = ref.current.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const xOffset = ((mouseX - rect.width / 2) / rect.width) * strength;
      const yOffset = ((mouseY - rect.height / 2) / rect.height) * strength;

      gsap.to(ref.current, {
        x: xOffset,
        y: yOffset,
        ease: "power3.out",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      if (ref.current) {
        gsap.to(ref.current, {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 0.3,
        });
      }
    };

    const node = ref.current;
    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength]);
};

export default useMagneticEffect;
