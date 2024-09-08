import styled from 'styled-components';
import {motion}from 'framer-motion';


export const UpNav = styled(motion.nav)<{isHovered:boolean}>` 
    justify-content: center;
    display: flex;
    position: fixed;
    width: 100%;
    left:0px;
    top: 0;
    height: 110px;
    z-index: 101;
    gap: 43px;
    transition: color 0.3s ease-in-out;
    a{
        color: ${({ isHovered }) => (isHovered ? "black" : "white")};
        transition: color 0.3s ease-in-out;
        left:20px;//로고 정렬할 때 중요
        //margin-right: 10px;
    }
    a:hover{
    font-weight: 700;
    }
    a:nth-last-child(2) {
        color: red;
    } 

    /* a:nth-last-child(5){
        margin-left: 1px;//로고 양옆 조절
    }    */
    a:nth-last-child(6){
        //margin-right: 123px;//로고 양옆 조절
        margin-right: 40px;
    }   
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1100px;
        border-bottom: 2px solid white;
        transition: width 0.3s ease;
        clip-path: polygon(
            0 0, 
            46% 0, 
            46% 100%, 

            53.5% 100%, 
            53.5% 0, 

            100% 0, 
            100% 100%,
             0 100%);
  
    }

`;

export const Logo = styled.div<{isHovered:boolean}>`
    justify-content: center;
    align-items: center;
   // position: absolute;
    display: flex;
    left: 50%;
    transform: translateX(-6%);//로고 위치 중간 조정
    top:17px;
    z-index: 103;
    img {
        width: 130px;
        transition: width 0.3s ease-in-out;
    }
    &:hover{
        cursor: pointer;
    }

    `;

export const Category=styled.a<{isHovered: boolean; hoveredCategory:string;}>` 
    position: relative;
    //left:67px;
    font-size: 20px;
    text-decoration: none;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 46px;
    ${({isHovered})=>isHovered && ` border-bottom: 3px solid red;`}
    `;

export const BottomNav=styled(motion.div)` 
    padding-top: 30px;
    grid-template-columns: repeat(8, 1fr);
    position: fixed;
    top: 110px;
    width: 102.1%;
    background-color: white;
    height: 220px;
    box-sizing: border-box;
    z-index: 100;
    display: flex;
    justify-content: center;
    text-align: start;
    gap: 24px;//열 간격 조정
    padding-left: 12x;
    a:hover{
    font-weight: 700;

  }
`;

export const SubCategoryColumn=styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 29px;
    position:relative;
    //left:-58.7px;
    //left:-30px;
    left:-50px;//첫번째 열 시작 부분 조정
    &:hover{
        cursor: pointer;
    }
    &:nth-child(5){
        margin-left: 220px;
    }
`;


export const SubCategory=styled.a`
    font-size: 14px;
    color: black;
    text-decoration: none;
`;