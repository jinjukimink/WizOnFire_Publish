import styled from "styled-components";
import colors from "../../assets/Colors";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${colors.lightGray};
  margin-top: 150px;
`

export const FooterBox = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
  height: 155px;
  padding: 0 50px;
  margin: 30px 0;
`;

export const Logo = styled.img`
  padding-right: 75px;
  padding-bottom: 105px;
`;

export const Info = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    display: flex;
    list-style: none; 
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    li {
      padding: 0 22px;
      
      &:first-child {
        padding-left: 0; 
      }

      &:last-child {
        padding-right: 0; 
      }
    }
  }
  p{
    margin: 0;
    font-size: 13px;
    color: ${colors.mediumGray};
  }
`;

export const StyledLi = styled.li`
  font-size: 22px;
  a {
    color: inherit;
  }
`;

export const InfoDetail = styled.div`
    display: flex;
    font-size: 13px;
    font-weight: 00;
    p{
      margin: 0;
      width: 80px;
      color: ${colors.blueGreen};
      font-weight: 600;
    }

    span{
      display: flex;
      color: #231F20;
    }
    
    .tel, .address{
        font-weight: 600;
      }

    .timeInfo{
      color: ${colors.mediumGray};
      font-size: 12px;
    }
`

export const InfoNetwork = styled.div`
  width: 300px;
  margin-top: 40px;
  display: flex;
  //justify-content: center;
  ul{
    width: 220px;
    margin: 0;
    padding: 0;
    display: flex;
    //justify-content: space-evenly;
    justify-content: flex-start;
      li{
      list-style-type: none;
      width: 20px;
      height: 20px;
      border: 1px solid rgba(0, 0, 0, .1);
      padding: 8px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      &:not(:first-child) {
        margin-left: 10px; /* 첫 번째 아이콘을 제외한 나머지 아이콘의 왼쪽에 간격 추가 */
      }
        img{
          width: 18px;
          height: 18px;
        }
    }
  }
` 