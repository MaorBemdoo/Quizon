import { Helmet } from "react-helmet-async"
import { useAppSelector } from "../store"
import { useDispatch } from "react-redux"
import { nextQuestion } from "../features/category/categorySlice"

interface QuestionProps{
    className?: string
    dark: boolean
}

const Question = ({ className }: QuestionProps) => {

    const dispatch = useDispatch()

    const { number, question, incorrectAnswers, correctAnswer, score, type } = useAppSelector(state => state.category)
    // const number = useAppSelector(state => state.category.number)
    // const score = useAppSelector(state => state.category.score)
    // const type = useAppSelector(state => state.category.type)
    // const question = "A custom question for test it can br changed but when I'm low on data I use it"
    // const incorrectAnswers = ["Hi", "It's", "Bem"]
    // const correctAnswer = "random"
    
    let options = [...incorrectAnswers]
    if(incorrectAnswers.length !== 1){
        options.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, `${correctAnswer}: correct`)
    }else{
        options = ["True", "False"]
    }

    return (
        <>
            {
                type == "question" ? (
                <main className={className} id="question">
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
                                return <li onClick={() => dispatch(nextQuestion(opt))} key={idx}>{opt}</li>
                            })
                        }
                    </ul>
                </main> ): 
                <main className={className} id="#result">
                    <Helmet>
                        <title>Result - Quizon</title>
                    </Helmet>
                        <div id="score">You scored {score} out of 10</div>
                </main>
            }
        </>
    )
}

export default Question