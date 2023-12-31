import { useAppSelector } from "../store"

interface QuestionProps{
    className?: string
}

const Question = ({ className }: QuestionProps) => {

    const { question, incorrectAnswers, correctAnswer } = useAppSelector(state => state.category)
    const options = [...incorrectAnswers]
    options.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, `${correctAnswer}: correct`)

    return (
        <main className={className}>
            <p>{question}</p>
            {
                options.map((opt, idx) => {
                    return <p key={idx}>{opt}</p>
                })
            }
        </main>
    )
}

export default Question