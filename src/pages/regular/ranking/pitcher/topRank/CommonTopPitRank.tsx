import { useState, useEffect } from "react";
import styled from "styled-components";
import useFetchData from "../../../../../hooks/useFetchData";
import colors from "../../../../../assets/Colors";

const AvgPitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 100px;
`;

const AvgPitImgBlend = styled.div<{ imageUrl: string }>`
    display: flex;
    width: 160px;
    height: 250px;
    border-radius: 60px;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    mix-blend-mode: screen;
    scale: 65%;
`;

const AvgPitText = styled.div`
    width: 37%;
    height: auto;
    text-align: center;
    h1 {
        margin: 0;
        padding: 0;
        color: ${colors.redQuaternary};
    }
    h4 {
        margin: 0;
        padding: 0;
    }
`;

const AvgPitImg = styled.div`
    display: flex;
    li {
        width: 115px;
        display: flex;
        list-style: none;
        flex-direction: column;
        mix-blend-mode: multiply;
        &:first-child {
            position: relative;
            z-index: 42;
            order: 2;
            scale: 130%;
        }
        &:nth-child(2) {
            position: relative;
            z-index: 43;
            order: 1;
        }
        &:nth-child(3) {
            position: relative;
            z-index: 44;
            order: 3;
        }
    }
`;

const AvgPitName = styled.div`
display: flex;
    width: 100%;
    gap: 40px;
    margin-bottom: 80px;
    justify-content: center;
    li {
        list-style: none;
        span {
            margin-right: 10px;
        }
        &:first-child {
            order: 2;
            font-weight: 600;
        }
        &:nth-child(2) {
            order: 1;
        }
        &:nth-child(3) {
            order: 3;
        }
    }
`;

type TTopConditionRankType = {
    imageUrl?: string;
    condition: string;
    children: React.ReactNode;
};

interface FetchDataResponse<T> {
    data?: {
        list?: T[];
    };
}

const CommonTopPitRank = ({ imageUrl, condition, children }: TTopConditionRankType) => {
    const [apiUrl, setApiUrl] = useState<string>("");

    // API URL 설정
    useEffect(() => {
        if (condition === "pitcherEra") {
            setApiUrl("/game/rank/pitcher/era/top3");
        } else if (condition === "pitcherWins") {
            setApiUrl("/game/rank/pitcher/win/top3");
        } else if (condition === "batterHra") {
            setApiUrl("/api/game/rank/batter/hra/top3");
        } else if (condition === "batterHr") {
            setApiUrl("/api/game/rank/batter/hr/top3");
        }
    }, [condition]);

    let transformedData: any[] = [];

    const { data } = useFetchData<FetchDataResponse<any>>(apiUrl);  
    if (data && data?.data?.list) {
        transformedData = data?.data?.list || [];
    }

    if (transformedData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <AvgPitContainer>
            <AvgPitText>{children}</AvgPitText>
            <AvgPitImg>
                {transformedData.map((player, index) => (
                    <li key={index}>
                        <AvgPitImgBlend imageUrl={player.playerPrvwImg || imageUrl || 'defaultImageUrl.jpg'} />
                    </li>
                ))}
            </AvgPitImg>
            <AvgPitName>
                {transformedData.map((player, index) => (
                    <li key={index}>
                        <span>{index + 1})</span>
                        <span>{player.playerName}</span>
                    </li>
                ))}
            </AvgPitName>
        </AvgPitContainer>
    );
};

export default CommonTopPitRank;
