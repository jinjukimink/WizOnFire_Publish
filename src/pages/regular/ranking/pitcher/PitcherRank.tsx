import { SortingState } from "@tanstack/react-table";
import { useRankStore } from "../../../../stores/useRank.store";
import RankingApiTable from "./PitcherRankTable";
import { useState } from "react";
import { TPitcherResponse } from "../../../../types/ranking";

const PitcherRank = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { year } = useRankStore();
  // const apiUrl = `/game/rank/kt/pitcher?gyear=${year}&pname=${searchTerm}&sortKey=`;
  // const apiUrl = `/game/rank-kt-pitcher-gyear-${year}-pname-${searchTerm}-sortKey-.json`;
  const apiUrl = `/game/rank-kt-pitcher-gyear-${year}-pname--sortKey-.json`;
  const transformData = (data: TPitcherResponse) => {
    return data?.data?.list || [];
  };

  return (
    <>
      <RankingApiTable
        apiUrl={apiUrl}
        sorting={sorting}
        onSortingChange={setSorting}
        transformData={transformData}
      />
    </>
  );
}

export default PitcherRank;