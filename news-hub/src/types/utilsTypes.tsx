// Types the user will never see

import React from "react";

/* NavBar Menu Best practices https://webflow.com/blog/navigation-bar-design */

export interface MenuProps {
  // Children of type next Link
  links: string[];
  isOpen: boolean;
}

export interface LogoProps {
  src: string;
  alt: string;
}



enum Layouts {
    sidebar = "SIDEBAR",
    navbar = "NAVBAR",
}

export type SayALayout = keyof typeof Layouts;



// Create type that omits isSidebar property from NavigationProps
export interface NavigationProps {
    logo: LogoProps,
    links: string[],
    layout: SayALayout,
}


export type SidebarProps = Omit<NavigationProps, "layout"> & { menu: MenuProps };
export type NavbarProps = SidebarProps


export type Navbar = React.FC<NavbarProps>;
export type Sidebar = React.FC<SidebarProps>;
export type Logo = React.FC<LogoProps>;
export type NavMenu = React.FC<MenuProps>;

