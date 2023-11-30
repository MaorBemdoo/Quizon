import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const CategoriesFetchError = () => {
    return (
        <div className='categories' style={{placeItems: "center", gridTemplateColumns: "repeat(1, 1fr)"}}>
            <Typography variant="h4" color="initial">An Error Occured</Typography>
            <Button variant="contained" color="primary">Retry</Button>
        </div>
    )
}

export default CategoriesFetchError