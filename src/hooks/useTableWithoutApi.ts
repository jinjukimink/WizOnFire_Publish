import { useMemo } from "react";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";

type TableParams<TData> = {
    data: TData[]; // 데이터를 프롭으로 받음
    columnDefs: ColumnDef<TData>[];
};

export const useTableWithoutApi = <TData,>({
    data, // apiUrl 대신 data를 바로 받음
    columnDefs
}: TableParams<TData>) => {

    const columns = useMemo(() => columnDefs, [columnDefs]);
    const table = useReactTable({
        data, // 프롭으로 받은 데이터를 바로 사용
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return table;
};
