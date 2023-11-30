import { useParams } from "react-router-dom"

const Category = ({className, categories}: any) => {

    const { categoryId }: any = useParams()

    const category = categories?.find(({id}) => categoryId == id)

    return (
        <main className={className}>
            <h1>{category?.name}</h1>
        </main>
    )
}

export default Category