import useFetchData from "../../../hooks/useFetchData";
import { useNavigate } from "react-router-dom";
import { ContentBox, DateContainer, GameBox, MatchResult, ScheduleBox, Score, TeamInfo, TeamLogo, TeamsContainer } from "./MatchBoxStyles";
import colors from "../../../assets/Colors";
import Button from "../../../components/common/button/Button";
import { TGameResponse } from "../../../types/landing";

const MatchBox = () => {
  const navigate = useNavigate();
  const { data : game } = useFetchData<TGameResponse>("/game/recentGames");
  const {current, prev, next} = game?.data || {};
  console.log('Gamedata', game);

  // 날짜 포맷팅 함수
  const formatDate = (date:string | undefined):string => {
    const year = date?.substring(0, 4) || "";
    const month = date?.substring(4, 6) || "";
    const day = date?.substring(6, 8) || "";
    return  `${year}.${month}.${day}`;
}

  return (
    <>
     <ScheduleBox>
      <GameBox>
          <DateContainer>{formatDate(prev?.displayDate)}</DateContainer>
          <TeamsContainer>
              <TeamInfo>
                  <TeamLogo src={prev?.visitLogo} alt="Away Team" />
                  <span>{prev?.visitFullname}</span>
                  <span>{prev?.visitDecision} : {prev?.visitDecisionPitcher}</span>
              </TeamInfo>
              <ContentBox>
                <Score>{prev?.visitScore} : {prev?.homeScore}</Score>
                <MatchResult>{prev?.outcome}</MatchResult>
                <Button 
                  width="80px" 
                  height="25px" 
                  fontSize="13px" 
                  backgroundColor="#9e9e9e" 
                  border="none" 
                  fontColor="white" 
                  borderRadius="20px" 
                  onClick={() => navigate(`/game/regular/boxscore/${prev?.gameDate}/${prev?.gmkey}`)}
                  hoverColor={colors.redQuaternary}
                >
                  경기 정보
                </Button>
              </ContentBox>
              <TeamInfo>
                  <TeamLogo src={prev?.homeLogo} alt="Home Team" />
                  <span>{prev?.homeFullname}</span>
                  <span>{prev?.homeDecision} : {prev?.homeDecisionPitcher}</span>
              </TeamInfo>
          </TeamsContainer>
        </GameBox>

        <GameBox width="360px" height="190px" boxShadow="0 3px 7px 0 rgba(0, 0, 0, .24)">
          <DateContainer backgroundColor={colors.redQuaternary}>{formatDate(current?.displayDate)}</DateContainer>
          <TeamsContainer>
              <TeamInfo>
                  <TeamLogo src={current?.visitLogo} alt="Away Team" />
                  <span>{current?.visitFullname}</span>
                  <span>{current?.visitDecision} : {current?.visitDecisionPitcher}</span>
              </TeamInfo>
              <ContentBox>
                <Score>{current?.visitScore} : {current?.homeScore}</Score>
                <MatchResult>{current?.outcome}</MatchResult>
                  <Button 
                    width="80px" 
                    height="25px" 
                    fontSize="13px" 
                    backgroundColor="#9e9e9e" 
                    border="none" 
                    fontColor="white" 
                    borderRadius="20px" 
                    onClick={()=>navigate(`/game/regular/boxscore/${current?.gameDate}/${current?.gmkey}`)}
                    hoverColor={colors.redQuaternary}
                  >
                    경기 정보
                  </Button>
              </ContentBox>
              <TeamInfo>
                  <TeamLogo src={current?.homeLogo} alt="Home Team" />
                  <span>{current?.homeFullname}</span>
                  <span>{current?.homeDecision} : {current?.homeDecisionPitcher}</span>
              </TeamInfo>
          </TeamsContainer>
        </GameBox>

        <GameBox>
          <DateContainer>{formatDate(next?.displayDate)}</DateContainer>
          <TeamsContainer>
              <TeamInfo>
                  <TeamLogo src={next?.visitLogo} alt="Away Team" />
                  <span>{next?.visitFullname}</span>
                  <span>선발: {next?.visitStarter || '미정'} </span>
              </TeamInfo>
              <ContentBox> 
                <Score>VS</Score>
                <span>{next?.gtime} {next?.stadium} </span>
                  <Button 
                    width="80px" 
                    height="25px" 
                    fontSize="13px" 
                    backgroundColor="#9e9e9e" 
                    border="none" 
                    fontColor="white" 
                    borderRadius="20px" 
                    hoverColor={colors.redQuaternary}
                  >
                    경기 정보
                  </Button> 
             </ContentBox>
              <TeamInfo>
                  <TeamLogo src={next?.homeLogo} alt="Home Team" />
                  <span>{next?.homeFullname}</span>
                  <span>선발: {next?.homeStarter || '미정'}</span>
              </TeamInfo>
          </TeamsContainer>
        </GameBox>
        </ScheduleBox>
     
      
    </>
  );
}
export default MatchBox