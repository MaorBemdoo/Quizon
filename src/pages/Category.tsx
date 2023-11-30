import { useParams } from "react-router-dom"
import CategoryError from "./Error/CategoryError"

const Category = ({className, categories}: any) => {

    const { categoryId }: any = useParams()

    const category = categories == "error" ? null : categories?.find(({ id }) => categoryId == id)

    return (
        <main className={className}>
            {Boolean(category) ? (
                <h1>{category?.name}</h1>
            ) : <CategoryError/>}
        </main>
    )
}

export default Category