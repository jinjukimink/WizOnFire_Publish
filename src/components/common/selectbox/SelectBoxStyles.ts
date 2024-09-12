import styled from "styled-components";
import colors from "../../../assets/Colors";
import { FaChevronDown } from "react-icons/fa";

export type TSelectBox = {
    items: { label: string; }[];
    placeholder?: string;
    boxwidth?: string;
    boxheight?: string;
    boxPadding?: string;
    border?: string;
    borderRadius?: string;
    boxBackgroundColor?: string;
    textSize?: string;
    labelTextColor?: string;
    itemTextColor?: string;
    listBackgroundColor?: string;
    itemListPadding?: string;
    itemPadding?: string;
    iconSize?: string;
};

export const Box = styled.div<{
    width?: string;
    height?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
}>`
  width: ${({ width }) => width || '252px'};
  height: ${({ height }) => height || '40px'};
  padding: ${({ padding }) => padding || '0'};
  border:  ${({ border }) => border || '0'};
  border-radius:  ${({ borderRadius }) => borderRadius || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || '0'};
  position: relative;
  item-align: center;
  cursor: pointer;
  text-align:center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
    `;

export const Label = styled.label<{
    textSize?: string;
    textColor?: string;
}>`
    font-size: ${({ textSize }) => textSize || '12px'};
    color: ${({ textColor }) => textColor || colors.black};
    text-align: center;
    cursor: pointer;
  `;

export const ItemList = styled.ul<{
    isOpen: boolean,
    backgroundColor?: string;
    textColor?: string;
    padding?: string;
}>`
  position: absolute;
  top:100%;
  list-style: none;
  left: 0;
  width: 100%;
  padding: ${({ padding }) => padding || '0'};
  margin: 0;
  border-radius: 8px;
  background-color: ${({backgroundColor}) => backgroundColor || colors.black};
  color : ${({textColor}) => textColor || colors.white};
  //max-height: ${({isOpen}) => (isOpen? "none" : "0")};
  display: ${({isOpen}) => (isOpen? "block" : "none")};
  box-sizing: border-box;
    `;

export const Item = styled.li<{
    padding?: string;
    textSize?: string;
}>`
  font-size: ${({ textSize }) => textSize || '12px'};
  padding: ${({ padding }) => padding || '0'};
  transition: background-color 0.2s ease-in;
  box-sizing: border-box;
    `;


export const Down = styled(FaChevronDown)<{
    iconSize?: string;
}>`
    position:absolute;
    right: 10px;
    font-size: ${({ iconSize }) => iconSize || '12px'};
`;