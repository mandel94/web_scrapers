import NextLink, { LinkProps as NextLinkProps } from "next/link";
import Image, { ImageProps } from "next/image";
import React from "react";

/* NavBar Menu Best practices https://webflow.com/blog/navigation-bar-design */

interface NavMenuProps {
  // Children of type next Link
  links: string[];
  isOpen: boolean;
}

interface LogoProps {
  src: string;
  alt: string;
}

interface NavigationProps {
    layoutType: ;
}


enum Layouts {
    sidebar = "SIDEBAR",
    navbar = "NAVBAR",
}

type SayALayout = keyof typeof Layouts;



// Create type that omits isSidebar property from NavigationProps
export type NavbarProps = Omit<NavigationProps, "isSidebar">;
export type SidebarProps = Omit<NavigationProps, "isSidebar">;



export type Navigation = React.FC<NavigationProps>;
export type Logo = React.FC<LogoProps>;
export type Navbar = React.FC<NavbarProps>;
export type Sidebar = React.FC<SidebarProps>;
export type NavMenu = React.FC<NavMenuProps>;

export type layoutContextType = [ SayALayout, React.Dispatch<React.SetStateAction<SayALayout>> ];
