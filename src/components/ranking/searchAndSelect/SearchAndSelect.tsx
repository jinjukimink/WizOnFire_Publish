import SearchBar from "../../common/searchbar/SearchBar";
import { useRankStore } from "../../../stores/useRank.store";
import { SelectBoxRank, SelectBoxPitRank } from "./SearchAndSelectStyles"
const SearchAndSelect = () => {
    const { setYear } = useRankStore();
    
    const handleYearChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setYear(e.target.value);
    }

    return (
    <SelectBoxRank>
        <SelectBoxPitRank onChange={handleYearChange}>
        {Array(2024 - 2014 + 1).fill(0).map((_,index) => {
            const indexYear = 2024 - index;
            return (
            <option key={indexYear} value={indexYear}>
                {indexYear} 시즌
            </option>
            )
        })}
        </SelectBoxPitRank>
        <SearchBar
        containerWidth="150px"
        height="25px"
        lineHeight="10px"
        buttonWidth="50px"
        placeholder="입력"
        />
        <span>*각 항목을 클릭하시면 순위를 보실 수 있습니다.</span>
    </SelectBoxRank>
    );
}
export default SearchAndSelect