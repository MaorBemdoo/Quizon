import { useParams } from "react-router-dom"
import CategoryError from "./Error/CategoryError"
import { Helmet } from "react-helmet-async"

const Category = ({className, categories}: any) => {

    const { categoryId }: any = useParams()

    const category = categories == "error" ? "netError" : (categories.find(({ id }) => categoryId == id ) || '404')

    return (
        <main className={className}>
            {category !== 'netError' && category !== '404' ? (
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
            ) : <CategoryError error={category}/>}
        </main>
    )
}

export default Category