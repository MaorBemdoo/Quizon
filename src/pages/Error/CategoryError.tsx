import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { fetchCategories } from '../../features/categories/categoriesSlice'
import { useDispatch } from 'react-redux'

const CategoryError = ({className, error}: any) => {

    const dispatch = useDispatch()

    return (
        <div className={className}>
            <Typography variant="h4" color="initial">{error == "netError" ? "Looks like your're offline" : "Looks like there's no quiz here"}</Typography>
            <Button variant="contained" color="primary" onClick={() => dispatch(fetchCategories())}>{error == "netError" ? "Retry" : "See list of categories"}</Button>
        </div>
    )
}

export default CategoryError