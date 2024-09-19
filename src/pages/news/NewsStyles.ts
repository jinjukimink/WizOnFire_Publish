import styled from 'styled-components';

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  width: 100%;
`;

const NewsItem = styled.div`
  background-color: #fff;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  color: #222;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.9rem;
`;

const Pagination = styled.div`
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
  }
`;