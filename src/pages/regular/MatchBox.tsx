import React from "react";
import { DateContainer, GameBox, TeamInfo, TeamLogo, TeamsContainer, Score, MatchResult } from "./ScheduleStyles";

const GameDetails = ({ game, width, height, boxShadow, dateboxColor, children, stadium, gtime }: { game: TGameData; width?: string; height?: string; boxShadow?:string; dateboxColor?: string; children?: React.ReactNode; stadium?:string; gtime?:string; }) => {
  // 날짜 포맷팅 함수
  const formatDate = (date:string | undefined):string => {
    const year = date?.substring(0, 4) || "";
    const month = date?.substring(4, 6) || "";
    const day = date?.substring(6, 8) || "";
    return  `${year}.${month}.${day}`;
  }

  return (
    <GameBox width={width} height={height} boxShadow={boxShadow}>
      <DateContainer backgroundColor={dateboxColor}>{formatDate(game?.displayDate)}</DateContainer>
      <TeamsContainer>
        <TeamInfo>
          <TeamLogo src={game?.visitLogo} alt="Away Team" />
          <span>{game?.visitFullname}</span>
          <span>W: {game?.visitStarter}</span>
        </TeamInfo>
        <Score>
        {children}
        <span>{game?.outcome}</span>
        <span>{stadium} {gtime}</span>
        </Score>
        <TeamInfo>
          <TeamLogo src={game?.homeLogo} alt="Home Team" />
          <span>{game?.homeFullname}</span>
          <span>L: {game?.homeStarter}</span>
        </TeamInfo>
      </TeamsContainer>
    </GameBox>
  );
};

export default GameDetails;