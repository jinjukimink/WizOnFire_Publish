import styled from "styled-components";
import colors from "../../../assets/Colors";

export const PitMenuSelected = styled.div<{ isSelected: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;
    top: 0;
    left: 200px;
    color: ${colors.white};
    font-size: 16px;
    font-family: KBO_Gothic_bold;
    transform: translateY(${({ isSelected }) => (isSelected ? "0" : "-15%")});
    transition: transform 0.5s ease-in-out;
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
    caret-color: transparent;
    margin-bottom: 50px;

    &::before {
        content: "";
        position: absolute;
        width: 280px;
        height: 70%;
        left: -90px;
        top: 55%;
        z-index: -5;
        border-radius: 30px;
        background-color: ${colors.redGradient};
        transform: translate(-9%, -50%);
    }
`;

export const SubMenuText = styled.span<{ isSelectSubMenu?: boolean }>`
    position: relative;
    left: -40px;
    top: 2px;
    display: flex;
    gap: 30px;
    cursor: pointer;
    text-shadow: ${({ isSelectSubMenu }) => (isSelectSubMenu ? `3px 3px 5px ${colors.redPrimary}` : "none")};
    color: ${colors.white};
`;

export const Triangle = styled.div<{ left?: string }>`
    position: absolute;
    width: 0;
    height: 0;
    top: 5px;
    left: ${(props) => props.left || '-80px'};
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 20px solid ${colors.redGradient};
`;
