import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { usePaginationStore } from "../../../stores/usePagination.store";
import Button from "../button/Button";

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

  /*
  width:string;
    height:string;
    borderRadius?:string;
    children?: React.ReactNode;//자식 타입 설정
    onClick?:()=>void;
    fontColor?:string;
    fontSize?:string;
    backgroundColor?:string;
    marginLeft?:string;
    marginRight?:string;
    border?:string;
    padding?:string;
    type?:string;
*/

// background-color: ${({ isActive, backgroundColor})=> isActive ? colors.redPrimary : backgroundColor};
//     font-size: ${({fontSize})=>fontSize};
//     color:${({ isActive, fontColor})=> isActive ? colors.white : fontColor};

  return (
    <PaginationContainer>
     
      {pageActiveIdx > 0 && (
        <button onClick={() => setPageActiveIdx(pageActiveIdx - 1)}>이전</button>
      )}
      {pageNationNumbers.map(number => (
          <Button width="40px"
          height="40px"
          fontColor="black"
          borderRadius="50%"
          border="1px solid #333"
          margin="0 3px"
          backgroundColor="white"
          key={number}
          isActive={currentPage === number}
          onClick={() => setCurrentPage(number)}
          >{number}</Button>  
        // <button
        //   key={number}
        //   onClick={() => setCurrentPage(number)}
        //   style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
        // >
        //   {number}
        // </button>
      ))}
      {pageActiveIdx < totalPageCount - 1 && (
        <button onClick={() => setPageActiveIdx(pageActiveIdx + 1)}>다음</button>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
