import { Outlet } from "react-router-dom"
import HeaderStyle from "../../styles/Header.style"

const SharedLayout = () => {
    return (
        <>
            <HeaderStyle/>
            <Outlet/>
        </>
    )
}

export default SharedLayout