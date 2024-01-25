import styled from "styled-components";
import Header from "../components/Header";

const HeaderStyle = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    & img{
        height: 50px;
        width: 40px;
    }
    & > div:first-child{
        display: flex;
        align-items: center;
        justify-content: space-between;
        & a:first-child{
            padding-right: 2rem;
            cursor: default;
            & img{
                cursor: pointer;
            }
            & > h5{
                opacity: 0;
                pointer-events: none;
                user-select: none;
            }
            & > h5:nth-child(even){
                transform: translateY(-25px);
            }
            & > h5:nth-child(odd){
                transform: translateY(25px);
            }
        }
        & > #a2{
            transform: translateX(-80px);
        }

        & a:first-child img:hover ~ h5{
            opacity: 1;
            pointer-events: all;
            user-select: all;
            cursor: pointer;
            transform: translateY(0);
            transition: 250ms all 250ms ease-in;
        }
    }
    & .lastNav{
        display: flex;
        align-items: center;
        gap: 1em;
        & > svg{
            cursor: pointer;
            border-radius: 50%;
            padding: .3em;
            &:hover{
                background-color: gray;
            }
        }
    }
    & .menu{
        display: none;
    }

    @media(max-width: 480px){
        & .menu{
            display: block;
        }
        & .lastNav > *:not(.menu){
            display: none;
        }
    }
`

export default HeaderStyle