import { createGlobalStyle } from "styled-components"; 

const GlobalStyles = createGlobalStyle`
    *{
        border: 0;
        margin: 0;
        padding: 0;
    }
    html{
        background-color: #fff;
    }
    body{
        border: 0;
        margin: 0;
        padding: 0;
        min-height: 100vh;
    }
`

export default GlobalStyles