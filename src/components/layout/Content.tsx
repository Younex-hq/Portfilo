import About from "./About";
import Projects from "./Projects";

export default function Content() {
  return (
    <div className="flex w-full flex-col">
      <About />
      <Projects />
    </div>
  );
}
