import styled from "styled-components"
import Home from "../pages/Home"

const HomeStyle = styled(Home)`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        max-height: calc(150px * 3);
        overflow-y: scroll;
        & div{
            text-align: center;
            cursor: pointer;
            border-radius: 7px;
            height: 150px;
            & img{
                max-height: 100px;
                width: 100%;
                background-size: cover;
            }
        }
    }
`

export default HomeStyle