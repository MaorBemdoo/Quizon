import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { fetchCategories } from '../features/categories/categoriesSlice'
import { useAppDispatch } from '../store'

const CategoriesFetchError = () => {

    const dispatch = useAppDispatch()

    return (
        <div className='categories' style={{placeItems: "center", gridTemplateColumns: "repeat(1, 1fr)"}}>
            <Typography variant="h4" color="initial">An Error Occured</Typography>
            <Button variant="contained" color="primary" onClick={() => dispatch(fetchCategories())}>Retry</Button>
        </div>
    )
}

export default CategoriesFetchError