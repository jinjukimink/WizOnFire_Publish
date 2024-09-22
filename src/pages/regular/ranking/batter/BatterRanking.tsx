import { useState } from "react";
import { SortingState } from "@tanstack/react-table";
import { useRankStore } from "../../../../stores/useRank.store";
import RankingApiTable from "./BatterRankTable";
import { transformBatterData } from "../../../../utils/batterUtils";
import SeasonSelect from "../../../../components/ranking/seasonSelect/SeasonSelect";
import styled from "styled-components";
import Button from "../../../../components/common/button/Button";
import { Input } from "../../../../components/common/searchbar/SearchBarStyles";

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
  const apiUrl = `/game/rank/kt/batter?gyear=${year}&pname=&sortKey=`;

  // useEffect(()=>{
  //   const handler = setTimeout(() => {
  //     setDebouncedSearchTerm(searchTerm);
  //   },2000);

  //   return () => {
  //     clearTimeout(handler);
  //   };
  // },[searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("")
  }

  // const filterData = useMemo(()=>{
  //   return (data:TBatterRankType[]) => {
  //     return data.filter((player) => 
  //       player.playerName.includes(searchTerm)
  //     )
  //   }
  // },[searchTerm])

  return (
    <>
      <SelectAndSearch>
        <SeasonSelect />
        <form onSubmit={onSubmit} style={{display:'flex'}}> 
          <Input type="text" placeholder="검색어" value={searchTerm} onChange={handleInputChange} width="150px"height="25px" lineHeight="10px"/>
          <Button type="submit" width="50px" height="25px" backgroundColor="#333" fontColor="#fff" fontSize="12px" margin="0 0 0 -3px" padding="0" > 검색 </Button>
        </form>
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
