import styled from "styled-components"
import colors from "../../../assets/Colors"

export const HighLightContainer = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${colors.black};
    margin-top: 100px;
`;

export const HighLightNews = styled.div`
    width: 65%;
    font-size: 14px;
    color: ${colors.redGradient};
    text-align: left; 
`;

export const HighLightTitle = styled.span`
    font-family: PartialSansKR;
    font-size : 60px;
`

export const HighLightLine = styled.div`
    width: 100%;
    border-bottom: 5px solid ${colors.redGradient};
    display: flex;
    margin: 30px 0 70px 0;
    caret-color: transparent;
`