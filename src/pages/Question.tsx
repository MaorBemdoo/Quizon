import { Helmet } from "react-helmet-async"
import { useAppSelector } from "../store"

interface QuestionProps{
    className?: string
    dark: boolean
}

const Question = ({ className }: QuestionProps) => {

    // const { number, question, incorrectAnswers, correctAnswer } = useAppSelector(state => state.category)
    const number = 1
    const question = "A custom question for test it can br changed but when I'm low on data I use it"
    const incorrectAnswers = ["Hi", "It's", "Bem"]
    const correctAnswer = "random"
    
    let options = [...incorrectAnswers]
    if(incorrectAnswers.length !== 1){
        options.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, `${correctAnswer}: correct`)
    }else{
        options = ["True", "False"]
    }

    return (
        <main className={className}>
            <Helmet>
                <title>Question - Quizon</title>
            </Helmet>
            <div>
                <div>
                    <span>Question {number}</span>
                    <span>/10</span>
                </div>
                <div>{question}</div>
            </div>
            <ul className="options">
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