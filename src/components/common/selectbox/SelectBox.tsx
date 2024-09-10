import { useEffect, useState } from "react";
import { Box, Down, Item, ItemList, Label, TSelectBox } from "./SelectBoxStyles";

const SelectBox = ({
    items,
    placeholder,
    boxwidth,
    boxheight,
    boxPadding,
    border,
    borderRadius,
    boxBackgroundColor,
    textSize,
    labelTextColor,
    itemTextColor,
    listBackgroundColor,
    itemListPadding,
    itemPadding,
    iconSize,
}:TSelectBox) => {
    const [isOpen , setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    
    const handleItemClick = (item: { label: string; }) => {
        setSelectedItem(item.label);
      };
    
    // useEffect(() => {
    //     console.log(selectedItem);
    //   }, [selectedItem]);
    
    return (
    <Box 
        onClick={()=>setIsOpen(()=>(!isOpen))}
        width={boxwidth}
        height={boxheight}
        padding={boxPadding}
        border={border}
        borderRadius={borderRadius}
        backgroundColor={boxBackgroundColor}
      >
        <Label
            textSize={textSize}
            textColor={labelTextColor}
        >{selectedItem || placeholder}</Label>
        <Down iconSize={iconSize}/>
        <ItemList 
            isOpen={isOpen}
            backgroundColor={listBackgroundColor}
            padding={itemListPadding}
            textColor={itemTextColor}
            >
            {items.map((item) => (
            <Item
                padding={itemPadding}
                textSize={textSize}
                key={item.label} onClick={() => handleItemClick(item)}>
            {item.label}
            </Item>))}
        </ItemList>
    </Box>
  );
}
export default SelectBox