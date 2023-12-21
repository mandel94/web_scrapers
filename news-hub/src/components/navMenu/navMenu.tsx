import { NavMenu } from "@/types/types";
import Link from "next/link";

const NavMenu: NavMenu = () => {
  return (
    // Define 5 Links, the ones you wouls use in a generic dashboard nav menu
    <>
      <div className="nav-menu">
        <Link href="/overview">Profile</Link>
        <Link href="/control">Hub</Link>
        <Link href="/settings">Settings</Link>
        <Link href="/help">Help</Link>
        <Link href="/logout">Logout</Link>
      </div>
    </>
  );
};


export default NavMenu;
