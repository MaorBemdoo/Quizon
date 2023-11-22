import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


const Error = ({className}: any) => {
    return (
        <main className={className}>
            <Typography variant="h1" color="initial">404</Typography>
            <Typography variant="h4" color="initial">Looks like you missed your way</Typography>
            <Button variant="contained" color="primary">Back to Home</Button>
        </main>
    )
}

export default Error