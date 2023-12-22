import Logo from '@/components/logo/logo';
import CustomButton from '@/components/customButton/customButton';
import NavMenu from '@/components/navigation/navMenu/navMenu';
import { Navbar } from "@/types/types";


const Navbar: Navbar = ({ logo, menu }) => {
    return (
        <>
        <Logo src={ logo.src } alt={ logo.alt } />
        <NavMenu links={ menu.links } isOpen={ menu.isOpen } /> 
        <CustomButton/>
        </>
    )
}

export default Navbar;