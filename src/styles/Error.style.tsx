import styled from "styled-components";
import Error from "../pages/Error/Error";

const ErrorStyle = styled(Error)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    text-align: center;
    min-height: 100vh;
    & > h1{
        font-size: 15rem;
    }
`

export default ErrorStyle