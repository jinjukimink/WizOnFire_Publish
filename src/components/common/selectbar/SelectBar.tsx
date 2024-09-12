import { useState } from 'react';
import { Container, Label, IconWrapper, ItemList, Item,TSelectBar } from './SelectBarStyles';

const SelectBar = ({
  items,
  width,
  height,
  placeholder,
  containerPadding,
  labelPadding,
  itemListPadding,
  itemPadding,
  labelTextSize,
  itemTextSize,
  textAlign,
  containerBorder,
  itemListBorder,
  containerBorderRadius,
  itemListBorderRadius,
  maxHeight,
  boxShadow,
  buttonIcon: ButtonIcon,
}: TSelectBar) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  
  const handleItemClick = (item: { label: string; url: string }) => {
    setSelectedItem(item.label);
    setIsOpen(false);
    window.open(item.url, '_blank');
  };

  return (
    <Container
      width={width}
      height={height}
      border={containerBorder} borderRadius={containerBorderRadius} padding={containerPadding}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Label  textAlign={textAlign} textSize={labelTextSize} padding={labelPadding}>
        {selectedItem || placeholder}
      </Label>
      {ButtonIcon && (
          <IconWrapper>
            <ButtonIcon />
          </IconWrapper>
        )}

      {isOpen && (
        <ItemList border={itemListBorder} borderRadius={itemListBorderRadius} padding={itemListPadding} maxHeight={maxHeight} boxShadow={boxShadow}>
          {items.map((item) => (
            <Item
              key={item.label}
              padding={itemPadding}
              textAlign={textAlign}
              textSize={itemTextSize}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </Item>
          ))}
        </ItemList>
      )}
    </Container>
  );
};

export default SelectBar;
