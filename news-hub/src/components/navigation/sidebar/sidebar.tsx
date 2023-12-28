import Logo from '@/components/logo/logo';
import { Sidebar } from '@/types/navigationTypes';
import NavMenu from "../navMenu/navMenu";

const Sidebar: Sidebar = ({ logo, links, isOpen }) => {
    return (
        <>
        <Logo src={ logo.src } alt={ logo.alt } />
        <NavMenu links={ links } isOpen={ isOpen } /> 
        </>
    )
}


export default Sidebar;