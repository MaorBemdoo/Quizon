
interface HeaderProps{
    className?: string
}

const Header = ({ className }: HeaderProps) => {
    return (
        <header className={className}>Header</header>
    )
}

export default Header