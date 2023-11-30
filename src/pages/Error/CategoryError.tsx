import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const CategoryError = () => {
    return (
        <div>
            <Typography variant="h4" color="initial">Looks like there's no quiz here</Typography>
            <Button variant="contained" color="primary">See list of categories</Button>
        </div>
    )
}

export default CategoryError