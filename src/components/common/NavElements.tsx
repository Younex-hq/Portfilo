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
