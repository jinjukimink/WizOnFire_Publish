import styled from 'styled-components';
import colors from '../../assets/Colors';

export const NewsList = styled.div`
  width: 65%; 
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const NewsItem = styled.div`
  background-color: #fff;
  width: 150%;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  color: #222;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 10px;
`;

export const Views = styled.div`
  color: #888;
  font-size: 0.9rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    background-color: ${colors.darkGray}; /* Dark Gray background */
    color: ${colors.white}; /* White text */
    border: none;
    padding: 10px 15px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 0.9rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${colors.redPrimary}; /* Blue-green on hover */
    }

    &:disabled {
      background-color: ${colors.ashGray}; /* Ash gray for disabled */
      cursor: not-allowed;
    }

    &.active {
      background-color: ${colors.redPrimary}; /* Red primary for active page */
      color: ${colors.white};
    }
  }

  .prev, .next {
    background-color: ${colors.mediumGray}; /* Medium gray for prev/next */
    color: ${colors.white};
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 5px;
    font-size: 0.9rem;

    &:hover {
      background-color: ${colors.blueGreen}; /* Blue-green on hover for prev/next */
    }

    &:disabled {
      background-color: ${colors.ashGray}; /* Ash gray for disabled prev/next */
      cursor: not-allowed;
    }
  }
`;

export const SearchBarWrapper = styled.div`
  margin-bottom: 10px; // 빨간 줄과 간격을 주기 위함
`;