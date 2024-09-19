import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../../hooks/useTable";
import { TBoxScoreResponse, TScheduleInfo, TScoreboard } from "../../../../../types/game";
import {
    ScoreBoxWrapper,
    ScoreArrowAndInfoBox,
    ScoreWrapper,
    ScoreTable,
    ScoreHeaderCell,
    ScoreRow,
    ScoreCell,
    ScoreArrowBox,
    ScoreInfo,
} from "./ScoreStyles"
import ScoreBox from "../../../../landing/teamMatch/ScoreBox";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

type TScoreType = {
    apiUrl: string;
    width?: string;
}

const Score = ({apiUrl, width} : TScoreType) => {
    const [index,setIndex] = useState(1);
    const [game,setGame] = useState<TScheduleInfo[]>([]); // prev, current, next를 한 배열로 저장
    const [currentGame,setCurrentGame] = useState<TScheduleInfo | null>(null); // 화면에 보여줄 게임

    const columnDefs: ColumnDef<TScoreboard>[] = [
        { header: '팀', accessorKey: 'bhomeName' },
        { header: '1', accessorKey: 'score1' },
        { header: '2', accessorKey: 'score2' },
        { header: '3', accessorKey: 'score3' },
        { header: '4', accessorKey: 'score4' },
        { header: '5', accessorKey: 'score5' },
        { header: '6', accessorKey: 'score6' },
        { header: '7', accessorKey: 'score7' },
        { header: '8', accessorKey: 'score8' },
        { header: '9', accessorKey: 'score9' },
        { header: '10', accessorKey: 'score10' },
        { header: '11', accessorKey: 'score11' },
        { header: '12', accessorKey: 'score12' },
        { header: 'R', accessorKey: 'run' },
        { header: 'H', accessorKey: 'hit' },
        { header: 'E', accessorKey: 'error' },
        { header: 'B', accessorKey: 'ballfour' },
    ];

    const { getHeaderGroups, getRowModel } = useTable({
        apiUrl: apiUrl,
        columnDefs,
        transformData: (data: TBoxScoreResponse) => {
            const { prev, current, next } = data?.data?.schedule;
            const filterGame = [prev, current, next].filter(Boolean); 
            console.log('1개의 게임배열 (이전/현재/다음):', filterGame);
            setGame(filterGame);  
            return data?.data?.scoreboard;
        }
    });
    
    useEffect(() => {
        if (game.length > 0 && index >= 0 && index < game.length) {
            console.log('현재 인덱스:', index);
            console.log('게임 배열:', game);
            console.log('현재 게임:', game[index]);
            setCurrentGame(game[index]); 
        }
    }, [game, index]); 
    const onChangePrevGame = () => {
        if (index > 0) {
            setIndex(index - 1); 
        } else {
            console.log('이전 게임이 없습니다.');
        }
    }

    const onChangeNextGame = () => {
        if (index < game.length - 1) {
            setIndex(index + 1); 
        } else {
            console.log('다음 게임이 없습니다.');
        }
    }

    return (
        <>
        <ScoreWrapper>
            <ScoreArrowAndInfoBox>
                <ScoreArrowBox>
                    <FaAngleLeft
                        onClick={onChangePrevGame}
                        style={{ scale: "200%" }}
                    />
                    <ScoreInfo>
                        <span>{`${currentGame?.gyear}년 ${currentGame?.gmonth}월 ${currentGame?.gday}일`}</span>
                        <div>
                            <span>{`${currentGame?.gtime}${currentGame?.stadium}`}</span>
                            <span>|</span>
                            <span>{`관중: ${currentGame?.crowdCn.toLocaleString()}명`}</span>
                        </div>
                    </ScoreInfo>
                    <FaAngleRight
                        onClick={onChangeNextGame}
                        style={{ scale: "200%" }}
                    />
                </ScoreArrowBox>
            </ScoreArrowAndInfoBox>
            <ScoreBoxWrapper>
                <ScoreBox
                    scale="80%"
                    margin="-40px 0 30px 0"
                    width="200px"
                    height="200px"
                    backgroundColor="white"
                    imageSrc={currentGame?.homeLogo}
                    teamName={currentGame?.homeKey}
                    score={currentGame?.hscore}
                />
                <ScoreBox
                    scale="80%"
                    margin="-40px 0 30px 0"
                    width="200px"
                    height="200px"
                    backgroundColor="white"
                    hiddenLeft="95%"
                    scoreLeft="83%"
                    transform="50%"
                    imageSrc={currentGame?.visitLogo}
                    teamName={currentGame?.visitKey}
                    score={currentGame?.vscore}
                />
            </ScoreBoxWrapper>
        </ScoreWrapper>
        <ScoreTable>
            <thead>
                {getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <ScoreHeaderCell key={header.id} colSpan={header.colSpan}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </ScoreHeaderCell>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {getRowModel().rows.map(row => (
                    <ScoreRow key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <ScoreCell key={cell.id}>
                                {String(cell.getValue())}
                            </ScoreCell>
                        ))}
                    </ScoreRow>
                ))}
            </tbody>
        </ScoreTable>
        </>
    );
}

export default Score;