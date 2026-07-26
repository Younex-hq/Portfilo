type VideoPlayerProps = {
  src: string;
  width?: string;
  rounded?: "none" | "rounded-xl" | "rounded-2xl" | "rounded-3xl";
};

export default function VideoPlayer({
  src,
  width = "full",
  rounded = "rounded-3xl",
}: VideoPlayerProps) {
  // TODO : make the video play only when its on view // same with the other background effects of the hero
  return (
    <div className={`w-${width}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className={`h-auto w-full max-w-lg object-contain ${rounded}`}
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}
