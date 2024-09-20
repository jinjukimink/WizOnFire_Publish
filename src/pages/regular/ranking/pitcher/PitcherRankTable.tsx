import { ColumnDef, SortingState, Updater, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../hooks/useTable";
import SearchAndSelect from "../../../../components/ranking/searchAndSelect/SearchAndSelect";
import {
    PitRankingTable,
    PitRankingHeaderCell,
    PitRankingRow,
    PitRankingCell
} from "./css/PitcherRankStyles";

type RankingTableProps<T> = {
    apiUrl: string;
    columnDefs?: ColumnDef<T>[]; 
    transformData?: (data: any) => T[];
    sorting: SortingState;
    onSortingChange: (updaterOrValue: Updater<SortingState>) => void;
};

const PitcherRankTable = <T,>({
    apiUrl,
    columnDefs: customColumnDefs,
    transformData,
    sorting,
    onSortingChange
}: RankingTableProps<T>) => {

    const defaultColumnDefs: ColumnDef<T>[] = [
        { header: "팀명", accessorKey: "teamName", enableSorting: false },
        { header: "선수명", accessorKey: "playerName", enableSorting: false },
        { header: "평균자책점", accessorKey: "era", enableSorting: true },
        { header: "경기수", accessorKey: "gamenum", enableSorting: true },
        { header: "승", accessorKey: "w", enableSorting: true },
        { header: "패", accessorKey: "l", enableSorting: true },
        { header: "세이브", accessorKey: "sv", enableSorting: true },
        { header: "홀드", accessorKey: "hold", enableSorting: true },
        { header: "승률", accessorKey: "wra", enableSorting: true },
        { header: "이닝", accessorKey: "inn", enableSorting: true },
        { header: "피안타", accessorKey: "hit", enableSorting: true },
        { header: "피홈런", accessorKey: "hr", enableSorting: true },
        { header: "볼넷", accessorKey: "bb", enableSorting: true },
        { header: "사구", accessorKey: "hp", enableSorting: true },
        { header: "탈삼진", accessorKey: "kk", enableSorting: true },
        { header: "실점", accessorKey: "r", enableSorting: true },
        { header: "자책점", accessorKey: "er", enableSorting: true },
    ];
    
    const columnDefs = customColumnDefs ? [...customColumnDefs, ...defaultColumnDefs] : defaultColumnDefs; 
    const table = useTable<T>({
        apiUrl,
        columnDefs,
        transformData,
        sorting,
        onSortingChange
    });

    return (
    <>
        <SearchAndSelect/>
        <PitRankingTable>
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <PitRankingRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                    <PitRankingHeaderCell
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        style={{ cursor: "pointer" }}
                    >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && "▼"}
                    </PitRankingHeaderCell>
                ))}
                </PitRankingRow>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map((row) => (
                <PitRankingRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <PitRankingCell key={cell.id}>
                    {String((cell.getValue()) ?? "")}
                    </PitRankingCell>
                ))}
                </PitRankingRow>
            ))}
            </tbody>
        </PitRankingTable>
    </>
    );
};

export default PitcherRankTable;