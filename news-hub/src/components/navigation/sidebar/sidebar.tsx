import Logo from '@/components/logo/logo';
import { Sidebar } from '@/types/utilsTypes';
import NavMenu from "../navMenu/navMenu";

const Sidebar: Sidebar = ({ logo, menu }) => {
    return (
        <>
        <Logo src={ logo.src } alt={ logo.alt } />
        <NavMenu links={ menu.links } isOpen={ menu.isOpen } /> 
        </>
    )
}


export default Sidebar;