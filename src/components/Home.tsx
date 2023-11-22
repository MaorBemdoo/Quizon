import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

const Home = ({className}: any) => {
    return (
        <main className={className}>
            <div>
                <Typography variant="h4" color="initial">Welcome to Quizon</Typography>
                <Typography variant="body1" color="initial">Bring out the genius in you by answering questions from viarities of topics</Typography>
            </div>
            <div></div>
            <div>
                <Card variant='elevation' elevation={1}>
                    <img src="" alt="" />
                    <Typography variant="body1">Lorem Ipson</Typography>
                </Card>
                <Card variant='elevation' elevation={1}>
                    <img src="" alt="" />
                    <Typography variant="body1">Lorem Ipson</Typography>
                </Card>
                <Card variant='elevation' elevation={1}>
                    <img src="" alt="" />
                    <Typography variant="body1">Lorem Ipson</Typography>
                </Card>
                <Card variant='elevation' elevation={1}>
                    <img src="" alt="" />
                    <Typography variant="body1">Lorem Ipson</Typography>
                </Card>
                <Card variant='elevation' elevation={1}>
                    <img src="" alt="" />
                    <Typography variant="body1">Lorem Ipson</Typography>
                </Card>
                <Card variant='elevation' elevation={1}>
                    <img src="" alt="" />
                    <Typography variant="body1">Lorem Ipson</Typography>
                </Card>
                <Card variant='elevation' elevation={1}>
                    <img src="" alt="" />
                    <Typography variant="body1">Lorem Ipson</Typography>
                </Card>
                <Card variant='elevation' elevation={1}>
                    <img src="" alt="" />
                    <Typography variant="body1">Lorem Ipson</Typography>
                </Card>
            </div>
        </main>
    )
}

export default Home
