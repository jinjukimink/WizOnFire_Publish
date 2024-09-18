import styled from "styled-components";
import Chart from "./records/Chart";
import TeamPitcher from "./records/TeamPitcher";
import TeamRecords from "./records/TeamRecords";
import TeamBatter from "./records/TeamBatter";
import WinLossTable from "./records/WinLossTable";
import colors from "../../../../assets/Colors";

const RankingContainer = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
`
const RankingSection = styled.section`
  margin-top: 50px;
`
const WinLossText = styled.span`
  z-index: 41;
  position: absolute;
  right: 0;
  bottom: 0;
  bottom: 435px;
  font-weight: 600;
  color:${colors.redPrimary};

  &::before{
    content: '';
    width: 60px;
    height: 0.8rem;
    background-color: rgba(255, 0, 0, 0.13);
    position: absolute;
    top: 60%;
    right: 0;
    z-index: -2;
  }
`
const TeamRanking = () => {
  const title = {
    common : "2024 시즌 팀",
    items : [
      "순위",
      "기록",
      "투수 기록",
      "타자 기록",
      "간 승패표",
    ]
  }
  return (
    <RankingContainer>
      {title.items.map((item,index) => (
        <RankingSection key={index}>
          <h3>
            {title.common} {item}
          </h3>
          {index === 0 && <Chart/>}
          {index === 1 && <TeamRecords/>}
          {index === 2 && <TeamPitcher/>}
          {index === 3 && <TeamBatter/>}
          {index === 4 && 
            <>
              <WinLossTable/>
              <WinLossText>*경기 성적 (승-패-무)</WinLossText>
            </>
          }
        </RankingSection>
      ))}
    </RankingContainer>
  );
}
export default TeamRanking