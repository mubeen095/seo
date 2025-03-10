"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { usePathname } from "next/navigation";

function ScrollSpeed({ className, children, speed = 1, id = "parallax" }) {

  const trigger = useRef();
  const traget = useRef();
  const timeline = useRef();
  const pathname = usePathname();

  const { width:windowWidth } = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const y = windowWidth * speed * 0.2;
    console.log('y: ', y);

    const setY = gsap.quickSetter(traget.current, "y", "px");
    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top, bottom",
        end: "bottom,top",
        onUpdate: (e) => {
          setY(e.progress * y);
        },
      },
    });

    return () => {
      timeline?.current?.kill();
    };
  }, [id, speed, windowWidth,pathname]);
  return (
    <div className={className} ref={trigger}>
      <div ref={traget}>{children}</div>
    </div>
  );
}

export default ScrollSpeed;
