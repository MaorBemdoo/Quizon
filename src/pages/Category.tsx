import { useParams } from "react-router-dom"
import CategoryError from "./Error/CategoryError"

const Category = ({className, categories, setTempCategories}: any) => {

    const { categoryId }: any = useParams()

    const category = categories === "error" ? "netError" : categories?.find(({ id }) => categoryId == id)

    return (
        <main className={className}>
            {category !== null && category !== "netError" ? (
                <h1>{category?.name}</h1>
            ) : <CategoryError error={category}/>}
        </main>
    )
}

export default Category