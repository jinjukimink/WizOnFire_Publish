import styled from "styled-components";

export type TSearchBar = {
    containerWidth: string;
    buttonWidth: string;
    height: string;
    lineHeight?: string;
    placeholder?: string;
  }
  
export const Container = styled.div`
  
  
`;

export const Input = styled.input<
{ width?: string; height?: string; lineHeight?: string; placeholder?:string;}>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    line-height: ${({ lineHeight }) => lineHeight};
    placeholder: ${({ placeholder }) => placeholder};
    border: 1px solid #9a9a9a;  
    font-size: 12px;
    padding: 0 8px;
    box-sizing: border-box;
`;
