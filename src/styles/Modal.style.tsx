import styled from "styled-components";
import Modal from "../components/Modal";

const backgroundColor = () => {
    const dark = localStorage.getItem("color-scheme")
    return dark ? (JSON.parse(dark) ? "#121212" : 'white') : {}
}

const ModalStyle = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-items: center;
    padding: 2em;
    background-color: ${backgroundColor};
    border-radius: 7px;
    gap: 2em;
    text-align: center;
    & > img{
        animation: imgLoading 700ms infinite ease-out;
    }
    & > div{
        & p, h5{
            text-align: center;
        }
        & ul{
            padding: 1em 0;
            text-align: start;
            & li{
                padding: .1em 0;
            }
        }
    }

    @keyframes imgLoading {
        to{
            rotate: 360deg;
        }
    }
    @media (max-width: 700px){
        &{
            gap: 1em;
        }
        & > img{
            height: 100px;
            width: 50px;
        }
        & ul{
            padding: .5em 0;
        }
    }
`

export default ModalStyle