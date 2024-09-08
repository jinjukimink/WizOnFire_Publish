import styled from "styled-components";
import React from "react";

export type TButton ={
    width:string;
    height:string;
    borderRadius?:string;
    children?: React.ReactNode;//자식 타입 설정
    onClick?:()=>void;
    fontColor?:string;
    fontSize?:string;
    backgroundColor?:string;
    marginLeft?:string;
    marginRight?:string;
    border?:string;
    padding?:string;
    type?:string;
};

export const Btn = styled.button<TButton>`
    width: ${({width})=>width};
    height:${({height})=>height};
    border-radius:${({borderRadius})=>borderRadius};
    background-color: ${({backgroundColor})=>backgroundColor};
    font-size: ${({fontSize})=>fontSize};
    color:${({fontColor})=>fontColor};
    position:relative;
    margin-left: ${({marginLeft})=>marginLeft};
    margin-right: ${({marginRight})=>marginRight};
    border:${({border})=>border||'none'};
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover { cursor: pointer; }
    padding:${({padding})=>padding};
    box-sizing: border-box;
`