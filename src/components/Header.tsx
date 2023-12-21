import { Link } from 'react-router-dom'
import logo from '../../public/logo.png'
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material'
import { MouseEventHandler} from 'react'
interface HeaderProps{
    className?: string
    dark: boolean
    isDark: React.Dispatch<React.SetStateAction<boolean>>
}

const aMouseEnterEven: MouseEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLElement;
    if(!target.parentElement?.nextElementSibling) return;
    if(target.parentElement?.nextElementSibling instanceof HTMLElement){
        target.parentElement.nextElementSibling.style.transform = "translateX(0)"
        target.parentElement.nextElementSibling.style.transition = "all 250ms ease-in"
    }
}

const aMouseLeaveEven: MouseEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLElement;
    if(!target.parentElement?.nextElementSibling) return;
    if(target.parentElement?.nextElementSibling instanceof HTMLElement){
        target.parentElement.nextElementSibling.style.transform = "translateX(-80px)"
    }
}


const Header = ({ className, dark, isDark }: HeaderProps) => {

    return (
        <header className={className}>
            <div>
                <Link to='/' style={{display: "flex", alignItems: "center"}} id='a1'>
                    <img src={logo} alt="Quizon logo" onMouseEnter={aMouseEnterEven} onMouseLeave={aMouseLeaveEven}/>
                    <Typography variant="h5" color="initial">U</Typography>
                    <Typography variant="h5" color="initial">I</Typography>
                    <Typography variant="h5" color="initial">Z</Typography>
                    <Typography variant="h5" color="initial">O</Typography>
                    <Typography variant="h5" color="initial">N</Typography>
                </Link>
                <Link to="" id='a2'><Typography variant='subtitle1' color="initial">Discover</Typography></Link>
            </div>
            <div>
                <Switch aria-label='Switch-demo' checked={dark} onChange={() => isDark(!dark)}/>
            </div>
        </header>
    )
}

export default Header