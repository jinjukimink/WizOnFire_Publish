import { useState } from "react";
import MainStats from "./recordButton/mainRecords/MainRecords";
import HitRecords from "./recordButton/hitRecords/HitRecords";
import PitchRecords from "./recordButton/pitchRecords/PitchRecords";
import { MenuContainer } from "./MenuBarStyles"
import { GradientCircle } from "../../../components/common/gradientChip/GradientChipStyles";
import colors from "../../../assets/Colors";

const MenuBar = ({apiUrl} : {apiUrl: string}) => {
    const menu = [
        {title: "주요기록", component: <MainStats apiUrl={apiUrl}/>},
        {title: "타자기록", component: <HitRecords apiUrl={apiUrl}/>},
        {title: "투수기록", component: <PitchRecords apiUrl={apiUrl}/>},
    ]

    const [selectedMenu, setSelectedMenu] = useState("주요기록");
    const handleClick = (title: string) => {
        setSelectedMenu(title);
    };

    return (
    <>
        <MenuContainer>
            {
                menu.map((item)=>(
                    <GradientCircle
                        key={item.title}
                        width="80px"
                        height="25px"
                        fontFamily="KBO_Gothic_bold"
                        color={ selectedMenu === item.title ? colors.white : colors.black}
                        backgroundColor={ selectedMenu === item.title ? colors.redGradient : colors.white}
                        onClick={()=>handleClick(item.title)}
                    >
                        {item.title}
                    </GradientCircle>
                ))
            }
        </MenuContainer>
        <div>
            {
                menu.find(item => item.title === selectedMenu)?.component
            }
        </div>
    </>
);
}
export default MenuBar