import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { useSelector, useDispatch } from 'react-redux'
import { categoriesActions, selectCategories } from '../store/categories-slice'
import { useEffect } from 'react'
import axios from 'axios'

const Home = ({className}: any) => {

    let categories = useSelector(selectCategories)
    const dispatch = useDispatch()

    useEffect(() => {
        const url: string = "https://quiz-app-6b66e-default-rtdb.firebaseio.com/users.json"
        axios.put(url, [{name: "Bemdoo Maor"}])
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    } ,[])

    // useEffect(() => {
    //     dispatch(categoriesActions.fetchCats())
    // }, [])

    return (
        <main className={className}>
            <div>
                <Typography variant="h4" color="initial">Welcome to Quizon</Typography>
                <Typography variant="body1" color="initial">Bring out the genius in you by answering questions from viarities of topics</Typography>
            </div>
            <div></div>
            <div>
                {
                    categories.map(({ id, name}: {id: number, name: string}) => {
                        return (
                            <Card variant='elevation' elevation={1} key={id}>
                                <img src="" alt={name} />
                                <Typography variant="body1">{name}</Typography>
                            </Card>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Home
