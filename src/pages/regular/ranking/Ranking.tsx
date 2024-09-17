import styled from "styled-components";
import RankingMenuBar from "./RankingMenuBar";

const RankingContainer = styled.div`
    width: 65%;
    font-size: 14px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 50px;
`;
const Ranking = () => {
  return (
    <RankingContainer>
      <RankingMenuBar/>
    </RankingContainer>
  );
}
export default Ranking 