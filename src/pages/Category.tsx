import { useParams } from "react-router-dom"
import CategoryError from "./Error/CategoryError"
import { Helmet } from "react-helmet-async"
import { useAppSelector } from "../store"

interface CategoryProps{
    className?: string
    // categories: {id: number, name: string}[]
}

const Category = ({className}: CategoryProps) => {

    const { categoryId } = useParams()
    const categories = useAppSelector((state) => state.categories.categories)
    let error = useAppSelector((state) => state.categories.error)

    if(error == "error"){
        error = "netError"
    }

    const category = error == "netError" ? {} : categories?.find(({ id }) => Number(categoryId) == id )
    if(typeof category === 'undefined'){
        error = "404"
    }

    return (
        <main className={className}>
            {error === null && typeof category !== 'undefined' ? (
                <>
                    <Helmet>
                        <title>{`${category.name} - Quizon`}</title>
                        <meta name="title" content={`${category.name} - Quizon`} />
                        {/* <meta name="description" content="" /> */}

                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://metatags.io/" />
                        <meta property="og:title" content={`${category.name} - Quizon`} />
                        {/* <meta property="og:description" content="" /> */}
                        <meta property="og:image" content={`src/assets/category${category.id}`} />

                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:url" content="https://metatags.io/" />
                        <meta property="twitter:title" content={`${category.name} - Quizon`} />
                        {/* <meta property="twitter:description" content="" /> */}
                        <meta property="twitter:image" content={`src/assets/category${category.id}`} />
                    </Helmet>
                    <h1>{category.name}</h1>
                </>
            ) : <CategoryError error={error}/>}
        </main>
    )
}

export default Category