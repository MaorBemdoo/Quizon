import styled from "styled-components"
import Main from "../components/Main"

const MainStyle = styled(Main)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    height: calc(100vh - 2em);
    & > div:first-child{
        display: grid;
        place-items: center;
        text-align: center;
        flex-basis: 50%;
        padding: .4em;
    }
    & > div:nth-child(2){
        height: 80vh;
        width: 2px;
        background-color: #d4d4d4;
    }
    & > div:last-child{
        flex-basis: 50%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        place-items: center;
        gap: 1em;
        padding: 1em;
        & > div{
            text-align: center;
            padding: .4em;
            cursor: pointer;
        }
    }
`

export default MainStyle