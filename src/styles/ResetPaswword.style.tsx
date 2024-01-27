import styled from "styled-components";
import ResetPassword from "../pages/ResetPassword";

const ResetPasswordStyle = styled(ResetPassword)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 2em;
    background-color: ${props => props.dark ? "white" : "#121212"} !important;
    & *{
        color: ${props => props.dark ? "black" : "white"};
    }
    &.send-link{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        & > div:first-child svg{
            position: absolute;
            top: 10px;
            left: 10px;
            cursor: pointer;
            font-size: 2rem;
        }
        & input{
            width: calc(100% - 4em);
            height: 30px;
            padding: .3em;
            border-radius: 5px;
            font-size: 1.2rem;
            outline: none;
            border: .5px solid;
            color: initial;
        }
    }
    &.link-sent{
        overflow: visible;
        text-align: center;
        & > svg{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            fill: #84B9A5 !important;
        }
        & > div{
            padding-top: 1em;
            display: inline-flex;
            gap: 1em;
            margin: auto;
            & button:first-child{
                border: .5px solid #84B9A5;
                background-color: transparent !important;
                &:hover{
                    background-color: #84B9A5 !important;
                }
            }
        }
    }
`

export default ResetPasswordStyle