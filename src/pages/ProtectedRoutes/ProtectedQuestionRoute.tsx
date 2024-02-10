import { ReactNode } from "react"
import { useAppSelector } from "../../store"
import { Navigate, useParams } from "react-router-dom"

const ProtectedQuestionRoute = ({ children }: {children: ReactNode}) => {

    const { success } = useAppSelector(state => state.category)
    const { categoryId } = useParams()

    if(!success){
        return <Navigate to={`/category/${categoryId}`}/>
    }
    return children
}

export default ProtectedQuestionRoute