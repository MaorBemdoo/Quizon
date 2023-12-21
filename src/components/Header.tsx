import { Link } from 'react-router-dom'
import logo from '../../public/logo.png'
import SettingsIcon from '@mui/icons-material/Settings'
import { Typography } from '@mui/material'
interface HeaderProps{
    className?: string
}

const Header = ({ className }: HeaderProps) => {
    return (
        <header className={className}>
            <div>
                <Link to='/' style={{display: "flex", alignItems: "center"}}>
                    <img src={logo} alt="Quizon logo" />
                    <Typography variant="h5" color="initial">U</Typography>
                    <Typography variant="h5" color="initial">I</Typography>
                    <Typography variant="h5" color="initial">Z</Typography>
                    <Typography variant="h5" color="initial">O</Typography>
                    <Typography variant="h5" color="initial">N</Typography>
                </Link>
                <Link to=""><Typography variant='subtitle1' color="initial">Discover</Typography></Link>
            </div>
            <div>
                <SettingsIcon/>
            </div>
        </header>
    )
}

export default Header