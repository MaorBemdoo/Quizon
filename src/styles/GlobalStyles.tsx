import { createGlobalStyle } from "styled-components"; 

const GlobalStyles = createGlobalStyle`
    *{
        border: 0;
        margin: 0;
        padding: 0;
    }
    html{
        color-scheme: dark;
    }
    body{
        border: 0;
        margin: 0;
        padding: 0;
        min-height: 100vh;
    }
    a{
        text-decoration: none;
    }
`

export default GlobalStyles