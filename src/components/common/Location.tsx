import VideoPlayer from "./VideoPlayer";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LocalTime } from "../LocalTime";

import vidLocationSd from "@/assets/media/vid-location-SD.webm";
import vidLocationHd from "@/assets/media/vid-location-HD.webm";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Location() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const video =
        containerRef.current?.querySelector<HTMLVideoElement>("video");

      // Pause video on mount so it doesn't autoplay early
      if (video) {
        video.pause();
      }

      gsap.from(".video-container", {
        autoAlpha: 0,
        y: 100,
        scale: 0.85,

        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 30%",
          immediateRender: false,
          // scrub: 0.5,
          onLeave: () => {
            // Fires when scroll passes `end` (animation completed)
            video?.play();
          },
          onEnterBack: () => {
            // Fires when scrolling back up into the animation range
            video?.pause();
          },
          onLeaveBack: () => {
            // Fires if scrolled all the way above `start`
            video?.pause();
          },
        },

        onComplete: () => {
          gsap.fromTo(
            ".location-info",
            {
              autoAlpha: 0,
              y: -20,
            },
            {
              autoAlpha: 1,
              y: 0,
              delay: 2,
              stagger: 0.2,
            },
          );
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden p-3 sm:w-[95%] sm:p-0"
    >
      <div className="font-italianno text-4xl md:text-6xl">From</div>
      <div className="video-container relative h-[70vh] w-full">
        <VideoPlayer
          src={vidLocationSd}
          hdSrc={vidLocationHd}
          rounded="rounded-2xl"
          className="h-full w-full rounded-t-2xl object-cover"
        />
      </div>
      <div className="location-info border-off-white/10 flex items-center justify-between rounded-2xl rounded-t-none border border-t-0 px-4 py-2 opacity-0">
        <span className="location-info text-5xl">Algiers, Algeria</span>
        <LocalTime className="w-fit text-center text-3xl font-bold" />
      </div>
    </div>
  );
}
