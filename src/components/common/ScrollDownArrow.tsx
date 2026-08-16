import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ScrollDownArrow() {
  const arrow1 = useRef<HTMLImageElement>(null);
  const arrow2 = useRef<HTMLImageElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // One timeline that repeats forever
    tl.current = gsap.timeline({ repeat: -1 });

    // Arrow 1: starts immediately
    tl.current
      .fromTo(
        arrow1.current,
        { y: 0, autoAlpha: 0.9, scale: 0.9 },
        {
          y: 20,
          duration: 1.2,
          ease: "power1.out",
          autoAlpha: 0,
          scale: 0.75,
        },
      )
      .fromTo(
        arrow2.current,
        { y: -10, autoAlpha: 0, scale: 0.9 },
        {
          y: 0,
          duration: 1.2,
          ease: "power1.in",
          autoAlpha: 0.9,
          scale: 0.9,
        },
        "<+0.5",
      );
  });

  return (
    // TODO : make it desapear when starting to scroll
    <div className="relative h-9 w-9">
      <img
        ref={arrow1}
        src="/svg/arrow_down.svg"
        alt="Scroll down arrow 1"
        className="absolute"
      />
      <img ref={arrow2} src="/svg/arrow_down.svg" alt="Scroll down arrow 2" />
    </div>
  );
}
