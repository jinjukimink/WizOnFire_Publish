import styled from 'styled-components';
import colors from '../../assets/Colors';
import { FaEye } from 'react-icons/fa';
import { Shining } from '../../components/common/skeleton/gridskeleton/SkeletonGridContainer';
 
export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const WizPressContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  // padding: 20px;
  box-sizing : border-box;
  background-color: ${colors.white};
`;

export const NewsList = styled.div`
  max-width: 1100px;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const NewsItem = styled.div`
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

export const SkeletonNewsItem = styled.div`
  display: flex;
  max-width: 1100px;
  height: 83px;
  padding: 20px;
  border-bottom: 1px solid ${colors.ashGray};
  background-color: ${colors.white};
  `;

export const Title = styled.h3`
  margin: 0;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const SkeletonTitle = styled(Shining)`
  width: 400px;
  max-height: 5px;
  border-radius: 5px;
  background-color: ${colors.ashGray};
  margin-left: 80px;
  margin-top: 15px;
  padding: 15px; 
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
export const SkeletonViews = styled(Shining)`
  display:flex;
  width: 40px;
  height: 15px;
  background-color: ${colors.ashGray};
  border-radius: 5px;
  margin-left:80px;
  margin-top:5px;
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

export const ViewsIcon = styled(FaEye)`
  margin-right: 5px;
  font-size: 16px;
  color: ${props => props.color || 'inherit'};
`;

export const ArticleIndex = styled.div`
  width: 50px;
  text-align: center;
  font-weight: bold;
  color: ${colors.darkGray};
  margin-right: 10px;
`;