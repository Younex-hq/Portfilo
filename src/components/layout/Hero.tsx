import { useState, useEffect, useRef } from "react";
import NavElements from "../common/NavElements";
import TextPressure from "../common/TextPressure";
import gsap from "gsap";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-around overflow-hidden">
      <div className="absolute -z-1 mt-[60vh] h-screen w-[90vw] md:mt-[50vh]">
        <HelloText />
      </div>
      <div>
        Welcome to my <span className="font-italianno text-4xl">Portfolio</span>
      </div>
      <div>
        <NavElements />
      </div>
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
