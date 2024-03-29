import styled from "styled-components";
import Signup from "../pages/Signup";

const SignupStyle = styled(Signup)`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
    font-family: 'Noto Sans', sans-serif;
    border-radius: 10px;
    height: 100vh;
    width: 100%;
    display: flex;
    /* & > *{
        flex-basis: 50%;
    } */
    & *{
        color: ${props => props.dark ? "white" : "black"};
    }
    & > div:first-child{
        position: fixed;
        left: 0;
        height: 100vh;
        width: 30%;
        clip-path: polygon(0 0, 71% 0, 100% 100%, 0% 100%);
        &  img{
            object-fit: cover;
            object-position: top;
            width: 100%;
            height: 100%;
        }
    }
    .signup{
        text-align: center;
        padding: 2em;
        max-width: 450px;
        margin-left: calc(30% + (70% - 450px)/2);
        &  *{
            &::before,
            &::after{
                border-color: ${props => props.dark ? "white" : "black"} !important;
            }
        }
        & > button{
            width: 100%;
            padding: .5em;
            border-radius: 50px;
            cursor: pointer;
        }
        .or{
            padding: 2em 0;
            position: relative;
            & hr{
                width: 100%;
                height: .6px;
                background-color: ${props => props.dark ? "white" : "black"};
            }
            & p{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                padding: 0 1em;
                background-color: ${props => !props.dark ? "white" : "#121212"};
            }
        }
        & .google-signup{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            background-color: #f9f3f3 !important;
            & b{
                color: black !important;
            }
            &:hover{
                background-color: #ded8d8 !important;
            }
        }
        & > *:last-child{
            margin-top: 2em;
            & a{
                font-weight: 500;
                position: relative;
                overflow: hidden;
                &:hover{
                    &::after{
                        width: 100%;
                        transition: all 1s ease;
                    }
                }
                &::after{
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 1px;
                    background-color: ${props => props.dark ? "white" : "black"};
                }
            }
        }
    }
    @media(max-width: 700px){
        & > div:first-child{
            display: none;
            flex-basis: 0;
        }
        .signup{
            width: calc(100% - 2em) !important;
            flex-basis: 100%;
            margin: 0 auto;
            & > img:first-child{
                width: 50px;
                height: 80px;
            }
        }
    }
`

export default SignupStyle