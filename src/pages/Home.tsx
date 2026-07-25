import { SideNavbar } from "../components/common/NavElements";
import Content from "../components/layout/Content";
import Hero from "../components/layout/Hero";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="flex">
        {/* ---------nav----------- */}
        <div className="relative bottom-0 h-screen">
          <div className="fixed bottom-0 flex">
            <SideNavbar />
          </div>
        </div>
        {/* ----------------------- */}

        <div className="ml-40 flex-1 items-center justify-center">
          <Content />
        </div>
      </div>
      <div className="h-[50vh]">footer</div>
    </div>
  );
}
