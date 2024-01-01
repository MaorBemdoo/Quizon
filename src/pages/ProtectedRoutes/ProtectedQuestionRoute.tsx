import { ReactNode } from "react"
// import { useAppSelector } from "../../store"
// import { Navigate } from "react-router-dom"

const ProtectedQuestionRoute = ({ children }: {children: ReactNode}) => {
    // const { success } = useAppSelector(state => state.category)
    // if(!success){
    //     // return <Navigate to={"/"}/>
    //     return
    // }
    return children
}

export default ProtectedQuestionRoute