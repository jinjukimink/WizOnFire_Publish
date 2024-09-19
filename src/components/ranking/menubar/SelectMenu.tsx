import {
    PitMenuSelected,
    SubMenuText,
} from "./SelectMenuStyles"

type TSubMenuType = {
    isSelected: boolean;
    children:React.ReactNode;
    left?: string;
}; 

const SelectMenu = ({isSelected, children}: TSubMenuType) => {
    return (
        <PitMenuSelected isSelected={isSelected}>
            <SubMenuText>
                {children}
            </SubMenuText>
        </PitMenuSelected>
    );
}
export default SelectMenu;