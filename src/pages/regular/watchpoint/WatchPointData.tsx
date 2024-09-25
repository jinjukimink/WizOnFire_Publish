// import { useEffect, useState } from "react";
// import useFetchData from "../../../hooks/useFetchData";
// import { TGameData, TGameResponse } from "../../../types/landing";
// import { TWatchPointResponse } from "../../../types/game";

// const WatchPointData = () => {
//     const { data: game } = useFetchData<TGameResponse>("/game/recentGames");
//     const current: TGameData | undefined = game?.data?.current;
  
//     const [apiUrl, setApiUrl] = useState<string>("");
//     const [gameData, setGameData] = useState<TWatchPointResponse | null>(null);
//     const [pitcherData, setPitcherData] = useState<any[]>([]); // 새로운 투수 데이터 상태
  
//     // 계산된 승률
//     const calculatedWinRate = gameData
//       ? (
//           gameData?.data.visitTeamWinLose?.win! /
//           (gameData.data.visitTeamWinLose?.win! + gameData.data.visitTeamWinLose?.lose!)
//         ).toFixed(3)
//       : 0;
  
//     const transformData = (data: TWatchPointResponse) => {
//       setGameData(data);
  
      
//       const homePitcher = data.data.homePitcher;
//       const visitPitcher = data.data.visitPitcher;
//       const transformedPitcherData = [
//         {
//           team: data.data.gameScore?.home,
//           name: homePitcher?.playerName,
//           era: homePitcher?.era,
//           games: homePitcher?.gamenum,
//           wins: homePitcher?.w,
//           losses: homePitcher?.l,
//           saves: homePitcher?.sv,
//           holds: homePitcher?.hold,
//           winRate: homePitcher?.wra,
//           innings: homePitcher?.innDisplay,
//           hits: homePitcher?.hit,
//           homeRuns: homePitcher?.hr,
//           walks: homePitcher?.bb,
//           hitByPitch: homePitcher?.hp,
//           strikeouts: homePitcher?.kk,
//           runsAllowed: homePitcher?.r,
//           earnedRuns: homePitcher?.er,
//         },
//         {
//           team: data.data.gameScore?.visit,
//           name: visitPitcher?.playerName,
//           era: visitPitcher?.era,
//           games: visitPitcher?.gamenum,
//           wins: visitPitcher?.w,
//           losses: visitPitcher?.l,
//           saves: visitPitcher?.sv,
//           holds: visitPitcher?.hold,
//           winRate: visitPitcher?.wra,
//           innings: visitPitcher?.innDisplay,
//           hits: visitPitcher?.hit,
//           homeRuns: visitPitcher?.hr,
//           walks: visitPitcher?.bb,
//           hitByPitch: visitPitcher?.hp,
//           strikeouts: visitPitcher?.kk,
//           runsAllowed: visitPitcher?.r,
//           earnedRuns: visitPitcher?.er,
//         },
//       ];
//       setPitcherData(transformedPitcherData);
  
//       // 기존 테이블 데이터 변환
//       return [
//         {
//           win: data.data.homeTeamRank?.win,
//           lose: data.data.homeTeamRank?.lose,
//           drawn: data.data.homeTeamRank?.drawn,
//           wra: data.data.homeTeamRank?.wra,
//           vs: '시즌 성적',
//           win2: data.data.visitTeamRank?.win,
//           lose2: data.data.visitTeamRank?.lose,
//           drawn2: data.data.visitTeamRank?.drawn,
//           wra2: data.data.visitTeamRank?.wra,
//         },
//         {
//           win: data.data.homeTeamWinLose?.win,
//           lose: data.data.homeTeamWinLose?.lose,
//           drawn: data.data.homeTeamWinLose?.drawn,
//           wra: calculatedWinRate, // calculatedWinRate를 wra로 사용
//           vs: '시즌 상대 전적',
//           win2: data.data.visitTeamWinLose?.win,
//           lose2: data.data.visitTeamWinLose?.lose,
//           drawn2: data.data.visitTeamWinLose?.drawn,
//           wra2: calculatedWinRate, // calculatedWinRate를 wra로 사용
//         },
//         {
//           win: `${data.data.homeTeamRank?.rank}위`,
//           lose: '', // 빈 칸 처리
//           drawn: '', // 빈 칸 처리
//           wra: '', // 빈 칸 처리
//           vs: '시즌 순위',
//           win2: `${data.data.visitTeamRank?.rank}위`,
//           lose2: '', // 빈 칸 처리
//           drawn2: '', // 빈 칸 처리
//           wra2: '', // 빈 칸 처리
//           isRankRow: true, // 마지막 행 표시
//         },
//       ];
//     };
  
//     useEffect(() => {
//       if (current) {
//         setApiUrl(`/game/watchpoint?gameDate=${current.gameDate}&gmkey=${current.gmkey}`);
//       }
//     }, [current]);
  
//     const handleNextGame = () => {
//       if (gameData?.data?.schedule?.next) {
//         const nextGameDate = gameData.data.schedule.next.gameDate;
//         const nextGmkey = gameData.data.schedule.next.gmkey;
//         setApiUrl(`/game/watchpoint?gameDate=${nextGameDate}&gmkey=${nextGmkey}`);
//       }
//     };
  
//     const handlePrevGame = () => {
//       if (gameData?.data?.schedule?.prev) {
//         const prevGameDate = gameData.data.schedule.prev.gameDate;
//         const prevGmkey = gameData.data.schedule.prev.gmkey;
//         setApiUrl(`/game/watchpoint?gameDate=${prevGameDate}&gmkey=${prevGmkey}`);
//       }
//     };
  
//     return {
//       apiUrl,
//       gameData,
//       pitcherData, // 새로운 투수 데이터 추가
//       transformData,
//       calculatedWinRate,
//       handleNextGame,
//       handlePrevGame,
//     };
//   };
  
//   export default WatchPointData;
