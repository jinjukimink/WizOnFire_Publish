import { ColumnDef, SortingState, Updater, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../hooks/useTable";
import SearchAndSelect from "../../../../components/ranking/searchAndSelect/SearchAndSelect";
import {
    BattRankingTable,
    BattRankingHeaderCell,
    BattRankingRow,
    BattRankingCell
} from "./css/BatterRankStyles";

type RankingTableProps<T> = {
    apiUrl: string;
    columnDefs?: ColumnDef<T>[]; 
    transformData?: (data: any) => T[];
    sorting: SortingState;
    onSortingChange: (updaterOrValue: Updater<SortingState>) => void;
};

const BatterRankTable = <T,>({
    apiUrl,
    columnDefs: customColumnDefs,
    transformData,
    sorting,
    onSortingChange
}: RankingTableProps<T>) => {

    const defaultColumnDefs: ColumnDef<T>[] = [
        { header: "선수명", accessorKey: "playerName", enableSorting: false },
        { header: "팀명", accessorKey: "teamName", enableSorting: false },
        { header: "타율", accessorKey: "avg", enableSorting: true }, //타율 = (안타 (hit) / 타수(ab))
        { header: "경기", accessorKey: "gamenum", enableSorting: true },
        { header: "타수", accessorKey: "ab", enableSorting: true },
        { header: "득점", accessorKey: "run", enableSorting: true },
        { header: "안타", accessorKey: "hit", enableSorting: true },
        { header: "2루타", accessorKey: "h2", enableSorting: true },
        { header: "3루타", accessorKey: "h3", enableSorting: true },
        { header: "홈런", accessorKey: "hr", enableSorting: true },
        { header: "타점", accessorKey: "rbi", enableSorting: true },
        { header: "도루", accessorKey: "sb", enableSorting: true },
        { header: "볼넷", accessorKey: "bb", enableSorting: true },
        { header: "사구", accessorKey: "hp", enableSorting: true },
        { header: "삼진", accessorKey: "kk", enableSorting: true },
        { header: "장타율", accessorKey: "slg", enableSorting: true },
        { header: "출루율", accessorKey: "obp", enableSorting: true },// 출루율 = (안타(hit) + 볼넷(bb) + 사구(hp)) / (타수(ab) + 볼넷(bb) + 사구(hp) + 희생플라이(sf))
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
        <BattRankingTable>
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <BattRankingRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                    <BattRankingHeaderCell
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        style={{ cursor: "pointer" }}
                    >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && "▼"}
                    </BattRankingHeaderCell>
                ))}
                </BattRankingRow>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map((row) => (
                <BattRankingRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <BattRankingCell key={cell.id}>
                    {String((cell.getValue()) ?? "")}
                    </BattRankingCell>
                ))}
                </BattRankingRow>
            ))}
            </tbody>
        </BattRankingTable>
    </>
    );
};

export default BatterRankTable;
