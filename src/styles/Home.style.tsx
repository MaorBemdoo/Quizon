import styled from "styled-components"
import Home from "../pages/Home"

const HomeStyle = styled(Home)`
    & section:first-child{
        padding: 0 1em;
        position: relative;
        min-height: 90vh;
        display: flex;
        & div{
            // margin-top: 10%;
            margin: auto 0;
            max-width: 40%;
        }
        & img{
            position: absolute;
            right: 30%;
            bottom: 60%;
            transform: translate(50%, 50%);
            z-index: -5;
            height: 600px;
            width: 600px;
        }
    }
    & section:nth-child(2){
        background-color: #86b8a5;
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
`

export default HomeStyle