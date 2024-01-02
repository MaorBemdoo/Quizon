import styled from "styled-components";
import Category from "../pages/Category";

const CategoryStyle = styled(Category)`
    display: grid;
    text-align: center;
    .category{
        position: relative;
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
        padding-top: 1em;
        display: flex;
        gap: 1em;
        width: 100%;
        overflow-x: scroll;
        & > div{
            position: relative;
            display: grid;
            place-items: center;
            /* gap: 1em; */
            height: 300px;
            width: 200px;
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
    @media(max-width: 665px){
        .category-body h4{
            font-size: 2rem;
        }
        .difficulty-cards{
            & > div{
                height: 200px !important;
                width: calc(100% - 2em) !important;
                & > h3{
                    font-size: 2rem;
                }
                & > h5{
                    font-size: 1rem;
                }
            }
        }
    }
`

export default CategoryStyle