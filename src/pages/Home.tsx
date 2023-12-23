import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CategoriesFetchError from '../components/CategoriesFetchError'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useAppSelector } from '../store'
import category9 from '../assets/category9.jpeg'
import category10 from '../assets/category10.jpeg'
import category11 from '../assets/category11.jpeg'
import category12 from '../assets/category12.jpeg'
import category13 from '../assets/category13.jpeg'
import category14 from '../assets/category14.jpeg'
import category15 from '../assets/category15.jpeg'
import category16 from '../assets/category16.jpeg'
import category17 from '../assets/category17.jpeg'
import category18 from '../assets/category18.jpeg'
import category19 from '../assets/category19.jpeg'
import category20 from '../assets/category20.jpeg'
import category21 from '../assets/category21.jpeg'
import category22 from '../assets/category22.jpeg'
import category23 from '../assets/category23.jpeg'
import category24 from '../assets/category24.jpeg'
import category25 from '../assets/category25.jpeg'
import category26 from '../assets/category26.jpeg'
import category27 from '../assets/category27.jpeg'
import category28 from '../assets/category28.jpeg'
import category29 from '../assets/category29.jpeg'
import category30 from '../assets/category30.jpeg'
import category31 from '../assets/category31.jpeg'
import category32 from '../assets/category32.jpeg'
import homeIllustrationL from '../assets/QuizonIllustration.gif'
import homeIllustrationD from '../assets/QuizonIllustrationDark.gif'

interface HomeProps{
    className?: string
    dark: boolean
}

const categoryImages = [category9, category10, category11, category12, category13, category14, category15, category16, category17, category18, category19, category20, category21, category22, category23, category24, category25, category26, category27, category28, category29, category30, category31, category32]

const Home = ({className, dark}: HomeProps) => {

    const categories = useAppSelector((state) => state.categories.categories);
  const error = useAppSelector((state) => state.categories.error);

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
            <section>
                <div>
                    <Typography variant="h4" color="initial" paddingBottom={2}>Bring out the genius in you, Today</Typography>
                    <Typography variant="body1" color="initial">Answer questions from viarities of topics and categories, with difficulty levels that can be changed to suite you</Typography>
                </div>
                <img src={dark ? homeIllustrationD : homeIllustrationL} alt="Quizon Illustration" />
            </section>
                {
                    error == "error" ? (
                        <CategoriesFetchError />
                    ) : (
                        <section className='categories' id='#categories'>
                            {categories?.map(({ id, name}: {id: number, name: string}) => {
                                return (
                                        <Link to={"/category/" + id} key={id}>
                                            <Card variant='elevation' elevation={1}>
                                                {/* <img src={"src/assets/category" + id + ".jpeg"} alt={name} /> */}
                                                <img src={categoryImages[id-9]} alt={name} />
                                                <Typography variant="h5" textAlign={"center"}>{name}</Typography>
                                            </Card>
                                        </Link>
                                )
                            })}
                        </section>
                    )
                }
        </main>
    )
}

export default Home
