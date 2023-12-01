import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const CategoryError = ({className, error}: any) => {
    return (
        <div className={className}>
            <Typography variant="h4" color="initial">{error == "netError" ? "Looks like your're offline" : "Looks like there's no quiz here"}</Typography>
            <Button variant="contained" color="primary">{error == "netError" ? "Retry" : "See list of categories"}</Button>
        </div>
    )
}

export default CategoryError