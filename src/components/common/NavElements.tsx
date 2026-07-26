import { Logo } from "./Logo";
import Menu4Line from "./Menu4Line";

export default function NavElements() {
  return (
    <div>
      <ul className="flex list-none rounded-4xl p-5">
        <li className="m-2 cursor-pointer px-4 py-2 opacity-70 hover:opacity-100">
          About Me
        </li>
        <li className="m-2 cursor-pointer px-4 py-2 opacity-70 hover:opacity-100">
          Projects
        </li>
        <li className="m-2 cursor-pointer px-4 py-2 opacity-70 hover:opacity-100">
          Contact
        </li>
      </ul>
    </div>
  );
}

export function SideNavbar() {
  // TODO : reveale on scroll
  return (
    <nav>
      <ul className="flex list-none flex-col rounded-4xl p-5">
        <li className="m-2 flex w-full cursor-pointer items-center justify-between px-4 py-2 opacity-70 hover:opacity-100">
          About Me <span className="font-zodiak sm">01</span>
        </li>
        <li className="m-2 flex w-full cursor-pointer items-center justify-between px-4 py-2 opacity-70 hover:opacity-100">
          Projects <span className="font-zodiak sm">02</span>
        </li>
        <li className="cursor-items-center m-2 flex w-full justify-between px-4 py-2 opacity-70 hover:opacity-100">
          Contact <span className="font-zodiak sm">03</span>
        </li>
      </ul>
    </nav>
  );
}

export function MobileNavBar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 p-3 md:hidden">
      <div className="bg-bg-dark/20 w-full rounded-xl border border-white/0 px-4 py-2 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Logo size={50} colorBgTW="main-green" />
          </div>
          <div>
            <Menu4Line width={"2rem"} height={"1.5rem"} />
          </div>
        </div>
        {/*<div>content</div>*/}
      </div>
    </nav>
  );
}
