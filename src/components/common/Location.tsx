import VideoPlayer from "./VideoPlayer";

export function Location() {
  return (
    <>
      <div className="relative">
        <div className="font-italianno text-4xl md:text-6xl">From</div>
        <div className="relative h-[70vh] w-full">
          <VideoPlayer
            src="/media/vid-location.webm"
            rounded="rounded-2xl"
            className="h-full w-full rounded-2xl object-cover"
          />
          <div className="font-zodiak bg-bg-darker absolute right-3 bottom-2 rounded-xl px-6 py-3 text-2xl">
            Algeries, Algeria
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 -z-1 w-full border"></div>
          <div className="bg-bg-darker m-auto w-fit p-3">
            It's <span className="font-zodiak text-xl">11:53</span>pm now
          </div>
          {/* TODO: add current time in algeries*/}
        </div>
      </div>
    </>
  );
}
