import YLogo from "../../assets/svg/Y-logo-TM.svg?react";
import { Location } from "../common/Location";
import VideoPlayer from "../common/VideoPlayer";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  return (
    <div className="m-auto mt-[10%]">
      <div className="the-name">
        <TheName />
      </div>
      <div className="mt-[40%] flex flex-col md:mt-[20%]">
        <TheJob />
      </div>
      <div className="mt-[40%] flex flex-col md:mt-[20%]">
        <Location />
      </div>
    </div>
  );
}

function TheName() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        autoAlpha: 0,
        y: 100,
        scale: 0.85,

        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top 50%",
          immediateRender: false,
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center md:items-center md:justify-center"
    >
      <div className="font-zodiak flex flex-col items-center md:mr-30 md:items-center md:justify-center">
        {/*<div className="font-italianno w-full text-4xl md:text-6xl">I am</div>*/}
        <div className="font-italianno w-full text-4xl md:text-6xl">
          The name is
        </div>
        <span className="text-5xl font-medium text-white md:text-8xl">
          BELIAMINE
        </span>
        <span className="text-5xl text-white md:text-8xl">Younes</span>
        <div className="py-20">
          <TheLogo />
        </div>
      </div>
    </div>
  );
}

function TheLogo() {
  // TODO : use Particle Object 3d effect on the logo

  return (
    <div className="relative">
      <YLogo
        className="absolute -top-8 -right-2 h-auto w-32 text-white"
        aria-label="Belimaine Younes Logo"
      />
      <div className="bg-main-green aspect-square w-28 rounded-full"></div>
    </div>
  );
}

function TheJob() {
  const jobContainerRef = useRef<HTMLDivElement>(null);

  // TODO : animate the text on the card maybe !!?

  useGSAP(
    () => {
      const tl = gsap.timeline({});

      tl.from(".card1", {
        autoAlpha: 0,
        y: 100,
        scale: 0.85,

        scrollTrigger: {
          trigger: jobContainerRef.current,
          start: "top 80%",
          end: "top 40%",
          immediateRender: false,
          scrub: true,
        },
      }).from(".card2", {
        autoAlpha: 0,
        y: 100,
        scale: 0.85,

        scrollTrigger: {
          trigger: jobContainerRef.current,
          start: "top 60%",
          end: "top 30%",
          immediateRender: false,
          scrub: true,
        },
      });
    },
    { scope: jobContainerRef },
  );

  return (
    <>
      <div
        ref={jobContainerRef}
        className="flex w-full flex-col items-center justify-around gap-10 px-5 md:flex-row"
      >
        {/* 1st CARD --------------------------------------- */}
        <div className="card1">
          <div className="relative">
            <div className="0 absolute -top-20 w-full">
              <div className="font-italianno text-8xl">a</div>
              <div className="m-auto w-fit text-4xl font-bold uppercase sm:text-5xl">
                Web{" "}
                <span className="font-italianno text-6xl sm:text-7xl">D</span>
                eveloper
              </div>
            </div>
            <VideoPlayer src="/media/vid-dev.webm" rounded="rounded-2xl" />
          </div>
        </div>

        {/* 2nd CARD --------------------------------------- */}
        <div className="card2">
          <div className="">
            <div className="font-italianno text-6xl">&</div>
            <VideoPlayer src="/media/vid-designer.webm" />
            <div>
              <div className="m-auto w-fit text-center text-4xl font-bold uppercase sm:text-5xl">
                Graphic{" "}
                <span className="font-italianno text-6xl sm:text-7xl">D</span>
                esigner
              </div>
              <div className="font-zodiak text-center">
                I use my <span className="font-bold">Grahic Design</span>{" "}
                expertise to build beautiful UIs with great UX
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /*<div className="ml-4 pt-3 md:ml-0">
  <div className="-mb-9 text-[3.3rem]/14 font-bold">
    GRAPHIC <span className="font-italianno text-[5rem]">D</span>
    ESIGNER
  </div>
  <br />
  <div className="font-zodiak pt-3 text-[0.95rem]">
    I use my Grahic Design expertise to build beautiful UIs with
    great UX
  </div>
</div>*/
}
