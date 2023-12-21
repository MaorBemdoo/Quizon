import { createGlobalStyle } from "styled-components"; 

interface GlobalStylesProps{
    dark: boolean
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
    *{
        border: 0;
        margin: 0;
        padding: 0;
    }
    html{
        color-scheme: ${props => props.dark ? "dark" : "light"};
    }
    body{
        border: 0;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
`

export default GlobalStyles