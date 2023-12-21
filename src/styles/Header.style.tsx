import styled from "styled-components";
import Header from "../components/Header";

const HeaderStyle = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .2em;
    & img{
        height: 50px;
        width: 40px;
    }
    & > div:first-child{
        display: flex;
        align-items: center;
        justify-content: space-between;
        & a:first-child{
            padding-right: 2rem;
            & > h5{
                opacity: 0;
                pointer-events: none;
                user-select: none;
                cursor: default;
            }
            & > h5:nth-child(even){
                transform: translateY(-25px);
            }
            & > h5:nth-child(odd){
                transform: translateY(25px);
            }
        }
        & a:nth-child(2){
            transform: translateX(-80px);
        }
    }
`

export default HeaderStyle