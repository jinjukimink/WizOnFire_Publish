import styled from 'styled-components';
import { backgroundLogo } from '../../assets/assets';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 300px;
  background: url(${backgroundLogo}) no-repeat center center;
  background-size: cover;
  color: white;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
`;

interface ButtonProps {
  active: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: none;
  border: none;
  font-size: 20px;
  padding-bottom: 10px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-bottom 1s ease;
  color: ${({ active }) => (active ? 'black' : 'white')}; /* 클릭 후 검은색, 기본 하얀색 */
  
  &:hover {
    border-bottom: 2px solid black;
  }

  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
  `}
`;

export const ContentContainer = styled.div`
  padding: 40px;
  text-align: left;
`;

export const ContentTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const ContentText = styled.p`
  font-size: 20px;
  line-height: 1;
  color: #333;
`;
