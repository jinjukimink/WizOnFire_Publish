import styled from "styled-components";
import colors from "../../../assets/Colors";

export const PageLocationContainer = styled.div`
    display: flex;
    justify-content: center;
` 

export const PageLocationBox = styled.div`
    max-width: 1100px;
    width: 100%;
    margin-top: 75px;
    height: 33px;
  /* border: 1px solid #333; */
` 

export const PageLocationInfo = styled.div`
    width: 100%;
    border-bottom : 1.5px solid ${colors.redPrimary};
    text-align: right;
    z-index: 20;
    padding-bottom: 15px;
    color: ${colors.ashGray};

    span{
        padding-right: 10px;

        &:last-child{
        color: ${colors.redPrimary};
        }
    }
`