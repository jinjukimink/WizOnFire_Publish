import styled from "styled-components";
import { useState } from "react";

type TArr={
    label:string;
    url:string;
}
type TSearchBar={
    width:string;
    height:string;
    searchList:TArr[];
    onClick:()=>void;

}
const Wrapper=styled.div<{ width: string; height: string }>`
    width: ${({width})=>width};
    height:${({height})=>height};
`

const Row=styled.div`
    display: flex;
    flex-direction: column;
    
`

const Label=styled.label`
  margin-bottom: 8px;
  cursor: pointer;

`


const SelectBar = (props:TSearchBar) => {
    const{searchList}=props;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <>
      <Wrapper>
        <Row>
            <Label>
                {searchList[0].label}
            </Label>
        </Row>
        <Row>
          {searchList.map((item, index) => (
            <Label key={index}>{item.label}</Label>
          ))}
        </Row>
      </Wrapper>
    </>
  );
}
export default SelectBar
