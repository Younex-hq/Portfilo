import ShinyWrapper from "../common/ShinyWrapper";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import type { StackType } from "../../data/TechStackData";
import {
  frontendStack,
  frontendMoreStack,
  frontendExtraStack,
  backendStack,
  backMoreStack,
  databaseStack,
  databaseMoreStack,
  databaseExtraStack,
} from "../../data/TechStackData";

import {
  FaReact as IconReact,
  FaDatabase as IconDatabase,
} from "react-icons/fa";
import { SiNestjs as IconNestJs } from "react-icons/si";
import { RxCode as IconDev } from "react-icons/rx";
import { CiPen as IconDesign } from "react-icons/ci";

gsap.registerPlugin(useGSAP);

export default function TechStack() {
  gsap.registerPlugin(useGSAP);
  const ormOdm = useRef<HTMLSpanElement>(null);

  const tl = gsap.timeline({ repeat: -1 });

  useGSAP(
    () => {
      tl.fromTo(
        ".theR",
        {
          autoAlpha: 0,
          x: -20,
          scale: 0.85,
        },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 1,
        },
        "<",
      )
        .to(".theR", {
          autoAlpha: 0,
          x: 20,
          scale: 0.85,
          delay: 2,
        })
        .fromTo(
          ".theD",
          {
            autoAlpha: 0,
            x: -20,
            scale: 0.85,
          },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 1,
          },
          "=-0.5",
        )
        .to(".theD", {
          autoAlpha: 0,
          x: 20,
          scale: 0.85,
          delay: 2,
        });
    },
    { scope: ormOdm },
  );

  const teckStackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(teckStackRef.current, {
        autoAlpha: 0,
        y: 100,
        scale: 0.85,

        scrollTrigger: {
          trigger: teckStackRef.current,
          start: "top 90%",
          end: "top 50%",
          immediateRender: false,
        },

        onComplete: () => {
          const tl = gsap.timeline();

          tl.fromTo(
            ".tech-cards > *",
            {
              x: -100,
              autoAlpha: 0,
              scale: 0.85,
            },
            {
              x: 0,
              autoAlpha: 1,
              scale: 1,
              stagger: 0.2,
              delay: -0.2,
            },
          )
            .fromTo(
              ".tools-stack > *",
              {
                y: -100,
                autoAlpha: 0,
                scale: 0.85,
              },
              {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                stagger: 0.2,
              },
            )
            .fromTo(
              ".AdditionalTechInfo",
              {
                y: 100,
                autoAlpha: 0,
                scale: 0.85,
              },
              {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                stagger: 0.2,
              },
            );
        },
      });
    },
    { scope: teckStackRef },
  );

  return (
    <div ref={teckStackRef} className="sm:max-w-325">
      <div className="p-5 text-4xl sm:p-0">
        <span className="font-italianno text-6xl">Tech</span> Stack
      </div>
      <br />

      <FrameworkStack />

      <br />

      <div className="tech-cards mt-5 flex h-full w-screen overflow-auto px-5">
        <TechCard
          title="Frontend"
          basic={frontendStack}
          more={frontendMoreStack}
          extra={frontendExtraStack}
          gradient="right"
          // className="opacity-0"
        />
        <div className="flex items-center opacity-0">
          <hr className="w-[6vw] opacity-50 sm:w-[3vw]" />
          <div className="text-center">
            Rest API <div className="text-off-white/60 text-sm">GraphQL</div>
          </div>
          <hr className="w-[6vw] opacity-50 sm:w-[3vw]" />
        </div>
        <TechCard
          title="Backend"
          basic={backendStack}
          more={backMoreStack}
          gradient="center"
          // className="opacity-0"
        />
        <div className="flex items-center opacity-0">
          <hr className="w-[6vw] opacity-50 sm:w-[3vw]" />
          <div className="text-center">
            O
            <span ref={ormOdm} className="relative">
              <span className="opacity-0"> _ </span>
              <span className="theR absolute left-[18%] opacity-0">R</span>
              <span className="theD absolute left-[17%] opacity-0">D</span>
            </span>
            M / <div className="text-sm">Queries</div>
          </div>
          <hr className="w-[6vw] opacity-50 sm:w-[3vw]" />
        </div>
        <TechCard
          title="Database"
          basic={databaseStack}
          more={databaseMoreStack}
          extra={databaseExtraStack}
          gradient="left"
          // className="opacity-0"
        />
      </div>
      <ToolsStack className="tools-stack" />
    </div>
  );
}
function AdditionalTechInfo({ className }: { className?: string }) {
  return (
    <div
      className={`font- m-auto p-5 text-center tracking-wide ${className} text-off-white/90`}
    >
      My programming journey started with learning the basics of programming
      concepts with <b>C++</b>,<br />
      Learned OOP with <b>Java</b>, then <b>HTML, CSS, JS</b> for web pages,{" "}
      <b>PHP</b> to interact with databases (I started with <b>MySQL</b>),
      <br /> now I'm taking my <b>TypeScript</b> skills to another level, and
      learning <b>Go</b>lang on the side <br className="hidden sm:inline" />{" "}
      <span className="opacity-70">
        <i>
          (my home server is weak and one Node app is taking all the resources,
          so for now I'm intrested in Go for better efficiency)
        </i>
      </span>
    </div>
  );
}

function ToolsStack({ className }: { className?: string }) {
  return (
    <>
      <div
        className={`mt-20 flex w-full flex-col justify-around gap-10 p-5 sm:mt-10 md:w-[90%] md:flex-row ${className}`}
      >
        <div className="border-off-white/10 from-bg-dark via-bg-darker relative rounded-2xl border-r border-b bg-linear-to-b p-5">
          <div className="font-zodiak mb-9 text-center text-2xl md:mb-5">
            Dev Tools
          </div>
          <div className="absolute right-7 bottom-7 flex text-7xl opacity-20 sm:hidden md:top-10 md:right-10">
            <IconDev />
          </div>
          <ul className="flex flex-col justify-center gap-5 md:list-none md:flex-row md:gap-10">
            <li>
              Git <span className="opacity-70">/ GitHub...</span>
            </li>
            <li>Docker</li>
            <li>
              Vim <span className="opacity-70">/ Neovim</span>
            </li>
          </ul>
        </div>
        <div className="border-off-white/10 from-bg-dark via-bg-darker relative rounded-2xl border-r border-b bg-linear-to-b p-5">
          <div className="font-zodiak mb-9 text-center text-2xl md:mb-5">
            Design Tools
          </div>
          <div className="absolute right-7 bottom-7 flex text-7xl opacity-20 sm:hidden md:top-10 md:right-10">
            <IconDesign />
          </div>
          <ul className="flex flex-col justify-center gap-5 md:list-none md:flex-row md:gap-10">
            <li>
              <span className="font-light">Adobe</span> Photoshop
            </li>
            <li>
              <span className="font-light">Adobe</span> Illustrator
            </li>
            <li>
              <span className="font-light">Adobe</span> InDesign
            </li>
            <li>Figma / Penpot</li>
            <li>Affinity by Canva</li>
          </ul>
        </div>
      </div>

      <AdditionalTechInfo className="AdditionalTechInfo" />
    </>
  );
}

type TechStackProps = {
  title: string;
  basic?: StackType[];
  more?: StackType[];
  extra?: StackType[];
  gradient?: "left" | "right" | "center";
  className?: string;
};

function TechCard({
  title,
  basic,
  more,
  extra,
  gradient,
  className,
}: TechStackProps) {
  const toLeft = "bg-linear-to-r from-bg-dark";
  const toCenter = "bg-linear-to-l from-bg-dark to-bg-dark via-bg-darker";
  const toRight = "bg-linear-to-l from-bg-dark";

  const gradientDirection =
    gradient === "left" ? toLeft : gradient === "right" ? toRight : toCenter;

  return (
    <ShinyWrapper
      className={`min-w-[85vw] rounded-2xl p-5 sm:min-w-[19vw] ${gradientDirection} ${className} border-off-white/10 border`}
      speed={6}
      direction={gradient !== "center" ? gradient : undefined}
      pauseOnHover={false}
      yoyo={gradient === "center" ? true : false}
      angle={90}
    >
      <div
      // className={`min-w-[65vw] rounded-2xl border p-5 sm:min-w-[16vw] ${gradientDirection}`}
      >
        <div className="font-zodiak mb-5 text-2xl">{title}</div>
        <br />
        <div className="">
          {basic ? (
            <ul className="list-none">
              {basic.map((item, index) => (
                <TechList key={index} {...item} />
              ))}
            </ul>
          ) : (
            false
          )}
          {more ? (
            <>
              <br />
              <ul className="list-none">
                {more.map((item, index) => (
                  <TechList key={index} {...item} />
                ))}
              </ul>
            </>
          ) : (
            false
          )}
          {extra ? (
            <>
              <br />
              <ul className="list-none">
                {extra.map((item, index) => (
                  <TechList key={index} {...item} />
                ))}
              </ul>
            </>
          ) : (
            false
          )}
        </div>
      </div>
    </ShinyWrapper>
  );
}

function TechList({ icon, name }: StackType) {
  return (
    <ul className="list-none">
      <li className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span> <span>{name}</span>
      </li>
    </ul>
  );
}

function FrameworkStack() {
  return (
    <>
      <div className="m-auto flex w-fit items-center gap-5 text-5xl opacity-90 md:text-7xl">
        <IconReact title="React" />
        <hr className="w-[5vw]" />
        <IconNestJs title="NestJS" />
        <hr className="w-[5vw]" />
        <IconDatabase title="Different Database Types" />
      </div>
    </>
  );
}
