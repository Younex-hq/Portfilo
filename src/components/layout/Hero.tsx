import { useState, useEffect, useRef } from "react";
import NavElements from "../common/NavElements";
import TextPressure from "../common/TextPressure";
import gsap from "gsap";
import SideRays from "../common/SideRays";
import ScrollDownArrow from "../common/ScrollDownArrow";
import ShinyText from "../common/ShinyText";

export default function Hero() {
  // TODO : make the background effects work only when they are on view
  return (
    <>
      <Background />
      <div className="relative flex h-screen w-screen flex-col items-center justify-around overflow-hidden">
        <div className="absolute -z-1 mt-[60vh] h-screen w-[90vw] md:mt-[50vh]">
          <HelloText />
        </div>
        <div className="flex flex-col items-center">
          <ShinyText
            text="BELIAMINE YOUNES"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <span className="font-italianno text-4xl">Portfolio</span>
        </div>
        <div className="hidden md:block">
          <NavElements />
        </div>
        <div className="absolute top-[95dvh] mx-auto">
          <ScrollDownArrow />
        </div>
      </div>
    </>
  );
}

function Background() {
  return (
    <div className="absolute -z-1 h-screen">
      <SideRays
        speed={2.5}
        rayColor1="#EAB308"
        rayColor2="#96c8ff"
        intensity={2}
        spread={2}
        origin="top-right"
        tilt={0}
        saturation={1.5}
        blend={0.75}
        falloff={1.6}
        opacity={1}
      />
    </div>
  );
}

function HelloText() {
  const hello = [
    "Hello",
    "Hola",
    "Bonjour",
    "こんにちは",
    "你好",
    "Hallo",
    "Olá",
    "Jambo",
  ];

  const [step, setStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step >= 24) return;

    // Total cycle is 2500ms: wait 1700ms, then 400ms fade out, change text, 400ms fade in.
    const timer = setTimeout(() => {
      gsap.to(containerRef.current, {
        autoAlpha: 0,
        // scale: 0.85,
        y: "-50%",
        duration: 0.8,
        ease: "power2.in",
        delay: 1,
        onComplete: () => {
          if (!containerRef.current) return;
          setStep((prev) => prev + 1);
          gsap.fromTo(
            containerRef.current,
            // { opacity: 0, scale: 0.85 },
            // { opacity: 1, scale: 1, duration: 0.5, ease: "power2.inOut" },
            { autoAlpha: 0, y: "50%" },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          );
        },
      });
    }, 1700);

    return () => clearTimeout(timer);
  }, [step]);

  const currentIndex = step % hello.length;

  return (
    <div ref={containerRef} className="h-full w-full">
      <TextPressure
        text={hello[currentIndex] + " !"}
        flex
        alpha={false}
        stroke={false}
        width={true}
        weight
        italic
        textColor="#ffffff"
        strokeColor="#2856f5"
        minFontSize={36}
        maxDistance={650}
      />
    </div>
  );
}
