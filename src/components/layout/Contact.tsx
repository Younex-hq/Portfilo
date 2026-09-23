import { ContactData } from "@/data/ContactData";
import ShinyText from "../common/ShinyText";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Contact() {
  const contactlContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.from(".title", {
      autoAlpha: 0,
      y: 100,
      x: -50,
      scale: 0.85,

      scrollTrigger: {
        trigger: ".title",
        start: "top bottom",
        end: "top 80%",
        immediateRender: false,
        scrub: true,
      },
    }).from(".links > *", {
      autoAlpha: 0,
      y: 100,
      stagger: 0.2,

      scrollTrigger: {
        trigger: ".title",
        start: "top 90%",
        end: "top 50%",
        immediateRender: false,
        scrub: true,
      },
    });
  });

  return (
    <>
      <div
        ref={contactlContainerRef}
        id="contact"
        className="relative m-auto mt-[35%] w-screen max-w-325 scroll-mt-24 sm:px-4 md:mt-[10%] md:w-full"
      >
        <div className="mb-9 sm:mb-12">
          <div className="title degree-title text-center text-3xl sm:text-start sm:text-4xl">
            <span className="font-italianno text-6xl md:text-7xl">C</span>
            ontacts{" "}
            <span className="font-italianno text-6xl md:text-7xl">| S</span>
            ocials
          </div>
          <div className="links grid grid-cols-1 rounded-2xl p-5 sm:grid-cols-2">
            {ContactData.map((j, index) => (
              <a
                key={index}
                href={j.link}
                title={j.title}
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white"
              >
                <div className="hover:border-off-white/20 border-b-off-white/10 flex gap-3 rounded-xl border border-b-2 border-white/0 p-5 pl-[15%] sm:border-white/0 sm:pl-5">
                  <div className="text-2xl">{j.icon}</div>
                  <div>
                    <ShinyText text={j.name} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
