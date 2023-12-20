import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CategoriesFetchError from '../components/CategoriesFetchError'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

interface HomeProps{
    className?: string
    categories: {id: number, name: string}[] | string
}

const Home = ({className, categories}: HomeProps) => {

    return (
        <main className={className}>
            <Helmet>
                <title>Quizon - Overview</title>
                <meta name="title" content="Quizon - Overview" />
                <meta name="description" content="Bring out the genius in you with Quizon" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="Quizon - Overview" />
                <meta property="og:description" content="Bring out the genius in you with Quizon" />
                <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="Quizon - Overview" />
                <meta property="twitter:description" content="Bring out the genius in you with Quizon" />
                <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
            </Helmet>
            <div>
                <Typography variant="h4" color="initial">Welcome to Quizon</Typography>
                <Typography variant="body1" color="initial">Bring out the genius in you by answering questions from viarities of topics</Typography>
            </div>
            <div></div>
                {
                    typeof categories === 'string' ? (
                        <CategoriesFetchError />
                    ) : (
                        <div className='categories'>
                            {categories?.map(({ id, name}: {id: number, name: string}) => {
                                return (
                                        <Link to={"/category/" + id} key={id}>
                                            <Card variant='elevation' elevation={1}>
                                                <img src={"src/assets/category" + id + ".jpeg"} alt={name} />
                                                <Typography variant="body1">{name}</Typography>
                                            </Card>
                                        </Link>
                                )
                            })}
                        </div>
                    )
                }
        </main>
    )
}

export default Home
