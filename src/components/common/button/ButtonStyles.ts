import styled from "styled-components";
import React from "react";
import colors from "../../../assets/Colors";

export type TButton ={
    width:string;
    height:string;
    borderRadius?:string;
    children?: React.ReactNode;//자식 타입 설정
    onClick?:()=>void;
    fontColor?:string;
    fontSize?:string;
    backgroundColor?:string;
    margin?:string;
    border?:string;
    padding?:string;
    type?:string;
    style?:React.CSSProperties
    isActive?: boolean
};

export const Btn = styled.button<TButton>`
    width: ${({width})=>width};
    height:${({height})=>height};
    border-radius:${({borderRadius})=>borderRadius};
    background-color: ${({isActive,backgroundColor})=> isActive ? colors.redPrimary : backgroundColor};
    font-size: ${({fontSize})=>fontSize};
    color:${({ isActive, fontColor })=> isActive ? colors.white : fontColor};
    position:relative;
    margin: ${({margin})=>margin};
    border:${({ isActive, border})=> isActive ? 'none' : border};
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:${({padding})=>padding};
    box-sizing: border-box;
    cursor: pointer; 
    &:hover {
        background-color: ${colors.redPrimary}; 
        border: none;
        color: ${colors.white};
    }
`