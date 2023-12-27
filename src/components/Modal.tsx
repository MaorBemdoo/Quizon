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
                <Typography variant="body1" color="initial">While waiting just take some time to read some <b>Rules and Important notes</b></Typography>
                <ul>
                    <li>There are 10 questions to be anwsered</li>
                    <li>Your result is going to be displayed at the end of the quiz</li>
                    <li>Don't refresh the page</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal