import Typography from '@mui/material/Typography'
import logo from '../../public/logo.png'




interface ModalProps{
    className?: string
}

const Modal = ({ className }: ModalProps) => {
    return (
        <div className={className}>
            <img src={logo} alt="Quizon logo" />
            <Typography variant="h4" color="initial">Setting up your quiz</Typography>
            <div>
                <Typography variant="body1" color="initial">While waiting just take some time to read some <br/><b><big>Rules and Tips</big></b></Typography>
                <ul>
                    <li><Typography variant="subtitle1" color="initial">There are 10 questions to be anwsered</Typography></li>
                    <li><Typography variant="subtitle1" color="initial">Your result is going to be displayed at the end of the quiz</Typography></li>
                    <li><Typography variant="subtitle1" color="initial">Do not refresh the page during the quiz</Typography></li>
                    <li><Typography variant="subtitle1" color="initial">There are no timer so take your time</Typography></li>
                </ul>
                <Typography variant="h5" color="initial">Good Luck👋</Typography>
            </div>
        </div>
    )
}

export default Modal