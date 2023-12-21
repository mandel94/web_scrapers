import React from "react";
import { ReactNode }  from "react";


interface NavbarListLayout {
    children: ReactNode | ReactNode[];
}

const NavbarListLayout: React.FC<NavbarListLayout> = ({ children }) => {
    return (
        <div className='navbar-list'>
            {children}
        </div>
    );  
}

export default NavbarListLayout;