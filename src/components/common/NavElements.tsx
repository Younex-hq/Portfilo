import { Logo } from "./Logo";
import Menu4Line from "./Menu4Line";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type NavItem = {
  name: string;
  id: string;
  num?: string;
};

const NAV_SECTIONS: NavItem[] = [
  { name: "Home", id: "hero", num: "00" },
  { name: "About Me", id: "about", num: "01" },
  { name: "Tech Stack", id: "tech-stack", num: "1.1" },
  { name: "Projects", id: "projects", num: "02" },
  { name: "Contact", id: "contact", num: "03" },
];

const HERO_NAV_ITEMS: NavItem[] = [
  { name: "About Me", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

/**
 * Smoothly scrolls to the target element by ID and updates the URL hash
 */
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (typeof window !== "undefined" && window.history?.pushState) {
      window.history.pushState(null, "", `#${id}`);
    }
  }
};

// this nav bar will show in the hero section
export default function NavElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // intro animation
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

  return (
    <div ref={containerRef}>
      <ul className="flex list-none rounded-4xl p-5">
        {HERO_NAV_ITEMS.map((item) => (
          <li key={item.id} className="nav-title m-2">
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="text-off-white inline-block cursor-pointer rounded-full px-4 py-2 no-underline opacity-70 transition-all duration-300 hover:font-bold hover:tracking-wider hover:text-white hover:opacity-100"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// this navbar will be hidden in the hero section and appear when the user scrolls down
export function SideNavbar() {
  const sideNavContainerRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>("hero");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const item = NAV_SECTIONS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(item.id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync URL # with active section
  useEffect(() => {
    if (activeId) {
      window.history.replaceState(null, "", `#${activeId}`);
    }
  }, [activeId]);

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
      <ul className="relative flex list-none flex-col gap-1 rounded-4xl p-5 transition-all">
        {NAV_SECTIONS.filter((item) => item.id !== "hero").map(
          (item, index) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="nav-list m-1">
                {index === 0 && (
                  <a
                    title="Go Up"
                    className="text-off-white/60 absolute -top-10 ml-[5%] w-[50%] cursor-pointer pl-[5%] no-underline hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("hero");
                    }}
                  >
                    ^
                  </a>
                )}
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-2 no-underline transition-all duration-300 ${
                    isActive
                      ? "text-off-white font-bold tracking-wide"
                      : "text-off-white/80 hover:tracking-wide hover:text-white"
                  } `}
                >
                  <span
                    className={`text-m ${isActive ? "font-italianno text-3xl" : "text-sm"}`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`font-zodiak ml-4 text-xs transition-colors ${
                      isActive ? "font-semibold" : "opacity-80"
                    }`}
                  >
                    {item.num}
                  </span>
                </a>
              </li>
            );
          },
        )}
      </ul>
    </nav>
  );
}

// this is the nav bar that will show on mobile view, when clicking on the menu icon it will expand vertically to show the navbar items
export function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const item = NAV_SECTIONS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(item.id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show/hide nav based on scroll direction
  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        // Always show at the very top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down — hide
        setIsVisible(false);
        if (isOpen) setIsOpen(false);
      } else {
        // Scrolling up — show
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScrollDirection, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollDirection);
  }, [isOpen]);

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 right-0 left-0 z-50 p-3 transition-transform duration-300 ease-in-out md:hidden ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-bg-dark/30 w-full rounded-2xl border border-white/10 px-4 py-2 shadow-xl backdrop-blur-md transition-all duration-300">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              scrollToSection("hero");
              setIsOpen(false);
            }}
            className="relative cursor-pointer focus:outline-none"
            aria-label="Scroll to top"
          >
            <Logo size={46} colorBgTW="main-green" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-off-white cursor-pointer rounded-lg p-2 transition-colors hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div
              className={`transition-transform duration-300 ${
                isOpen ? "scale-95 rotate-90" : ""
              }`}
            >
              <Menu4Line width={"2rem"} height={"1.5rem"} />
            </div>
          </button>
        </div>

        {/* Vertically expandable mobile menu */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
            isOpen
              ? "mt-2 grid-rows-[1fr] pb-2 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="flex list-none flex-col gap-1 border-t border-white/10 pt-3">
              {NAV_SECTIONS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between rounded-xl px-4 py-2.5 no-underline transition-all duration-200 ${
                        isActive
                          ? "font-italianno bg-white/10 text-3xl font-medium text-white"
                          : "text-off-white/75 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="">{item.name}</span>
                      <span
                        className={`font-zodiak text-sm ${
                          isActive ? "font-semibold" : "opacity-80"
                        } ${item.id === "hero" ? "hidden" : ""}`}
                      >
                        {item.num}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
