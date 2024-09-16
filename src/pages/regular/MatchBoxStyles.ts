import styled from "styled-components";
import colors from "../../assets/Colors";

export const ScheduleBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 100%;
    max-width: 1100px;
    margin-left: auto; // 수평 가운데 정렬
    margin-right: auto;
`


export const GameBox = styled.div<{ width?: string; height?: string; boxShadow?: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #d2d2d2;
    width: ${({ width }) => width || '310px'};
    height: ${({ height }) => height || '170px'};
    padding: 20px;
    background-color: #fff;
    box-shadow: ${({ boxShadow }) => boxShadow || 0};
`;

export const DateContainer = styled.div<{backgroundColor?: string}>`
    background-color: ${({backgroundColor}) => backgroundColor || colors.darkGray};
    color: white;
    width: 80px;
    height: 11px;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TeamsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const TeamLogo = styled.img`
    width: 75px; 
    height: 75px;
    margin-left: 12px; // 수평 가운데 정렬
    margin-right: 12px;
`;

export const TeamInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        margin-bottom: 10px;
        font-size: 14px;
        color: ${colors.ashGray};
        &:first-of-type {
            color: ${colors.black};
        }
    }
`;
export const Score = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 15px;
    // span{
    //     margin-top:10px;
    //     font-size: 17px;
    //     font-weight: normal;
    //     color: ${colors.darkGray};
    //     &:first-of-type {
    //         color: ${colors.redTertiary};
    //     }
    //     }
`;

export const MatchResult = styled.div`
    color: ${colors.redTertiary};
    margin-bottom: 9px;
`;

export const ContentBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    span{
        font-size:14px;
        margin-bottom:12px;
    }
`
