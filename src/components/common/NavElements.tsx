import { Logo } from "./Logo";
import Menu4Line from "./Menu4Line";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function NavElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // into animation
      gsap.from(".nav-title", {
        autoAlpha: 0,
        y: 50,
        scale: 0.85,
        delay: 0.7,
        stagger: 0.1,
      });

      // exit with scroll animation
      gsap.to(".nav-title", {
        autoAlpha: 0,
        y: 300,
        x: -200,
        ease: "power2.out",
        stagger: 0.1,
        immediateRender: false, // Prevents this tween from overriding autoAlpha on page load
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    {
      scope: containerRef,
      revertOnUpdate: true,
    },
  );

  const navTitle = ["About Me", "Projects", "Contact"];

  return (
    <div ref={containerRef}>
      <ul className="flex list-none rounded-4xl p-5">
        {navTitle.map((nav, i) => (
          <li
            key={i}
            className="nav-title m-2 cursor-pointer px-4 py-2 opacity-70 hover:opacity-100"
          >
            {nav}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SideNavbar() {
  const navTitle = ["About Me", "Projects", "Contact"];

  const sideNavContainerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".nav-list", {
        autoAlpha: 0,
        x: 100,
        y: -10,
        ease: "power2.out",
        stagger: 0.1,

        scrollTrigger: {
          trigger: ".nav-list",
          start: "top 50%",
          scrub: true,
        },
      });
    },
    {
      scope: sideNavContainerRef,
      revertOnUpdate: true,
    },
  );

  return (
    <nav ref={sideNavContainerRef}>
      <ul className="flex list-none flex-col rounded-4xl p-5">
        {navTitle.map((nav, i) => (
          <li
            key={i}
            className="nav-list m-2 flex w-full cursor-pointer items-center justify-between px-4 py-2 opacity-70 hover:opacity-100"
          >
            {nav} <span className="font-zodiak sm">0{i + 1}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MobileNavBar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 p-3 md:hidden">
      <div className="bg-bg-dark/20 w-full rounded-xl border border-white/10 px-4 py-2 shadow-md backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Logo size={50} colorBgTW="main-green" />
          </div>
          <div>
            <Menu4Line width={"2rem"} height={"1.5rem"} />
          </div>
        </div>
      </div>
    </nav>
  );
}
