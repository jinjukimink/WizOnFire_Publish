import { ColumnDef, flexRender } from '@tanstack/react-table';
import { useTableWithoutApi } from '../../../hooks/useTableWithoutApi';
import { TRecent5RecordProps, TRecent5Records} from '../../../types/player';
import { HitRecordHeaderCell,HitRecordTable,HitRecordRow,HitRecordCell} from '../../../pages/regular/boxScore/recordButton/hitRecords/HitRecordStyles';
import { TableWrapper } from './RegularSeasonRecord';

const Recent5Record = ({recent5gameRecords}:{recent5gameRecords:TRecent5Records}) => {
  const columns:ColumnDef<TRecent5RecordProps>[]=[
    {header:'일자',accessorKey:'displayDate'},
    {header:'상대', accessorKey:'matchTeamName'},
    {header:'결과',accessorKey:'wls',
    cell:({getValue})=>{
        const result=getValue<string>();
        return result==='W'?'승':result==='L'?'패':result;
    },
},
    {header:'평균자책점',accessorKey:'er'},
    {header:'타자',accessorKey:'hit'},
    {header:'이닝',accessorKey:'innDisplay'},
    {header:'피안타',accessorKey:'hit'},
    {header:'피홈런',accessorKey:"hr"},
    {header:'볼넷',accessorKey:'bb'},
    {header:'사구',accessorKey:'hp'},
    {header:'탈삼진',accessorKey:'kk'},
    {header:'실점',accessorKey:'r'},
    {header:'자책점',accessorKey:'er'}
  ];
  const rowTable=useTableWithoutApi<TRecent5RecordProps>({
    data:recent5gameRecords,
    columnDefs:columns
  })
 // console.log(rowTable)
  const hasData = recent5gameRecords && recent5gameRecords.length > 0;
  
    return (
    <>
      <TableWrapper>
        <HitRecordTable>
            <thead>
                {rowTable.getHeaderGroups().map((headerGroup)=>(
                    <HitRecordRow key={headerGroup.id}>
                        {headerGroup.headers.map(header=>(
                            <HitRecordHeaderCell key={header.id} colSpan={header.colSpan}>
                                {flexRender(header.column.columnDef.header,header.getContext())}
                            </HitRecordHeaderCell>
                        ))}
                    </HitRecordRow>
                ))}
            </thead>
            <tbody>
                {hasData ? (
                            rowTable.getRowModel().rows.map(row => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <HitRecordCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </HitRecordCell>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <HitRecordRow>
                                <HitRecordCell colSpan={columns.length}>
                                    데이터가 없습니다.
                                </HitRecordCell>
                            </HitRecordRow>
                        )}
            </tbody>


        </HitRecordTable>
      </TableWrapper>
    </>
  );
}
export default Recent5Record