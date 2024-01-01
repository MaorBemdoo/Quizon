import styled from "styled-components";
import Question from "../pages/Question";

const QuestionStyle = styled(Question)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1em;
    background-color: ${props => props.dark == true ? "aliceblue" : "#121212"};
    border-radius: 7px;
    border: 1px solid;
    box-shadow: 3px 3px 12px ${props => props.dark == true ? "aliceblue" : "#121212"};
    color: ${props => props.dark == true ? "black" : "white"};
    display: flex;
    justify-content: space-between;
    gap: 2em;
    width: 500px;
    height: 300px;
    & > *{
        flex-basis: 50%;
    }
    & > div{
        & div:first-child span:first-child{
            font-size: 2.5rem;
        }
        & div:last-child{
            padding-top: 1em;
        }
    }
`

export default QuestionStyle