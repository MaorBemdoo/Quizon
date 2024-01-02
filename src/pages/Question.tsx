import { Helmet } from "react-helmet-async"
import { useAppSelector } from "../store"
import { useDispatch } from "react-redux"
import { nextQuestion, setToDefault } from "../features/category/categorySlice"
import Button from '@mui/material/Button'
import { Link } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
interface QuestionProps{
    className?: string
    dark: boolean
}

const Question = ({ className }: QuestionProps) => {

    const dispatch = useDispatch()

    const [maxText, setMaxText] = useState(0)
    const { number, question, incorrectAnswers, correctAnswer, score, type, id } = useAppSelector(state => state.category)
    // const number = useAppSelector(state => state.category.number)
    // const score = useAppSelector(state => state.category.score)
    // const type = useAppSelector(state => state.category.type)
    // const question = "A custom question for test it can br changed but when I'm low on data I use it"
    // const incorrectAnswers = ["Hi", "It's", "Bem"]
    // const correctAnswer = "random"

    const options = useMemo(() => {
        if (incorrectAnswers.length !== 1) {
            const newOptions = [...incorrectAnswers];
            newOptions.splice(
            Math.floor(Math.random() * (incorrectAnswers.length + 1)),
            0,
            correctAnswer
            );
            return newOptions;
        } else {
            return ["True", "False"];
        }
    }, [correctAnswer, incorrectAnswers]);
    
    useEffect(() => {
        const lengths = options.map(text => text.length);
        const max = Math.max(...lengths);
        setMaxText(max);
    }, [options]);
    
    // let options = useMemo(() => [...incorrectAnswers], [incorrectAnswers])
    // if(incorrectAnswers.length !== 1){
    //     options.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, correctAnswer)
    // }else{
    //     options = ["True", "False"]
    // }

    // useEffect(() => {
    //     const lengths = options.map(text => text.length);
    //     const max = Math.max(...lengths);
    //     setMaxText(max);
    // }, [options]);

    const optFontSize = () => {
        if(maxText <= 15){
            return '1.4rem'
        } else if(maxText > 15 && maxText <= 30){
            return '1.2rem'
        }
        else if(maxText > 30){
            return '1rem'
        }
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
                            <span><i>Question {number}</i></span>
                            <span>/10</span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: question }}></div>
                    </div>
                    <ul className="options" style={{fontSize: optFontSize()}}>
                        {
                            options.map((opt, idx) => {
                                return <li onClick={() => dispatch(nextQuestion(opt))} dangerouslySetInnerHTML={{ __html: opt }} key={idx}></li>
                            })
                        }
                    </ul>
                </main> ): 
                <main className={className} id="#result">
                    <Helmet>
                        <title>Result - Quizon</title>
                    </Helmet>
                        <div id="score">
                            <div>You scored {score} out of 10</div>
                            <div className="btns">
                                <Button variant="contained">Retake Quiz</Button>
                                <Link to={`/category/${id}`} onClick={() => dispatch(setToDefault())}><Button variant="contained" color="success" id="bTH">Quiz Home</Button></Link>
                            </div>
                        </div>
                </main>
            }
        </>
    )
}

export default Question