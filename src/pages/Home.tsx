import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CircularProgress from '@mui/material/CircularProgress'
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
import { SearchOutlined } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@mui/material'

interface HomeProps{
    className?: string
    dark: boolean
}

const categoryImages = [category9, category10, category11, category12, category13, category14, category15, category16, category17, category18, category19, category20, category21, category22, category23, category24, category25, category26, category27, category28, category29, category30, category31, category32]

const Home = ({className, dark}: HomeProps) => {

    const [search, setSearch] = useState("")
    const gridRef = useRef(null);
    const [numOfCols, setNumOfCols] = useState(3);

    const { categories, error, loading } = useAppSelector((state) => state.categories);
    const { accessToken } = useAppSelector((state) => state.auth);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
        const gridContainer = entries[0];
        const width = gridContainer.contentRect.width;

        const newNumOfCols = Math.floor(width / 300);
        setNumOfCols(newNumOfCols > 0 ? newNumOfCols : 1);
        });

        if (gridRef.current){
            resizeObserver.observe(gridRef.current);
        }

        return () => {
            if (gridRef.current) {
            resizeObserver.unobserve(gridRef.current);
        }
        };
    }, [search]);

    useEffect(() => {
        if(error !== "error" && !accessToken){
            const categoriesRef = gridRef?.current as unknown as HTMLDivElement
            const linksRef = categoriesRef?.children as unknown as Array<HTMLLinkElement>
            for (const linkRef of linksRef) {
                linkRef.style.cursor = "default"
                linkRef.addEventListener("click", (e: MouseEvent) => {
                    e.preventDefault()
                })
            }
        }
    }, [error, accessToken])


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
                    loading && 
                    <section className='loading'>
                        <CircularProgress color='inherit' size={100}/>
                        <Typography variant='h5'>Getting list of Quizzes</Typography>
                        <Typography variant='body1'>Just hold on a sec</Typography>
                    </section>
                }
                <section id='categories'>
                    <div style={{position: "relative"}}>
                        <input type="text" className="search" placeholder='Search...' value={search} onChange={(e) => {setSearch(e.target.value); e.target.parentElement?.parentElement?.scrollIntoView(true)}}/>
                        <SearchOutlined sx={{fontSize: "1.8rem", position: "absolute", right: "5px", top: "50%", transform: "translate(-50%, -50%)", cursor: "pointer"}}/>
                    </div>
                    {
                        error == "error" ? (
                            <CategoriesFetchError />
                        ) : (
                            <div className='categories' ref={gridRef} style={{gridTemplateColumns: `repeat(${numOfCols}, 1fr)`}}>
                                {categories.filter(({ name }) => (name.toLowerCase().includes(search.toLowerCase()))).map(({ id, name}: {id: number, name: string}) => {
                                        return (
                                            <Link to={"/category/" + id} className={`${!accessToken ? "disabled" : ""}`} key={id}>
                                                <Card variant='elevation' elevation={1}>
                                                    {/* <img src={"src/assets/category" + id + ".jpeg"} alt={name} /> */}
                                                    <div className="ls">
                                                        <Link to="/login"><Button variant="contained">Login</Button></Link>
                                                        <Link to="/signup"><Button variant="contained">Signup</Button></Link>
                                                    </div>
                                                    <img src={categoryImages[id-9]} alt={name} />
                                                    <Typography variant="h5" textAlign={"center"}>{name}</Typography>
                                                </Card>
                                            </Link>
                                        )
                                })}
                                {categories.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                                    <Typography variant="h4" color="initial" sx={{gridColumn: `span ${numOfCols}`, textAlign: "center"}}>No results found!</Typography>
                                )}
                            </div>
                        )}
                </section>
        </main>
    )
}

export default Home
