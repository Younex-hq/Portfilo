import NavElements from "../common/NavElements";
import TextPressure from "../common/TextPressure";

export default function Hero() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-around">
      {/*<h1>HELLO !</h1>*/}
      <div className="absolute mt-[50vh] h-screen w-[50vw]">
        <HelloText />
      </div>
      <div>
        Welcome to my <span className="font-italianno text-4xl">Portfolio</span>
      </div>
      <div>
        <NavElements />
      </div>
    </div>
  );
}

function HelloText() {
  return (
    <TextPressure
      text="Hello!"
      flex
      alpha={false}
      stroke={false}
      width={true}
      weight
      italic
      textColor="#ffffff"
      strokeColor="#2856f5"
      minFontSize={136}
      maxDistance={650}
    />
  );
}
