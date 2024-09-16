import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../../hooks/useTable";
import { TBoxScoreResponse, ThbattersAndvbatters } from "../../../../../types/game";
import { MainStatsLabel, MainStatsTable, MainStatsHeaderCell, RowTr, MainStatsCell } from "./HitRecordStyles"
import { useState } from "react";

const HitRecords = ({apiUrl} : {apiUrl: string}) => {

  const columnDefs: ColumnDef<ThbattersAndvbatters>[] = [
    { header: '타순', accessorKey: 'turn' },
    { header: '타자', accessorKey: 'name' },
    { header: '포지션', accessorKey: 'position' },
    { header: '1', accessorKey: 'inn1' },
    { header: '2', accessorKey: 'inn2' },
    { header: '3', accessorKey: 'inn3' },
    { header: '4', accessorKey: 'inn4' },
    { header: '5', accessorKey: 'inn5' },
    { header: '6', accessorKey: 'inn6' },
    { header: '7', accessorKey: 'inn7' },
    { header: '8', accessorKey: 'inn8' },
    { header: '9', accessorKey: 'inn9' },
    { header: '10', accessorKey: 'inn10' },
    { header: '11', accessorKey: 'inn11' },
    { header: '12', accessorKey: 'inn12' },
    { header: '타수', accessorKey: 'ab' },
    { header: '득점', accessorKey: 'run' },
    { header: '안타', accessorKey: 'hit' },
    { header: '타점', accessorKey: 'rbi' },
    { header: '타율', accessorKey: 'battingAverage' },
  ];

  const [homeTeam, setHomeTeam] = useState("홈팀");
  const [visitTeam, setVisitTeam] = useState("원정팀");
  const [sortedHomeData, setSortedHomeData] = useState<ThbattersAndvbatters[]>([]);
  const [sortedVisitData, setSortedVisitData] = useState<ThbattersAndvbatters[]>([]);

  const homeTable = useTable<ThbattersAndvbatters>({
    apiUrl: apiUrl,
    columnDefs,
    transformData: (data: TBoxScoreResponse) => {
      const homeLabel = data?.data?.schedule?.current?.home;
      setHomeTeam(homeLabel);
      if (data?.data?.hbatters) {
        const sortedData = data.data.hbatters
          .map(player => {
          const battingAverage = player.ab > 0 ? (player.hit / player.ab).toFixed(3) : '0.000';
          const turnValue = parseInt(player.turn, 10);
          const displayTurn = turnValue > 9 ? ((turnValue -1) % 9) + 1 : turnValue;
          return { ...player, turn: String(displayTurn), battingAverage: parseFloat(battingAverage) };
        })
        .sort((a,b) => parseInt(a.turn) - parseInt(b.turn));
        setSortedHomeData(sortedData);
        return sortedData;
      } else {
        console.error("홈팀 타자 데이터를 찾을 수 없습니다.", data);
        return [];
      }
    }
  });
  
  const visitTable = useTable<ThbattersAndvbatters>({
    apiUrl: apiUrl,
    columnDefs,
    transformData: (data: TBoxScoreResponse) => {
      const visitLabel = data?.data?.schedule?.current?.visit;
      setVisitTeam(visitLabel);
      if (data?.data?.vbatters) {
        const sortedData = data.data.vbatters
        .map(player => {
          const battingAverage = player.ab > 0 ? (player.hit / player.ab).toFixed(3) : '0.000';
          const turnValue = parseInt(player.turn, 10);
          const displayTurn = turnValue > 9 ? ((turnValue -1) % 9) + 1 : turnValue;
          return { ...player, turn: String(displayTurn), battingAverage: parseFloat(battingAverage) };
        })
        .sort((a,b)=> parseInt(a.turn) - parseInt(b.turn));
        setSortedVisitData(sortedData);
        return sortedData;
      } else {
        console.error("원정팀 타자 데이터를 찾을 수 없습니다.", data);
        return [];
      }
    }
  });

  return (
    <>
      <MainStatsLabel>{homeTeam} 타자 기록</MainStatsLabel>
      <MainStatsTable>
        <thead>
          {homeTable.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <MainStatsHeaderCell key={header.id} colSpan={header.colSpan}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </MainStatsHeaderCell>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {homeTable.getRowModel().rows.map((row,rowIndex) => (
            <RowTr key={row.id}>
              {row.getVisibleCells().map((cell,cellIndex) => (
                <MainStatsCell key={cell.id}>
                  {rowIndex === homeTable.getRowModel().rows.length-1 && cellIndex === 0 
                  ? "" : String(cell.getValue())}
                </MainStatsCell>
              ))}
            </RowTr>
          ))}
        </tbody>
      </MainStatsTable>
  
      <MainStatsLabel>{visitTeam} 타자 기록</MainStatsLabel>
      <MainStatsTable>
        <thead>
          {visitTable.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <MainStatsHeaderCell key={header.id} colSpan={header.colSpan}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </MainStatsHeaderCell>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {visitTable.getRowModel().rows.map((row,rowIndex) => (
            <RowTr key={row.id}>
              {row.getVisibleCells().map((cell,cellIndex) => (
                <MainStatsCell key={cell.id}>
                    {rowIndex === visitTable.getRowModel().rows.length-1 && cellIndex === 0 
                  ? "": String(cell.getValue())}
                </MainStatsCell>
              ))}
            </RowTr>
          ))}
        </tbody>
      </MainStatsTable>
    </>
  );
}
export default HitRecords;
