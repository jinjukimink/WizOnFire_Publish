import { create } from "zustand";

type TRankStoreType = {
    year: string;
    setYear: (year: any) => void;
};

export const useRankStore = create<TRankStoreType>((set) => ({
    year : "2024",
    setYear: (year) => set({year : year})
}));