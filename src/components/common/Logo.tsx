import YLogo from "../../assets/svg/Y-logo-TM.svg?react";

type LogoProps = {
  size?: string;
  colorBgTW?: string; // tailwindCSS writing style
  colorTextTW?: string;
};

export function Logo({
  size = "70px",
  colorBgTW = "[#2988f5]",
  colorTextTW = "white",
}: LogoProps) {
  return (
    <div
      className={`relative flex h-[${size}] items-center justify-center`}
      style={{ aspectRatio: 1 / 3 }}
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
