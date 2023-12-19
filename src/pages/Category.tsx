import { useParams } from "react-router-dom"
import CategoryError from "./Error/CategoryError"
import { Helmet } from "react-helmet-async"

const Category = ({className, categories}: any) => {

    const { categoryId }: any = useParams()

    const category = categories === "error" ? "netError" : categories.find(({ id }) => categoryId == id )

    return (
        <main className={className}>
            <Helmet>
                <title>{category.name} - Quizon</title>
            </Helmet>
            {category !== null && category !== undefined ? (
                <h1>{category.name}</h1>
            ) : <CategoryError error={category}/>}
        </main>
    )
}

export default Category