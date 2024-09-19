import { SortingState } from "@tanstack/react-table";
import { useRankStore } from "../../../../stores/useRank.store";
import RankingApiTabel from "./PitcherRankTable";
import { useState } from "react";
import { TPitcherResponse } from "../../../../types/ranking";

const PitcherRanking = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { year } = useRankStore();
  const  apiUrl = `/game/rank/kt/pitcher?gyear=${year}&pname=&sortKey=`;
  const transformData = (data: TPitcherResponse) => {
    return data?.data?.list || [];
  };

  return (
    <>
      <RankingApiTabel apiUrl={apiUrl} sorting={sorting}
      onSortingChange={setSorting} transformData={transformData}/>
    </>
  );
}

export default PitcherRanking;
{/* 평균자책점 top3 */}
{/* 승리 top3 */}
{/* 전체 투수평균자책점 top5 */}
{/* ktwiz투수 */}