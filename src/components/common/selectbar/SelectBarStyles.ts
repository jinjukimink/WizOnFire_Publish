import styled from 'styled-components';

export type TSelectBar = {
    items: { label: string; url: string }[];
    width?: string;
    height?: string;
    placeholder?: string;
    containerPadding?: string;
    labelPadding?: string;
    itemListPadding?: string;
    itemPadding?: string;
    labelTextSize?: string;
    itemTextSize?: string;
    textAlign?: 'left' | 'center' | 'right';
    containerBorder?: string;
    itemListBorder?: string;
    containerBorderRadius?: string;
    itemListBorderRadius?: string;
    maxHeight?: string;
    boxShadow?: string;
    buttonIcon?: React.ComponentType;
  };

export const Container = styled.div<{
    width?: string;
    height?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
  }>`
    width: ${({ width }) => width || '252px'};
    height: ${({ height }) => height || '40px'};
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    padding: ${({ padding }) => padding || '0'};
    border: ${({ border }) => border || '0'};
    border-radius: ${({ borderRadius }) => borderRadius || '0'};
    background-color: #fff;
    z-index: 21;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;
  

export const IconWrapper = styled.div`
font-size: 15px;
display: flex;
align-items: center;
`;

 export const Label = styled.div<{
    textSize?: string;
    textAlign?: 'left' | 'center' | 'right';
    padding?: string;
  }>`
    width: 100%;
    font-size: ${({ textSize }) => textSize || '0'};
    text-align: ${({ textAlign }) => textAlign || 'left'};
    padding: ${({ padding }) => padding || '0'};
    align-items: center;
  `;
  
 
  
export const ItemList = styled.ul<{
    border?: string;
    borderRadius?: string;
    padding?: string;
    maxHeight?: string;
    boxShadow?: string;
  }>`
    border: ${({ border }) => border || '0'};
    border-radius: ${({ borderRadius }) => borderRadius || '0'};
    padding: ${({ padding }) => padding || '0'};
    max-height: ${({ maxHeight }) => maxHeight || '0'};
    box-shadow: ${({ boxShadow }) => boxShadow || '0'};
    width: 100%;
    position: absolute;
    top: calc(100% + 4px); /* ????????*/
    margin: 0;
    left:0;
    box-sizing: border-box;
    background-color: #fff;
    list-style-type: none;
    overflow-y: auto;
    z-index: 22;
  `;
  
export const Item = styled.li<{
    textSize?: string;
    textAlign?: 'left' | 'center' | 'right';
    padding?: string;
  }>`
    color: black;
    text-align: ${({ textAlign }) => textAlign || 'left'};
    font-size: ${({ textSize }) => textSize || '0'};
    padding: ${({ padding }) => padding || '0'};
    cursor: pointer;
  `;
