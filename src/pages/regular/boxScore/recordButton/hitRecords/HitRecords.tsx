import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../../hooks/useTable";
import { TBoxScoreResponse, ThbattersAndvbatters } from "../../../../../types/game";
import { MainStatsTable,MainStatsHeaderCell,RowTr, MainStatsCell } from "./HitRecordStyles"

const HitRecords = ({apiUrl} : {apiUrl: string}) => {

  const columnDefs : ColumnDef<ThbattersAndvbatters>[] = [
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
  ]

  const { getHeaderGroups,getRowModel } = useTable<ThbattersAndvbatters>({
    apiUrl:apiUrl,
    columnDefs,
    transformData: (data: TBoxScoreResponse) => {
      if(data?.data?.hbatters){
        return data.data.hbatters.map(player => {
          //타율계산 (안타 / 타수)
          const battingAverage = player.ab > 0 ? (player.hit / player.ab).toFixed(3) : '0.000';
          //turn 값을 숫자로 변환 (11타순이면 1로 만들기 위해)
          const turnValue = parseInt(player.turn,10);
          const disPlayTurn = turnValue >=11 ? turnValue - 10 : turnValue;
          
          return {...player, turn: String(disPlayTurn), battingAverage: parseFloat(battingAverage)};
        })
      } else {
        console.error("홈팀 타자 데이터를 찾을 수 없습니다.", data);
        return [];
    }
    }
  });

  return (
  <MainStatsTable>
      <thead>
        {getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <MainStatsHeaderCell key={header.id} colSpan={header.colSpan}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </MainStatsHeaderCell>
            ))}
          </tr>
        ))}
      </thead>
    <tbody>
      {getRowModel().rows.map((row, rowIndex) => (
        <RowTr key={row.id}>
          {row.getVisibleCells().map((cell, cellIndex) => (
            <MainStatsCell key={cell.id}>
              {rowIndex === getRowModel().rows.length-1 && cellIndex === 0
                ? "" :
                String(cell.getValue())}
            </MainStatsCell>
          ))}
        </RowTr>
      ))}
    </tbody>
  </MainStatsTable>
  );
}
export default HitRecords;