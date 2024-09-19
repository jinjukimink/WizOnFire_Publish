import {
    PitMenuSelected,
    SubMenuText,
    Triangle,
} from "./SelectMenuStyles"

type TSubMenuType = {
    isSelected: boolean;
    children:React.ReactNode;
    left?: string;
}; 

const SelectMenu = ({isSelected, children, left}: TSubMenuType) => {
    return (
        <PitMenuSelected isSelected={isSelected}>
            <Triangle left={left}/>
            <SubMenuText>
                {children}
            </SubMenuText>
        </PitMenuSelected>
    );
}
export default SelectMenu;