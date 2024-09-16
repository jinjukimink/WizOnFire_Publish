import styled from "styled-components";
import colors from "../../../../../assets/Colors";

export const MainStatsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    caret-color: transparent;
    table-layout: fixed;
    font-size: 12px;
    color: ${colors.mediumGray};
`;


export const MainStatsHeaderCell   = styled.td`
    padding-block: 10px;
    text-align: center;
    /* border-top: 1.5px solid ${colors.silverGray}; */
    background-color: ${colors.redGradient};
    color: ${colors.white};
    font-weight: 500;
    &:nth-child(2) {
        width: 10%;
    }
`

export const RowTr = styled.tr`
    &:last-child {
        border-bottom: 1.5px solid ${colors.silverGray};
    }
    &:hover {
        background-color: ${colors.ivory};
        color: ${colors.darkGray};
        font-weight: 500;
    }
`;

export const MainStatsCell = styled.td`
        padding-block: 10px;
        text-align: center;
        border: 1px solid ${colors.silverGray};
    
    &:nth-child(1) {
        border-left: none;
    }

    &:last-child {
        border-right: none;
    }
`;