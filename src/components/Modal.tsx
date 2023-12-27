
interface ModalProps{
    className?: string
}

const Modal = ({ className }: ModalProps) => {
    return (
        <div className={className}>Modal</div>
    )
}

export default Modal