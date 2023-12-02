import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useEffect } from 'react'
import axios from 'axios'

const CategoriesFetchError = ({ setTempCategories }: any) => {
    
    const reFetchCategories = () => {
            axios.get("https://opentdb.com/api_category.php")
                .then(res => {
                    // setCategories(res.data.trivia_categories)
                    console.log(res.data.trivia_categories)
                    setTempCategories(res.data.trivia_categories)
                })
                .catch((err) => {
                    // setCategories("error")
                    console.log(err);
                    setTempCategories("error")
                })
    }

    return (
        <div className='categories' style={{placeItems: "center", gridTemplateColumns: "repeat(1, 1fr)"}}>
            <Typography variant="h4" color="initial">An Error Occured</Typography>
            <Button variant="contained" color="primary" onClick={reFetchCategories}>Retry</Button>
        </div>
    )
}

export default CategoriesFetchError