import React, { useState } from 'react';
import styled from 'styled-components';

export type TSelectBar = {
  options: { label: string; url: string }[];
  width?: string;
  height?: string;
  placeholder?: string;
  textSize?: string;
  textAlign?: 'left' | 'center' | 'right';
  border?: string;
  borderRadius?: string;
  padding?: string;
  optionListPadding?: string;
  optionPadding?: string;
  buttonIcon?: React.ComponentType;
};

export const Container = styled.div<{
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width || '254px'};
  height: ${({ height }) => height || '42px'};
  position: relative;
  cursor: pointer;
`;

export const Label = styled.div<{
  padding?: string;
  textSize?: string;
  textAlign?: 'left' | 'center' | 'right';
  border?: string;
 borderRadius?: string;
}>`
  background-color: #fff;
  border: ${({ border }) => border || '1px solid gray'};
  border-radius: ${({ borderRadius }) => borderRadius || '7px'};
  padding: ${({ padding }) => padding || '0'};
  box-sizing: border-box;
  font-size: ${({ textSize }) => textSize || '13px'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  padding: ${({ padding }) => padding || '13px 16px'};
  display: flex;
  align-items: center;
  justify-content: ${({ textAlign }) =>
    textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start'};
`;

export const IconWrapper = styled.div`
  display: flex;
  font-size: 20px;
  margin-left: auto;
`;

export const OptionList = styled.ul<{
  border?: string;
  borderRadius?: string;
  padding?: string;
}>`
  width: 100%;
  position: absolute;
  margin: 0;
  background-color: #fff;
  z-index: 1000;
  border: ${({ border }) => border || '1px solid gray'};
  border-radius: ${({ borderRadius }) => borderRadius || '7px'};
  padding: ${({ padding }) => padding || '8px'};
  box-sizing: border-box;
  list-style-type: none;
  max-height: 200px;
  overflow-y: auto;
`;

export const Option = styled.li<{
  textSize?: string;
  textAlign?: 'left' | 'center' | 'right';
  padding?: string;
}>`
  font-size: ${({ textSize }) => textSize || '14px'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  padding: ${({ padding }) => padding || '8px 0'};
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const SelectBar: React.FC<TSelectBar> = ({
  options,
  width,
  height,
  placeholder,
  textSize,
  textAlign,
  border,
  borderRadius,
  padding,
  optionListPadding,
  buttonIcon: ButtonIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: { label: string; url: string }) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    window.location.href = option.url;
  };

  return (
    <Container
      width={width}
      height={height}

      onClick={() => setIsOpen(!isOpen)}
    >
      <Label border={border} borderRadius={borderRadius} padding={padding} textAlign={textAlign} textSize={textSize}>
        {selectedOption || placeholder}
        {ButtonIcon && (
          <IconWrapper>
            <ButtonIcon />
          </IconWrapper>
        )}
      </Label>
      {isOpen && (
        <OptionList border={border} borderRadius={borderRadius} padding={optionListPadding}>
          {options.map((option) => (
            <Option
              key={option.label}
              textSize={textSize}
              textAlign={textAlign}
              padding={optionListPadding}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </Option>
          ))}
        </OptionList>
      )}
    </Container>
  );
};

export default SelectBar;
