import { Helmet } from "react-helmet-async"
import { useAppSelector } from "../store"

interface QuestionProps{
    className?: string
}

const Question = ({ className }: QuestionProps) => {

    const { number, question, incorrectAnswers, correctAnswer } = useAppSelector(state => state.category)
    const options = [...incorrectAnswers]
    if(incorrectAnswers.length !== 1){
        options.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, `${correctAnswer}: correct`)
    }

    return (
        <main className={className}>
            <Helmet>
                <title>Question - Quizon</title>
            </Helmet>
            <div>
                <p><h1>Question {number}</h1>/10</p>
                <div>{question}</div>
            </div>
            <ul>
                {
                    options.map((opt, idx) => {
                        return <li key={idx}>{opt}</li>
                    })
                }
            </ul>
        </main>
    )
}

export default Question