import { ColumnDef, SortingState } from "@tanstack/react-table";
import RankingApiTable from "./PitcherRankTable";
import { useRankStore } from "../../../../stores/useRank.store";
import { useState } from "react";
import { TPitcherRankType, TPitcherResponse } from "../../../../types/ranking";

const AllPitcherRank = () => {
  const { year } = useRankStore();
  const [sorting, setSorting] = useState<SortingState>([]);
  const apiUrl = `/game/rank-total-pitcher-gyear-${year}-pname--sortKey-.json`;
  
  const transformData = (data: TPitcherResponse) => {
    return (
      data?.data?.list.map((pitcher,index) => ({
        ...pitcher,
        num: index + 1
      })) || []
    );
  };

  const addColumnDefs : ColumnDef<TPitcherRankType>[] = [
    { header: "순위", accessorKey: "num", enableSorting: false },
  ];

  return (
    <>
      <RankingApiTable
        apiUrl={apiUrl}
        sorting={sorting}
        onSortingChange={setSorting}
        columnDefs={addColumnDefs}
        transformData={transformData}
      />
    </>
  );
}

export default AllPitcherRank;
