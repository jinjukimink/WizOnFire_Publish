import { useState} from "react";
import { SortingState } from "@tanstack/react-table";
import { useRankStore } from "../../../../stores/useRank.store";
import RankingRankTable from "./BatterRankTable";
import { transformBatterData } from "../../../../utils/batterUtils";
import SearchBar from "../../../../components/common/searchbar/SearchBar";

const BatterRanking = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");  // 실시간 검색어 상태
  const [sorting, setSorting] = useState<SortingState>([]);
  const { year } = useRankStore();
  const apiUrl = `/game/rank/kt/batter?gyear=${year}&pname=${searchTerm}&sortKey=`;

  return (
    <>
      <SearchBar
        placeholder="검색어"
        buttonWidth="50px"
        height="25px"
        onSearch={(term) => setSearchTerm(term)}  // 검색어 상태 즉시 변경
      />
      <RankingRankTable
        apiUrl={apiUrl}
        sorting={sorting}
        onSortingChange={setSorting}
        transformData={transformBatterData}
      />
    </>
  );
};

export default BatterRanking;
