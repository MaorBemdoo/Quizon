import styled from "styled-components";
import Header from "../components/Header";

const HeaderStyle = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .2em;
    & img{
        height: 70px;
        width: 60px;
    }
`

export default HeaderStyle