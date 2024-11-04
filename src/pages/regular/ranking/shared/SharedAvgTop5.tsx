import { useEffect, useState } from "react";
import useFetchData from "../../../../hooks/useFetchData";
import { TAllAvgResponse } from "../../../../types/ranking";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import styled from "styled-components";
import colors from "../../../../assets/Colors";
import PitcherTop5Skeleton from "../pitcher/PitcherTop5Skeleton";
import useLoading from "../../../../hooks/useLoading";
const Top5Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid  ${colors.ashGray};
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 100px;
  margin-left: 40px;
`
const Top5TextLi = styled.li`
  list-style: none;
  display: flex;
  padding: 20px 0 0 0; 
  &:first-of-type {
    margin-top: 15px;
  }
  `

const PlayerInfo = styled.span`
  flex: 1; 
`

const Top5BottomLine = styled.div`
  height: 10px;
  width: 100%;
  border-bottom: 1px solid ${colors.ashGray};
`

const SeasonText = styled.span`
  margin-top: 20px;
  text-align: right;
`

const EraWrapper = styled.span`
  display: flex;
  align-items: center;  
`;

const EraText = styled.span`
  position: relative;
  right: 5px;
  margin-left: 10px; 
`;

type TTopConditionRankType = {
  condition: string;
  children: React.ReactNode;
};

const SharedAvgTop5 = ({condition, children} :TTopConditionRankType) => {

  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    if (condition === "pitcher") {
      setApiUrl('/game/rank-pitcher-total-top5.json');
    } else if (condition === "batter") {
      setApiUrl('/game/rank-batter-total-top5.json');
    }
  }, [condition]);

  
  const { data } = useFetchData<TAllAvgResponse>(apiUrl)
  const transformedData = data?.data?.list || null;
  const isLoading = useLoading();
  if (isLoading) return <PitcherTop5Skeleton/>;

  return (
    <>
      <Top5Container>
          <div>{children}</div>
          {transformedData?.map((player,index) => (
            <div key={player.playerName}>
              <Top5TextLi key={index}>
                <PlayerInfo>{index + 1}) <b>{player.playerName}</b> ({player.teamName})</PlayerInfo>
                <EraWrapper>
                  <IoIosCheckmarkCircleOutline style={{fontSize:"18px"}}/> 
                  <EraText>
                    {condition === "pitcher" ? player.era : player.hra}
                  </EraText> 
                </EraWrapper>
              </Top5TextLi>
              <Top5BottomLine/>
            </div>
          ))}
          <SeasonText>*2024 정규리그 시즌</SeasonText>
      </Top5Container>
    </>
  );
}
export default SharedAvgTop5
