import styled from "styled-components";
import ProfileNav from "../components/ProfileNav";

const ProfileNavStyle = styled(ProfileNav)`
    position: relative;
    & .loading{
        & *{
            color: ${props => props.dark ? "white" : "black"};
        }
    }
    & > div:first-child {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-bottom: .7em;
        & img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    & > .dd {
        position: absolute;
        right: 0;
        display: grid;
        /* width: 70px; */
        padding: 0.3em;
        border-radius: 4px;
        background-color: ${(props) => (props.dark ? "#f2f2f2" : "#121212")};
        & > *{
            padding: .5em;
            margin: .2em 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            color: ${(props) => (props.dark ? "black" : "white")};
            gap: 5px;
            &:not(:last-child){
                border-bottom: .2px solid;
                &:hover{
                    background-color: gray;
                }
            }
            &:last-child{
                border-radius: 4px;
                &:hover{
                    background-color: #84B9A5;
                }
            }
        }
    }
    & > a > .loginBtn{
        padding: .5em;
        border-radius: 4px;
        background-color: transparent !important;
        cursor: pointer;
        border: .4px solid #84B9A5;
        font-size: 1.2rem;
        &:hover{
            background-color: #84B9A5 !important;
        }
    }
    & > a > .signupBtn{
        padding: .5em;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1.2rem;
    }
`;

export default ProfileNavStyle;
