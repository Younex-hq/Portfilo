import { SideNavbar } from "./NavElements";

export function SideBar() {
  return (
    <div className="relative bottom-0 h-screen">
      <div className="fixed bottom-0 flex">
        <SideNavbar />
      </div>
    </div>
  );
}
