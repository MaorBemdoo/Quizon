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
    gap: 2em;
    & > img{
        animation: imgLoading 700ms infinite ease-out;
    }
    & > div{
        & p, h5{
            text-align: center;
        }
        & ul{
            padding: 1em 0;
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
`

export default ModalStyle