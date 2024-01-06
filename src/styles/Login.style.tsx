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
    & > *{
        flex-basis: 50%;
    }
    & *{
        color: ${props => props.dark ? "white" : "black"} !important;
    }
    & > div:first-child{
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
                background-color: ${props => !props.dark ? "white" : "black"};
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
            }
        }
    }
`

export default LoginStyle