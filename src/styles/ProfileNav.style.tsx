import styled from "styled-components";
import ProfileNav from "../components/ProfileNav";

const ProfileNavStyle = styled(ProfileNav)`
    position: relative;
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
        /* width: 70px; */
        padding: 0.3em;
        border-radius: 4px;
        background-color: ${(props) => (props.dark ? "#f2f2f2" : "#121212")};
        color: ${(props) => (props.dark ? "black" : "white")};
        & > *{
            padding: .5em;
            cursor: pointer;
            &:first-child{
                border-bottom: .2px solid;
            }
            &:last-child{
                display: flex;
                align-items: center;
                border-radius: 4px;
                gap: 5px;
                &:hover{
                    background-color: #84B9A5;
                }
            }
        }
    }
`;

export default ProfileNavStyle;
