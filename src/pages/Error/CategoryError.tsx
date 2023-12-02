import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import axios from 'axios'

const CategoryError = ({className, error, setTempCategories}: any) => {

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
        <div className={className}>
            <Typography variant="h4" color="initial">{error == "netError" ? "Looks like your're offline" : "Looks like there's no quiz here"}</Typography>
            <Button variant="contained" color="primary" onClick={reFetchCategories}>{error == "netError" ? "Retry" : "See list of categories"}</Button>
        </div>
    )
}

export default CategoryError