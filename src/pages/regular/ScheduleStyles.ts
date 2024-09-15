import styled from "styled-components";
import colors from "../../assets/Colors";

export const ScheduleBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
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
    width: ${({ width }) => width || '350px'};
    height: ${({ height }) => height || '200px'};
    padding: 20px;
    background-color: #fff;
    box-shadow: ${({ boxShadow }) => boxShadow || 0};
`;

export const DateContainer = styled.div<{backgroundColor?: string}>`
    background-color: ${({backgroundColor}) => backgroundColor || colors.darkGray};
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 16px;
    text-align: center;
`;

export const TeamsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const TeamLogo = styled.img`
    width: 80px; /* 로고 크기 */
    height: 80px;
`;

export const TeamInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        margin-bottom: 10px;
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
`;

export const InfoButton = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background-color: #9e9e9e;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
`;