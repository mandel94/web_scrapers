import { Sidebar } from "../../../types/types";
import Logo from '@/components/logo/logo';
import CustomButton from '@/components/customButton/customButton';
import NavMenu from "../navMenu/navMenu";

const Sidebar: Sidebar = ({ logo, menu }) => {
    return (
        <>
        <Logo src={ logo.src } alt={ logo.alt } />
        <NavMenu links={ menu.links } isOpen={ menu.isOpen } /> 
        <CustomButton/>
        </>
    )
}

export default Sidebar;