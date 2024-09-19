import styled from "styled-components";
import colors from "../assets/Colors";

//Intro에 쓸 CSS
export const Container= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: ${colors.white};
`;

export const ImageContainer = styled.div<{width?:string;}> `
  display: flex;
  justify-content: center;
  width: ${({ width }) => width || '100%'};
  max-width: 1100px; 
  margin-bottom: 50px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  text-align: left;
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.redSecondary};
  position: relative;
  text-align: left;
  margin-top: 0px;

  &::after {
    content: "";
    display: block;
    width: 35px;
    height: 2.5px;
    background-color: ${colors.redSecondary};
    margin: 30px 0;
  }
`;

export const SubTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
  color: #333;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${colors.darkGray};
  margin: 20px 0;
  text-align: left;
`;
