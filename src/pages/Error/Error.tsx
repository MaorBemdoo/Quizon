import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

interface ErrorProps{
    className?: string
}

const Error = ({className}: ErrorProps) => {
    return (
        <main className={className}>
            <Helmet>
                <title>404 - Quizon</title>
            </Helmet>
            <Typography variant="h1" color="initial">404</Typography>
            <Typography variant="h4" color="initial">Looks like you missed your way</Typography>
            <Link to='/'><Button variant="contained" color="primary">Back to Home</Button></Link>
        </main>
    )
}

export default Error