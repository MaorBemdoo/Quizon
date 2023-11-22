import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = ({className}: any) => {

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php')
        .then(res => {
            console.log(res.data.trivia_categories);
            setCategories(res.data.trivia_categories)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <main className={className}>
            <div>
                <Typography variant="h4" color="initial">Welcome to Quizon</Typography>
                <Typography variant="body1" color="initial">Bring out the genius in you by answering questions from viarities of topics</Typography>
            </div>
            <div></div>
            <div>
                {
                    categories?.map(({ id, name }) => {
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
