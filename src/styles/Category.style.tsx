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
`

export default CategoryStyle