import { ColumnDef, flexRender } from '@tanstack/react-table';
import { useTableWithoutApi } from '../../../hooks/useTableWithoutApi';
import { TTotalRecordProps, TTotalRecords} from '../../../types/player';
import { HitRecordHeaderCell,HitRecordTable,HitRecordRow,HitRecordCell} from '../../../pages/regular/boxScore/recordButton/hitRecords/HitRecordStyles';
import { TableWrapper } from './RegularSeasonRecord';

const TotalRecord = ({totalRecords}:{totalRecords:TTotalRecords}) => {
    const columns:ColumnDef<TTotalRecordProps>[]=[
        {header:'연도',accessorKey:'gyear'},
        {header:'팀',accessorKey:'teamName'},
        {header:'평균자책점',accessorKey:'era'},
        {header:'경기',accessorKey:'gamenum'},
        {header: '완투', accessorKey: 'wCg' },  
        {header: '완봉', accessorKey: 'sho' }, 
        {header: '승', accessorKey: 'w' },                        
        {header: '패', accessorKey: 'l' },
        {header:'세',accessorKey:'sv'},
        {header:'홀',accessorKey:'hold'},
        {header: '승률', accessorKey: 'wra' },    
        {header:'타자',accessorKey:'hit'},
        {header:'이닝',accessorKey:'innDisplay'},
        {header:'피안타',accessorKey:'hit'},
        {header:'피홈런',accessorKey:"hr"},
        {header:'볼넷',accessorKey:'bb'},
        {header:'사구',accessorKey:'hp'},
        {header:'탈삼진',accessorKey:'kk'},
        {header:'실점',accessorKey:'r'},
        {header:'자책점',accessorKey:'er'}
    ]


    const rowTable=useTableWithoutApi<TTotalRecordProps>({
        data:totalRecords,
        columnDefs:columns,
    })

    const hasData = totalRecords && totalRecords.length > 0;

    
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
export default TotalRecord