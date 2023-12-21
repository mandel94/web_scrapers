import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import Image, { ImageProps } from 'next/image';
import React from 'react';

/* NavBar Menu Best practices https://webflow.com/blog/navigation-bar-design */


interface NavMenuProps {
    isOpen: boolean;
}

interface SideBarProps {
    // Define isOpen property with type boolean
    isOpen: boolean;
}


interface NavBarProps {
    logo: Logo;
    navMenu: NavMenu;
}

type LogoProps = ImageProps;  


export type Logo = React.FC<LogoProps>

export type NavBar = React.FC<NavBarProps>; 

export type NavMenu = React.FC<NavMenuProps>;

export type SideBar = React.FC<SideBarProps>;


