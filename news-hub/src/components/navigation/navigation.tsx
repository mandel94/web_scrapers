import React from "react";
import { Navigation } from "@/types/types";
import Sidebar from "@/components/navigation/sidebar/sidebar";
import Navbar from "@/components/navigation/navbar/navbar";
import { useLayoutContext } from "@/context/layoutContext";

const Navigation: Navigation = () => {
  const [currentLayout, setCurrentLayout] = useLayoutContext();

  const isSidebar = currentLayout === "sidebar";

  const logoProps = {
    src: process.env.LOGO_IMAGE_URL,
    alt: process.env.LOGO_IMAGE_ALT,
  };

  const menuProps = {
    links: process.env.NAVBAR_LINKS.split(","),
    isOpen: false,
  };

  return (
    (isSidebar && <Sidebar logo={logoProps} menu={menuProps} />) || (
      <Navbar logo={logoProps} menu={menuProps} />
    )
  );
};

export default Navigation;
