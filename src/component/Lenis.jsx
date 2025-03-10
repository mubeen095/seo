"use client";
import Aos from "aos";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import gsap from "gsap";
import { usePathname } from "next/navigation";
export default function Lenis({ children }) {
  const lenisRef = useRef();
  const pathname = usePathname();



  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.07,
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
