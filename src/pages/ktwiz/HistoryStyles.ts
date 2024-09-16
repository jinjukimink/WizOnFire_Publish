import styled from "styled-components";
import colors from "../../assets/Colors";

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50px;
    bottom: 75px;
    left: 50%;
    width: 3px;
    background-color:#e3e3e3; // 원하는 색상으로 변경
    transform: translateX(-50%);
  }
  `
export const Hist = styled.div`
  width: 100%;
  max-width: 1100px;
  
  // > div:last-child {
  //   margin-bottom: 0;
  // }
`

export const Title = styled.div<{isLeft?:string}>`
  width:430px;
  text-align: left;
`

export const LeftBox = styled.div<{algin?:string}>`
  width: 430px;
  position: relative;
  border: 1px solid #e4e4e4;
  border-top: 1.5px solid ${colors.redPrimary};
  background-color: #f9f9f9;
  padding: 38px 28px;
  color: #5b5a5a;
  text-size: 15px;
  box-sizing: border-box;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    right: -125.5px;
    top: 20px;
    width: 10px;
    height: 10px;
    background-color: ${colors.redPrimary};
  }   
  &::after {
    content: '';
    position: absolute;
    left:423.2px;
    top: 20px;
    border-top: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    width:10px;
    height:10px;
    transform: rotate(45deg);
    background-color: #f9f9f9;
  }
`

export const RightBox = styled.div<{algin?:string}>`
  width: 430px;
  position: relative;
  border: 1px solid #e4e4e4;
  border-top: 1.5px solid ${colors.redPrimary};
  background-color: #f9f9f9;
  padding: 38px 28px;
  color: #5b5a5a;
  text-size: 15px;
  box-sizing: border-box;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    left: -126.5px;
    top: 20px;
    width: 10px;
    height: 10px;
    background-color: ${colors.redPrimary};
  }   
  &::after {
    content: '';
    position: absolute;
    right:423.2px;
    top: 20px;
    border-top: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    width:10px;
    height:10px;
    transform: rotate(225deg);
    background-color: #f9f9f9;
  }
`

export const Layout = styled.div<{ align?: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align === 'left' ? 'flex-start' : 'flex-end'};
`

  
