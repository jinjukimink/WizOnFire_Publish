import { useMemo, useState } from "react";
import { SortingState } from "@tanstack/react-table";
import { useRankStore } from "../../../../stores/useRank.store";
import RankingApiTable from "./BatterRankTable";
import { transformBatterData } from "../../../../utils/batterUtils";
import SeasonSelect from "../../../../components/ranking/seasonSelect/SeasonSelect";
import styled from "styled-components";
import SearchBar from "../../../../components/common/searchbar/SearchBar";

const SelectAndSearch = styled.div`
  display: flex;
  gap: 5px;
  span {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
`;

const BatterRanking = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [sorting, setSorting] = useState<SortingState>([]);
  const { year } = useRankStore();
  const apiUrl = useMemo(() => {
    return `/game/rank/kt/batter?gyear=${year}&pname=&sortKey=`;
  }, [year]);
  console.log('searchTerm서치!!!!',searchTerm);
  console.log('transformData 타자!!!!',transformBatterData);

  // useEffect(()=>{
  //   const handler = setTimeout(() => {
  //     setDebouncedSearchTerm(searchTerm);
  //   },2000);

  //   return () => {
  //     clearTimeout(handler);
  //   };
  // },[searchTerm]);


  // const filterData = useMemo(()=>{
  //   return (data:TBatterRankType[]) => {
  //     return data.filter((player) => 
  //       player.playerName.includes(searchTerm)
  //     )
  //   }
  // },[searchTerm])

  // const filteredStaffList = stafflist?.length > 0
  // ? stafflist.filter((staff) =>
  //     staff.playerName.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  // : [];


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
      <RankingApiTable
        apiUrl={apiUrl}
        sorting={sorting}
        onSortingChange={setSorting}
        transformData={transformBatterData} 
        // transformData={(data)=> filterData(transformBatterData(data))} 
      />
    </>
  );
};

export default BatterRanking;
