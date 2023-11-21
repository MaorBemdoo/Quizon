import { createGlobalStyle } from "styled-components"; 

const GlobalStyles = createGlobalStyle`
    *{
        border: 0;
        margin: 0;
        padding: 0;
    }
    body{
        border: 0;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-color: #ffffff;
        display: grid;
        place-items: center;
    }
`

export default GlobalStyles