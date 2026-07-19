export default function NavElements() {
  return (
    <div>
      <ul className="list-none rounded-4xl p-5 hover:bg-black/5 flex">
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
