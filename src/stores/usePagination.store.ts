import { create } from "zustand";
type TPost = {
    id: number;
    title: string;
    body: string;
  };
  
type TPagination = {
    currentPage : number,
    postPerPage : number,
    maxPageNum : number,
    pageActiveIdx :  number,
    isLoading : boolean,
    error : boolean,
    posts : TPost[],
    setCurrentPage: (page: number) => void;
    setPageActiveIdx: (idx: number) => void;
    setIsLoading: (loading: boolean) => void;
    setPosts: (posts: TPost[]) => void;
};

export const usePaginationStore = create<TPagination>((set) => ({
    currentPage : 1, //현재페이지
    postPerPage : 10, //한 페이지당 보여줄 포스트 수 
    maxPageNum : 5, // 한 페이지당 보이는 페이지네이션 번호
    pageActiveIdx : 0, // 현재 페이지 그룹
    isLoading : false,
    error : false,
    posts : [],
    setCurrentPage : (page) => set({currentPage : page}),
    setPageActiveIdx : (idx) => set({pageActiveIdx : idx}),
    setIsLoading: (loading) => set({isLoading : loading}),
    setPosts: (posts) => set({posts : posts})
}))