import { NavMenu } from "@/types/types";
import Link from "next/link";

const NavMenu: NavMenu = ({ links, isOpen }) => {
  return (
    // Define 5 Links, the ones you wouls use in a generic dashboard nav menu
    <>
      <div className="nav-menu">
        {links.map((link) => (
          <Link href={`/${link.toLowerCase()}`}>
            {link}
          </Link>
        ))} 
      </div>
    </>
  );
};


export default NavMenu;
