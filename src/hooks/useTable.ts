import { useState, useEffect, useMemo } from "react";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import axios from "axios";

type TableParams<TData> = {
    apiUrl: string;
    columnDefs: ColumnDef<TData>[];
    transformData?: (data: any) => TData[];
};

export const useTable = <TData,>({
    apiUrl,
    columnDefs,
    transformData
}: TableParams<TData>) => {

    const [data, setData] = useState<TData[]>([]); 
    const BASE_URL = import.meta.env.VITE_BASE_URL || '';

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}${apiUrl}`); 
            const resultData = transformData ? transformData(response.data) : response.data;
            console.log('Fetched data:', response.data); 
            setData(resultData);
        } catch (error) {
            console.error("데이터를 가져오는데 실패했습니다.", error);
        }
    };
    useEffect(() => {
        if (apiUrl) {
            fetchData();
        }
    }, [apiUrl]);

    const columns = useMemo(() => columnDefs, [columnDefs]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return table;
};
