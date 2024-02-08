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
    img{
        user-select: none;
    }
    html{
        color-scheme: ${props => props.dark ? "dark" : "light"};
        margin: 0;
        padding: 0;
    }
    button{
        background-color: #82B9A4 !important;
        &:hover{
            filter: brightness(1.1);
            background-color: #7dc1a7;
        }
    }
    body{
        border: 0;
        margin: 0;
        padding: 0;
        font-family: Roboto, sans-serif;
    }
    a{
        text-decoration: none;
    }
`

export default GlobalStyles