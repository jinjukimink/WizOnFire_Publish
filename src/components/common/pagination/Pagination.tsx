import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { usePaginationStore } from "../../../stores/usePagination.store";

const PaginationContainer = styled.div`
    max-width: 100%;
    width: 1100px;
    height: 25px;
    margin-top: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Pagination = () => {

  const {
    currentPage,
    postPerPage,
    maxPageNum,
    pageActiveIdx,
    isLoading,
    error,
    posts,
    setCurrentPage,
    setPageActiveIdx,
    setIsLoading,
    setPosts
  } = usePaginationStore();
  /*
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const postPerPage = 10; // 한 페이지당 보여줄 포스트 수
  const maxPageNum = 5; // 한 페이지당 보이는 페이지네이션 번호
  const [pageActiveIdx, setPageActiveIdx] = useState(0); // 현재 페이지 그룹
  const [isloading,setIsLoading] = useState(false);
  const [error,setError] = useState(false);
  const [posts,setPosts] = useState<TPost[]>([]);

const { data: posts, isLoading, error } = useFetchData<TPost[]>('https://jsonplaceholder.typicode.com/posts');
*/

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    fetchPosts();
  },[])
  
  const pageCount = Math.ceil(posts.length / postPerPage);
  const postsNumber = Array.from({ length: pageCount }, (_, i) => i + 1);

  const totalPageCount = Math.ceil(pageCount / maxPageNum);
  const startNum = pageActiveIdx * maxPageNum;
  const endNum = startNum + maxPageNum;
  const pageNationNumbers = postsNumber.slice(startNum, endNum);


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <PaginationContainer>
      {pageActiveIdx > 0 && (
        <button onClick={() => setPageActiveIdx(pageActiveIdx - 1)}>이전</button>
      )}
      {pageNationNumbers.map(number => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
        >
          {number}
        </button>
      ))}
      {pageActiveIdx < totalPageCount - 1 && (
        <button onClick={() => setPageActiveIdx(pageActiveIdx + 1)}>다음</button>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
