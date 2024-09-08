import { useEffect, useState } from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
    max-width: 100%;
    width: 1100px;
    height: 25px;
    margin-top: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Pagination = () => {
  //API 저장 state
  const [posts, setPosts] = useState([]); //axios로 받아 온 데이터 저장
  const [loading, setLoading] = useState(false); // db받는동안 로딩
  //페이지 index
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10; //한페이지당 보여줄 데이터 개수
  //페이지네이션 그룹화
  const [pageActiveIdx, setPageActiveIdx]= useState(0); //현재 보고있는 페이지 그룹 = 몇번째 페이지네이션을 리랜더할지
  const maxPageNum = 5; //한 페이지당 보이는 페이지네이션 번호 [1,2,3,4,5]
 

  useEffect(()=>{
    const fetchPosts = async () => {

    };
    fetchPosts();
  },[]);

  return (
    <PaginationContainer>
      Pagination Component
    </PaginationContainer>
  );
}
export default Pagination