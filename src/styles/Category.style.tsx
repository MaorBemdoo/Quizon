import styled from "styled-components";
import Category from "../pages/Category";

const CategoryStyle = styled(Category)`
    display: grid;
    .category{
        position: relative;
        width: 700px;
        /* height: ${document.scrollingElement?.clientHeight}px; */
        border-radius: 7px;
        border: 1px solid;
        margin: 0 auto;
        margin-top: 1em;
    }
    .category-header{
        border-bottom: .1px solid;
        & > a{
            position: absolute;
            color: initial;
            opacity: 1;

        }
        & > a > svg{
            height: 40px;
            width: 40px;
        }
        & > h4{
            text-align: center;
        }
        & > img{
            width: 100%;
            height: 200px;
            background-position: center;
            background-size: cover;
            /* &:hover + a{
                opacity: 1;
                transition: opacity 500ms ease-out;
            } */
        }
    }
    .category-body{
        padding: 1em;
        display: grid;
        place-items: center;
    .difficulty-cards{
        padding-top: 2em;
        display: flex;
        gap: 1em;
        width: 100%;
        & > div{
            position: relative;
            display: grid;
            place-items: center;
            /* gap: 1em; */
            height: 300px;
            width: 100%;
            background-color: #7dc1a7;
            border-radius: 7px;
            cursor: default;
            &:hover{
                filter: brightness(1.1);
            }
            & svg{
                position: absolute;
                top: 0;
                right: 0;
                font-size: 2rem;
            }
        }
    }
    }
    .category-footer{
        display: grid;
        place-items: center;
        border-top: .1px solid;
        padding: 1em;
    }
`

export default CategoryStyle