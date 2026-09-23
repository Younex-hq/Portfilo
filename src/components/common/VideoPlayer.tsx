import { useEffect, useRef } from "react";

type VideoPlayerProps = {
  src: string;
  hdSrc?: string;
  width?: string;
  className?: string;
  rounded?: "none" | "rounded-xl" | "rounded-2xl" | "rounded-3xl";
};

export default function VideoPlayer({
  src,
  hdSrc,
  width = "full",
  className,
  rounded = "rounded-3xl",
}: VideoPlayerProps) {
  // ! future me : this compoent takes 2 srcs (src and hdSrc) so it will load the SD version then when the HD version loads it will swith to it

  const videoRef = useRef<HTMLVideoElement>(null);
  const hdLoadedRef = useRef(false);

  useEffect(() => {
    if (!hdSrc || !videoRef.current) return;

    const preloader = document.createElement("video");
    preloader.preload = "auto";
    preloader.muted = true;
    preloader.playsInline = true;
    preloader.src = hdSrc;

    const onCanPlayThrough = () => {
      if (!videoRef.current || hdLoadedRef.current) return;
      hdLoadedRef.current = true;

      const currentVideo = videoRef.current;
      const currentTime = currentVideo.currentTime;
      const isPlaying = !currentVideo.paused && !currentVideo.ended;

      const source = currentVideo.querySelector("source");
      if (source) {
        source.src = hdSrc;
      } else {
        currentVideo.src = hdSrc;
      }
      currentVideo.load();

      const onLoaded = () => {
        if (videoRef.current && !isNaN(currentTime)) {
          videoRef.current.currentTime = currentTime;
        }
        if (isPlaying && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
        currentVideo.removeEventListener("loadeddata", onLoaded);
      };
      currentVideo.addEventListener("loadeddata", onLoaded);
    };

    preloader.addEventListener("canplaythrough", onCanPlayThrough);
    preloader.load();

    return () => {
      preloader.removeEventListener("canplaythrough", onCanPlayThrough);
      preloader.src = "";
    };
  }, [hdSrc]);

  return (
    <div className={`w-${width} h-full`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className={
          className ?? `h-auto w-full max-w-lg object-contain ${rounded}`
        }
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}
