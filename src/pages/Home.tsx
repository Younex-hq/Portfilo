import { MobileNavBar } from "../components/common/NavElements";
import { SideBar } from "../components/common/SideBar";
import Content from "../components/layout/Content";
import Hero from "../components/layout/Hero";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <MobileNavBar />

      <div className="flex">
        <div className="hidden md:block">
          <SideBar />
        </div>

        <div className="flex-1 items-center justify-center md:ml-40">
          <Content />
        </div>
      </div>
      <div className="h-[50vh]"></div>
    </div>
  );
}
