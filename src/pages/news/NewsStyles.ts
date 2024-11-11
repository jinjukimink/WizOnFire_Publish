import styled from 'styled-components';
import colors from '../../assets/Colors';
import { FaEye } from 'react-icons/fa';
 
export const NewsList = styled.div`
  // width: 65%; 
  // display: flex;
  // flex-direction: column;
  // margin-top: 20px;
  max-width: 1100px;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const NewsItem = styled.div`
  // display: flex; /* Flexbox for horizontal alignment */
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  color: #222;
  margin-bottom: 5px;
`;

export const MetaInfo = styled.div`
  // display: flex;
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

export const NewsContainer = styled.div`
  max-width: 1100px; 
  margin: 0 auto; 
  // padding: 20px;
  box-sizing : border-box;
  background-color: ${colors.white};
`;

export const Thumbnail = styled.img`
  width: 250px;        // 썸네일 크기 조정
  height: 125px;
  object-fit: cover;  // 비율 유지하며 썸네일을 꽉 채움
  border-radius: 5px;
  margin-right: 15px; // 썸네일과 제목 사이 간격
`;

export const ArticleIndex = styled.div`
  width: 50px;
  text-align: center;
  font-weight: bold;
  color: ${colors.darkGray};
  margin-right: 10px;
`;

export const ViewsIcon = styled(FaEye)`
  margin-right: 5px;
  font-size: 16px;
  color: ${props => props.color || 'inherit'};
`;