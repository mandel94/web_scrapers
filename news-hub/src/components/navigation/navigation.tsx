import React from 'react';
import { Navigation } from '@/types/types';
import SideBar from '@/components/navigation/sidebar/sidebar';
import Navbar from '@/components/navigation/navbar/navbar';
import { useLayoutContext } from '@/context/layoutContext';

const Navigation: Navigation = ({ logo, menu, isSidebar }) => {
    const [currentLayout, setCurrentLayout] = useLayoutContext();

    return (isSidebar && <SideBar logo={logo} menu={menu} /> || <Navbar logo={logo} menu={menu} />)
}

export default Navigation;