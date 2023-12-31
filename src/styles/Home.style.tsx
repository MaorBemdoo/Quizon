import styled from "styled-components"
import Home from "../pages/Home"

const HomeStyle = styled(Home)`
    overflow-x: hidden;
    & section:first-child{
        padding: 1em;
        min-height: 90vh;
        display: flex;
        & div{
            display: grid;
            gap: 1.5rem;
            margin: auto 0;
            max-width: 40%;
            & p{
                font-size: 1.1rem;
            }
        }
        & img{
            margin: auto;
            z-index: -5;
            height: 600px;
            width: 600px;
        }
    }
    #categories{
        display: grid;
        place-items: center;
        padding: 1em;
        background-color: #86b8a5;
        gap: 2em;
    }
    .search{
        /* grid-column: span 2; */
        width: 500px;
        height: 30px;
        border-radius: 7px;
        border: 1px solid;
        outline: none;
        padding: .5em;
        font-size: 1.2rem;
    }
    .categories{
        display: grid;
        /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
        gap: 2em;
        width: 100%;
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
    .loading{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .4em;
        padding: 1em;
    }

    @media (max-width: 963px) {
        & section:first-child{
            & div{
                max-width: 100%;
                text-align: center;
                margin: auto;
            }
            & img{
                display: none;
            }
        }
        #categories > div:first-child{
            width: 100%;
            & .search{
                width: calc(100% - 1em);
            }
        }
        .categories{
            & > a > div{
                width: auto;
            }
        }
    }
`

export default HomeStyle