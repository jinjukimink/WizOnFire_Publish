import { useState } from "react";
import Button from "../button/Button";
import { Input, TSearchBar } from "./SearchBarStyles";


const SearchBar = ({containerWidth, height, lineHeight, buttonWidth, placeholder}:TSearchBar) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // const handleSearch = () => {
  //   onSearch(searchTerm);
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  }


  return (
  <form onSubmit={onSubmit} style={{display:'flex'}}> 
    <Input type="text" placeholder={placeholder} value={searchTerm} onChange={handleInputChange} width={containerWidth} height={height} lineHeight={lineHeight}/>
    <Button type="submit" width={buttonWidth} height={height} backgroundColor="#333" fontColor="#fff" fontSize="12px" margin="0 0 0 -3px" padding="0" > 검색 </Button>
    </form>
  );
}
export default SearchBar