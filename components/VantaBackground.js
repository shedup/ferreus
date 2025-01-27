// components/VantaBackground.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Vanta requires Three.js
import NET from "vanta/dist/vanta.globe.min";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    if (!vantaEffect) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE, // Pass the Three.js object
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xbedcc9,
        color2: 0x7a00ff,
        size: 1.2,
        backgroundColor: 0xfafad1,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default VantaBackground;
