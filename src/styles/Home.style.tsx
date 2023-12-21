import styled from "styled-components"
import Home from "../pages/Home"

const HomeStyle = styled(Home)`
    padding: 1em;
    width: calc(100% - 2em);
    & section:first-child{
        position: relative;
        min-height: 90vh;
        display: flex;
        & div{
            margin-top: 10%;
            max-width: 40%;
        }
        & img{
            position: absolute;
            right: 35%;
            bottom: 60%;
            transform: translate(50%, 50%);
            z-index: -5;
            height: 600px;
            width: 600px;
        }
    }
`

export default HomeStyle