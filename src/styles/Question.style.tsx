import styled from "styled-components";
import Question from "../pages/Question";

const QuestionStyle = styled(Question)`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
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
    /* gap: 2em; */
    width: 550px;
    height: 220px;
    font-family: 'Open Sans', sans-serif;
    & > *{
        flex-basis: 50%;
    }
    & > div{
        max-width: 200px;
        & div:first-child span:first-child{
            font-size: 2rem;
        }
        & div:last-child{
            padding-top: 1em;
            user-select: none;
        }
    }
    .options{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        user-select: none;
        & li{
            list-style: none;
            padding: .3em;
            box-shadow: 0 0 2px 1px #7dc1a7;
            border-radius: 4px;
            cursor: pointer;
            flex-wrap: wrap;
            /* font-size: 1.5rem; */
            &:hover,&:focus{
                background-color: #7dc1a7;
            }
        }
    }
    #score{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 2.3rem;
        flex-basis: 100%;
        max-width: 100%;
        & .btns{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            & > a {
                height: 60px;
            }
            & > button{
                background-color: #121212 !important;
                color: white;
            }
        }
    }
    @media(max-width: 600px){
        &{
            flex-direction: column;
            width: auto;
            height: auto;
            gap: 1em;
        }
        & > div{
            align-self: start;
            text-align: center;
            max-width: 100%;
        }
        #score{
            & .btns{
                flex-direction: column;
                gap: initial;
            }
        }
    }
`

export default QuestionStyle