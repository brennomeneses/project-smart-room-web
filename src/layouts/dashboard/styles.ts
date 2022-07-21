import styled from "styled-components";

export const ContentPages = styled.div`
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #424242;
        border-radius: 25px;
    }
    margin-top: 64px;
    padding: 25px;
    height: 70vh;
    background: #141414;
    overflow-y: scroll;
`;

export const Logo = styled.div`
    float: left;
    font-size: 20px;
    height: 31px;
    margin: 16px 24px 16px 16px;
`

export const FootButton = styled.div({
    float: "left",
    bottom: 2,
    padding: 10
})