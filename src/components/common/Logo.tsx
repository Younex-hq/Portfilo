import YLogo from "../../assets/svg/Y-logo-TM.svg?react";

type LogoProps = {
  size?: number;
  colorBgTW?: string; // tailwindCSS writing style
  colorTextTW?: string;
};

export function Logo({
  size = "70",
  colorBgTW = "[#2988f5]",
  colorTextTW = "white",
}: LogoProps) {
  //
  // TODO : the logo is not showing on the mobile view for some fucking reason, it was working perfectly, then for some fucking reason it disappeared

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: size, width: `calc(${size}px * 0.61)` }}
    >
      <YLogo
        className={`absolute h-full w-auto text-${colorTextTW}`}
        aria-label="Belimaine Younes Logo"
      />
      <div
        className={`bg-${colorBgTW} aspect-square h-[60%] rounded-full`}
      ></div>
    </div>
  );
}
