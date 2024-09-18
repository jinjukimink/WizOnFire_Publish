import { TBatterRankType } from "../types/ranking";

// transformData 함수
export const transformBatterData = (data: any) => {
    return (
        data?.data?.list.map((batter: TBatterRankType, index: number) => {
            const avg = batter.ab > 0 ? (batter.hit / batter.ab).toFixed(3): "0.000";
            const obp = (batter.ab + batter.bb + batter.hp) > 0 ? 
            ((batter.ab + batter.bb) / (batter.ab + batter.bb + batter.hp)).toFixed(3): "0.000";
            return {
                ...batter, 
                avg, 
                obp, 
                num: index + 1,
            };
        }) || []
    );
};