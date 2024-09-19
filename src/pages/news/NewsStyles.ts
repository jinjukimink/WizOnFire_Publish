import styled from 'styled-components';

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  width: 100%;
`;

export const NewsList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const NewsItem = styled.div`
  background-color: #fff;
  width: 100%;
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
  align-items: center;
  color: #999;
  font-size: 0.9rem;
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 0.9rem;

    &:hover {
      background-color: #555;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;
