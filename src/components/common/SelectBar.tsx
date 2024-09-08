import styled from "styled-components";
import { useState } from "react";

type TArr = {
  label: string;
  url: string;
};

type TSearchBar = {
  width: string;
  height: string;
  searchList: TArr[];
  onClick: () => void;
};

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  cursor: pointer;
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const SelectedLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s;
`;

const SelectBar = (props: TSearchBar) => {
  const { searchList } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    searchList[0]?.label || null
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectOption = (label: string) => {
    setSelectedOption(label);
    setIsOpen(false);
    props.onClick(); // Trigger the onClick handler when an option is selected
  };

  return (
    <Wrapper width={props.width} height={props.height}>
      <SelectedLabel onClick={toggleDropdown}>
        kt 그룹사 및 관련사이트
        <ArrowIcon isOpen={isOpen}>▼</ArrowIcon>
      </SelectedLabel>
      <Dropdown isOpen={isOpen}>
        {searchList.map((item, index) => (
          <DropdownItem key={index} onClick={() => handleSelectOption(item.label)}>
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>
    </Wrapper>
  );
};

export default SelectBar;
