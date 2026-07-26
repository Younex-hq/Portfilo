import YLogo from "../../assets/svg/Y-logo-TM.svg?react";
import VideoPlayer from "../common/VideoPlayer";

export default function About() {
  return (
    <div className="m-auto mt-[10%]">
      <TheName />
      <div className="mt-[20%] flex w-fit flex-col">
        <TheJob />
      </div>
    </div>
  );
}

function TheName() {
  return (
    <div className="flex flex-col items-center">
      <div className="font-zodiak flex flex-col items-center">
        <div className="font-italianno w-full text-4xl md:text-6xl">I am</div>
        <span className="text-5xl font-medium md:text-8xl">BELIAMINE</span>
        <span className="text-5xl md:text-8xl">Younes</span>
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
  return (
    <>
      <div className="font-zodiak w-fit text-6xl opacity-60">a</div>
      <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
        <div className="relative w-full">
          <div className="absolute">
            <div className="ml-4 p-2 text-[3.3rem]/14 font-bold md:ml-2 md:text-[3.5rem]/14">
              WEB <span className="font-italianno text-[5rem]">D</span>EVELOPER
            </div>
            <div className="font-zodiak absolute top-6 right-6 ml-auto w-fit pt-3 text-[0.95rem] md:relative md:-top-6 md:right-2">
              Full Stack
            </div>
          </div>
          <div className="m-auto w-[90%] md:w-[30vw]">
            <VideoPlayer src="/media/vid-dev.webm" rounded="rounded-2xl" />
          </div>
        </div>

        <div className="relative md:w-[120%]">
          <div className="font-zodiak w-fit text-5xl opacity-60">&</div>
          <div className="relative">
            <div className="m-auto w-[90%] md:w-full">
              <VideoPlayer src="/media/vid-designer.webm" />
            </div>
            <div className="ml-4 pt-3 md:ml-0">
              <div className="-mb-9 text-[3.3rem]/14 font-bold">
                GRAPHIC <span className="font-italianno text-[5rem]">D</span>
                ESIGNER
              </div>
              <br />
              <div className="font-zodiak pt-3 text-[0.95rem]">
                I use my Grahic Design expertise to build beautiful UIs with
                great UX
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
