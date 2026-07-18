import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="flex pt-[10%]">
      <Elements />
      <Counter />
    </div>
  );
}

export default App;

const Elements = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const children = container.current?.children;
    if (!children) return;

    gsap.from(children, {
      // `gsap.from` can accept an HTMLCollection directly
      y: -200,
      scale: 0.85,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1,0.75)",
      stagger: 0.1,
    });
  });
  return (
    <div
      ref={container}
      className="m-auto flex w-fit flex-col justify-center gap-10 rounded-3xl p-10 text-2xl font-bold"
    >
      <div>VITE</div>
      <div>React.ts [v19.2.7]</div>
      <div>TailwindCSS [v4.3.3]</div>
      <div>GSAP [v3.15], GSAP/react [v2.1.2]</div>
    </div>
  );
};

const Counter = () => {
  const counter = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLDivElement>(null);
  const numplus = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const [number, setNumber] = useState(0);

  useGSAP(() => {
    gsap.from(counter.current, {
      y: -200,
      scale: 0.85,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1,0.75)",
      delay: 0.2,
    });
  });

  const counterup = () => {
    setNumber((prev) => prev + 1);
    const tl = gsap.timeline();
    tl.fromTo(button.current, { scale: 0.85 }, { scale: 1 })
      .fromTo(
        num.current,
        { opacity: 1, y: 0, scale: 1 },
        { opacity: 0, y: -30, scale: 0.85 },
        "<",
      )
      .fromTo(
        numplus.current,
        { opacity: 0, y: 30, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1 },
        "<",
      );
  };

  return (
    <div
      ref={counter}
      className="m-auto flex w-fit flex-col items-center justify-center gap-10 rounded-3xl bg-black p-10 text-2xl font-bold"
    >
      <div>Counter</div>
      <div className="relative flex items-center justify-center">
        <div ref={num} className="absolute">
          {number}
        </div>
        <div ref={numplus} className="absolute opacity-0">
          {number + 1}
        </div>
      </div>
      <button
        ref={button}
        className="cursor-pointer rounded-2xl bg-blue-500 px-4 py-2 hover:bg-blue-700"
        onClick={counterup}
      >
        +
      </button>
    </div>
  );
};
