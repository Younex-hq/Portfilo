import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollDownArrow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const arrow1 = useRef<HTMLImageElement>(null);
  const arrow2 = useRef<HTMLImageElement>(null);
  const loopTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // infinite loop of the arrow
      loopTl.current = gsap.timeline({ repeat: -1 });
      loopTl.current
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

      // hide container on scroll and pause the loop
      ScrollTrigger.create({
        start: "top top",
        end: "+=30",
        onLeave: () => {
          gsap.to(containerRef.current, {
            autoAlpha: 0,
            duration: 0.3,
            onComplete: () => loopTl.current?.pause(),
          });
        },
        onEnterBack: () => {
          loopTl.current?.play();
          gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.3 });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative h-9 w-9">
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
