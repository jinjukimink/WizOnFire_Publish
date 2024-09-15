
import styled from "styled-components";


export const SearchBarContainer = styled.div`
  position: relative; /* 위치를 부모 요소에 상대적으로 조정 */
  left: -30%;
  display: inline-block;
  top: -84px; /* 위로 이동 */
  //padding-right: 10px;
   @media (max-width: 1300px) {
      left: -37%;
    }
   @media (max-width: 1200px) {
      left: -34%;
    }
   @media (max-width: 1170px) {
      left: -34%;
    }
    @media (max-width: 1150px) {
      left: -33%;
    }
    @media (max-width: 1100px) {
      left:-34%;
    }
    @media (max-width: 1000px) {
    left:-25%
    }
    /* @media (max-width: 768px) {
        left:-25%;
    } */
    /* @media (max-width: 480px) {
      left: -20%;
    } */
`;


export const GridContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  min-height: 100px;
  //width: 100%;


  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CoachCard = styled.div`
  position: relative;
  text-align: center;
  min-height: 200px;
`;

export const CoachImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 10px;
  color: black;
  font-size: 17px;
  p {
    margin: 0;
  }
`;
