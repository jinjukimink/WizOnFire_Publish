import styled from 'styled-components';

export const WizPressContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const NewsList = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const NewsItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;  // 클릭할 수 있게 손가락 모양이 나오게 합니다.

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;


export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
`;

export const Views = styled.span`
  margin-left: 20px;
`;

export const Date = styled.span``;

export const SearchBarWrapper = styled.div`
  margin-bottom: 10px; // 빨간 줄과 간격을 주기 위함
`;