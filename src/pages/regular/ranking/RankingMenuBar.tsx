import { useState } from "react";
import { RankingMenuContainer, RankingMenuBottomLine } from "./RankingMenuBarStyles"
import { GradientCircle } from "../../../components/common/gradientChip/GradientChipStyles";
import colors from "../../../assets/Colors";
import BatterRanking from "./batter/BatterRanking";
import TeamRanking from "./team/TeamRanking";
import PitcherRanking from "./pitcher/PitcherRanking";
import AudienceStatus from "./audience/AudienceStatus";

const RankingMenuBar = () => {
    const menu = [
        {title: "팀순위", component: <TeamRanking />},
        {title: "투수순위", component: <PitcherRanking/>},
        {title: "타자순위", component: <BatterRanking />},
        {title: "관중현황", component: <AudienceStatus />},
    ]

    const [selectedMenu, setSelectedMenu] = useState("팀순위");
    const handleClick = (title: string) => {
        setSelectedMenu(title);
    };

    return (
    <>
        <RankingMenuContainer>
            {
                menu.map((item)=>(
                    <GradientCircle
                        key={item.title}
                        width="80px"
                        height="25px"
                        margin="0 5px 0 0"
                        fontFamily="KBO_Gothic_bold"
                        color={ selectedMenu === item.title ? colors.white : colors.black}
                        backgroundColor={ selectedMenu === item.title ? colors.redGradient : colors.white}
                        onClick={()=>handleClick(item.title)}
                    >
                        {item.title}
                    </GradientCircle>
                ))
            }
        </RankingMenuContainer>
        <RankingMenuBottomLine/>
        <div>
            {
                menu.find(item => item.title === selectedMenu)?.component
            }
        </div>
    </>
);
}
export default RankingMenuBar;