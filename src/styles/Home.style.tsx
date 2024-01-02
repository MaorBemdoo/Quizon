import styled from "styled-components"
import Home from "../pages/Home"

const HomeStyle = styled(Home)`
    overflow-x: hidden;
    & section:first-child{
        padding: 1em;
        min-height: 90vh;
        display: flex;
        & div{
            // margin-top: 10%;
            margin: auto 0;
            max-width: 40%;
        }
        & img{
            margin: auto;
            z-index: -5;
            height: 600px;
            width: 600px;
        }
    }
    & section:nth-child(2){
        background-color: #86b8a5;
    }
    .categories{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        padding: 1em;
        gap: 2em;
        & > a > div{
            height: 270px;
        }
        & img{
            width: 100%;
            height: 200px;
            background-position: center;
            background-size: cover;
        }
    }
    .loading{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .4em;
        padding: 1em;
    }
`

export default HomeStyle