import { Outlet } from "react-router-dom"
import HeaderStyle from "../../styles/Header.style"

const SharedLayout = ({ dark, isDark }: {dark: boolean, isDark: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <>
            <HeaderStyle dark={dark} isDark={isDark}/>
            <Outlet/>
        </>
    )
}

export default SharedLayout