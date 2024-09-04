import styled from 'styled-components';
import {motion}from 'framer-motion';

export const UpNav=styled(motion.nav)` 
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: 80px;
    z-index: 101;
    font-family: Noto Sans KR,HangeulNuri,sans-serif !important;
    gap: 37px;
    transition: color 0.3s ease-in-out;
    a {
        color: ${({ isHovered }: any) => (isHovered ? "black" : "white")};
        transition: color 0.3s ease-in-out;
    }
    a:hover{
    font-weight: 700;
    }

    a:last-child {
        color: red;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1200px;
        border-bottom: 0.5px solid gray;
        transition: width 0.3s ease;
    }

`;

export const Logo=styled.div`
    position: absolute;
    margin-right: 850px;
    margin-top: -11px;

    img {
        width: 90px;
        transition: width 0.3s ease-in-out;
    }

    `;

export const Category=styled.a<{isHovered: string}>` 
    font-size: 17px;
    text-decoration: none;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${({isHovered})=>isHovered && ` border-bottom: 3px solid red;`
    }
    `;

export const BottomNav=styled(motion.div)` padding-top: 30px;
    grid-template-columns: repeat(8, 1fr);
    position: fixed;
    top: 80px;
    width: 102.1%;
    background-color: white;
    height: 220px;
    box-sizing: border-box;
    z-index: 100;
    display: flex;
    justify-content: center;
    text-align: start;
    gap: 20px;
    padding-left: 12x;
    a:hover{
    font-weight: 700;
  }
`;

export const SubCategoryColumn=styled.div` display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;


export const SubCategory=styled.a`
    font-size: 13px;
    color: black;
    text-decoration: none;
`;