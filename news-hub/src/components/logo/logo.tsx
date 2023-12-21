import { Logo } from '@/types/types'


const Logo: Logo = ({ src, alt }) => {
    return (
        <div className="logo">
            <img src={ src as string } alt = { alt }/>
        </div>
    )
}       


export default Logo;