import YLogo from "../../assets/svg/Y-logo-TM.svg?react";

type LogoProps = {
  size?: number;
  colorBgTW?: string; // tailwindCSS writing style
  colorTextTW?: string;
};

export function Logo({
  size = 70,
  colorBgTW = "main-green",
  colorTextTW = "white",
}: LogoProps) {
  const isMainGreen = colorBgTW === "main-green";
  const isMainBlue = colorBgTW === "main-blue" || colorBgTW.includes("2988f5");

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: size, width: `calc(${size}px * 0.61)` }}
    >
      <YLogo
        className={`absolute h-full w-auto ${colorTextTW === "white" ? "text-white" : `text-${colorTextTW}`}`}
        aria-label="Belimaine Younes Logo"
      />
      <div
        className={`aspect-square h-[60%] rounded-full ${
          isMainGreen
            ? "bg-main-green"
            : isMainBlue
              ? "bg-main-blue-light"
              : "bg-main-green"
        }`}
        style={isMainGreen ? { backgroundColor: "#2fb1bc" } : undefined}
      ></div>
    </div>
  );
}
