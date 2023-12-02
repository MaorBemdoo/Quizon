import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CategoriesFetchError from '../components/CategoriesFetchError'
import { Link } from 'react-router-dom'

const Home = ({className, categories}: any) => {

    return (
        <main className={className}>
            <div>
                <Typography variant="h4" color="initial">Welcome to Quizon</Typography>
                <Typography variant="body1" color="initial">Bring out the genius in you by answering questions from viarities of topics</Typography>
            </div>
            <div></div>
                {
                    categories == "error" ? (
                        <CategoriesFetchError/>
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
