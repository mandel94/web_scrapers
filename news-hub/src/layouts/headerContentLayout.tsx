import React from 'react';
import Logo from '../logo/logo';
import NavbarList from '../navbarList/navbarList';

interface HeaderContentLayoutProps {
    children: [React.ReactElement<typeof Logo>, 
               React.ReactElement<typeof NavbarList>];
}


const HeaderContentLayout: React.FC<HeaderContentLayoutProps> = ({ children }) => {
    return (
        <div className='header-content'>
            { children }
        </div>
    );
}

export default HeaderContentLayout;