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
      <SelectAndSearch>
        <SeasonSelect />
        <SearchBar 
        placeholder="검색어를 입력해주세요." 
        containerWidth="140px" 
        height="29px" 
        buttonWidth="45px"
        onSearch={(term)=>setSearchTerm(term)} 
        />
        <span>*각 항목을 클릭하시면 순위를 보실 수 있습니다.</span>
      </SelectAndSearch>
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
