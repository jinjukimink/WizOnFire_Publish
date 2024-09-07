import { create } from "zustand";

type TLocationType = {
    selectedCategory : string,
    selectedSubCategory : string | null,
    selectedSidebar :  string | null,
    setSelectedCategory : (category : string) => void,
    setSelectedSubCategory : (subCategory : string | null) => void,
    setSelectedSidebar : (sidebar : string | null) => void,
}

export const useLocationStore = create<TLocationType>((set)=>({
    selectedCategory : "",
    selectedSubCategory : null,
    selectedSidebar : null,
    setSelectedCategory : (category) => set({selectedCategory : category}),
    setSelectedSubCategory : (subCategory) => set({selectedSubCategory : subCategory}),
    setSelectedSidebar : (sidebar) => set({selectedSidebar : sidebar}),
}));