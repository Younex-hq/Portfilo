import NavElements from "../common/NavElements";

export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-around bg-red-900">
      <h1>HELLO !</h1>
      <div>
        Welcome to my <span className="font-italianno text-4xl">Portfolio</span>
      </div>
      <div>
        <NavElements />
      </div>
    </div>
  );
}
