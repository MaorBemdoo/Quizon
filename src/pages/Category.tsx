import { useParams } from "react-router-dom"

const Category = ({className}: any) => {

    const { categoryId }: any = useParams()

    return (
        <main className={className}>
            {categoryId}
        </main>
    )
}

export default Category