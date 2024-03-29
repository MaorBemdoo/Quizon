import styled from "styled-components";
import Login from "../pages/Login";

const LoginStyle = styled(Login)`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
    font-family: 'Noto Sans', sans-serif;
    border-radius: 10px;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    z-index: 3;
    /* & > *{
        flex-basis: 50%;
    } */
    & *{
        color: ${props => props.dark ? "white" : "black"};
    }
    & > div:first-child{
        flex-basis: 30%;
        clip-path: polygon(0 0, 71% 0, 100% 100%, 0% 100%);
        &  img{
            object-fit: cover;
            object-position: top;
            width: 100%;
            height: 100%;
        }
    }
    .login{
        position: relative;
        text-align: center;
        padding: 2em;
        width: 450px;
        margin: 0 auto;
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
        .forgot-pwd{
            position: relative;
            left: 100%;
            transform: translateX(-100%);
            opacity: .4;
            text-align: end; 
            cursor: pointer;
            padding: 1em 0;
            overflow: hidden;
            width: fit-content;
            &:hover{
                &::after{
                    width: 115px;
                    transition: all 1s ease;
                }
            }
            &::after{
                content: "";
                position: absolute;
                left: calc(100% - 115px);
                bottom: 1em;
                width: 0;
                height: 1px;
                background-color: ${props => props.dark ? "white" : "black"};
            }
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
        & .google-login{
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
            position: absolute;
            bottom: 2em;
            left: 50%;
            transform: translate(-50%, -50%);
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
        .login{
            width: calc(100% - 2em) !important;
            flex-basis: 100%;
            & > img:first-child{
                width: 50px;
                height: 80px;
            }
        }
    }
`

export default LoginStyle