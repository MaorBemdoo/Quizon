import styled from "styled-components"
import Home from "../pages/Home"

const HomeStyle = styled(Home)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    height: calc(100vh - 2em);
    & > div:first-child{
        display: grid;
        place-items: center;
        text-align: center;
        flex-basis: 49%;
        padding: .4em;
    }
    & > div:nth-child(2){
        height: 80vh;
        max-width: .1px;
        background-color: #7c7c7c;
        flex-basis: 2%;
    }
    & > .categories{
        flex-basis: 49%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1em;
        padding: 1em;
        max-height: 300px;
        overflow-y: scroll;
        & div{
            text-align: center;
            padding: .4em;
            cursor: pointer;
            height: calc(100% - .8em);
        }
    }
`

export default HomeStyle