
import styled from "styled-components";


export const SearchBarContainer = styled.div`
  position: relative; /* 위치를 부모 요소에 상대적으로 조정 */
  left: -28%;
  display: inline-block;
  top: -40px; /* 위로 이동 */
  //padding-right: 10px;

   @media (max-width: 1200px) {
      left: -27%;
    }
   @media (max-width: 1170px) {
      left: -18%;
    }
    @media (max-width: 1150px) {
      left: -29%;
    }
    @media (max-width: 1100px) {
      left:-30%;
    }
    @media (max-width: 1000px) {
    left:-32%
    }
    @media (max-width: 768px) {
        left:-26%;
    }
    @media (max-width: 480px) {
       left: -28%;
    }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const GridContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  min-height: 100px;
  width: 75%;

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
