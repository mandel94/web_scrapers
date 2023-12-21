import { SideBar } from "../../types/types";
import Logo from '@/components/logo/logo' 
import NavMenu from '@/components/navMenu/navMenu

const SideBar: SideBar = () => {
    return (
        <>
        <Logo src="/images/Color logo with background.png" alt="News Beat's logo" />
        <NavMenu/>
        </>
    )
}

