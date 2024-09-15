import useFetchData from "../../hooks/useFetchData";
import { useNavigate } from "react-router-dom";
import { DateContainer, GameBox, InfoButton, MatchResult, ScheduleBox, Score, TeamInfo, TeamLogo, TeamsContainer } from "./ScheduleStyles";
import { GradientCircle } from "../../components/common/gradientChip/GradientChipStyles";
import { GrNext } from "react-icons/gr";


const Schedule = () => {
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
                  <span>L: {prev?.visitStarter}</span>
              </TeamInfo>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Score>{prev?.visitScore} : {prev?.homeScore}</Score>
                <MatchResult>{prev?.outcome}</MatchResult>
              </div>
              <TeamInfo>
                  <TeamLogo src={prev?.homeLogo} alt="Home Team" />
                  <span>{prev?.homeFullname}</span>
                  <span>W: {prev?.homeStarter}</span>
              </TeamInfo>
          </TeamsContainer>
        </GameBox>

        <GameBox>
          <DateContainer>{formatDate(current?.displayDate)}</DateContainer>
          <TeamsContainer>
              <TeamInfo>
                  <TeamLogo src={current?.visitLogo} alt="Away Team" />
                  <span>{current?.visitFullname}</span>
                  <span>L: {current?.visitStarter}</span>
              </TeamInfo>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Score>{current?.visitScore} : {current?.homeScore}</Score>
                <MatchResult>{current?.outcome}</MatchResult>
              </div>
              <TeamInfo>
                  <TeamLogo src={current?.homeLogo} alt="Home Team" />
                  <span>{current?.homeFullname}</span>
                  <span>W: {current?.homeStarter}</span>
              </TeamInfo>
          </TeamsContainer>
        </GameBox>

        <GameBox>
          <DateContainer>{formatDate(next?.displayDate)}</DateContainer>
          <TeamsContainer>
              <TeamInfo>
                  <TeamLogo src={next?.visitLogo} alt="Away Team" />
                  <span>{next?.visitFullname}</span>
                  <span>선발: {next?.visitStarter}</span>
              </TeamInfo>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Score>VS</Score>
                <span>{next?.gtime} {next?.stadium} </span>
              </div>
              <TeamInfo>
                  <TeamLogo src={next?.homeLogo} alt="Home Team" />
                  <span>{next?.homeFullname}</span>
                  <span>선발: {next?.homeStarter}</span>
              </TeamInfo>
          </TeamsContainer>
        </GameBox>
        </ScheduleBox>
     
      
    </>
  );
}
export default Schedule 