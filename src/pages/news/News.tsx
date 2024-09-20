import useFetchData from '../../hooks/useFetchData';
import { NewsContainer, NewsList, NewsItem, Title, MetaInfo, Views, SearchBarWrapper, Pagination } from './NewsStyles';
import { useState, useEffect } from 'react';
import Button from '../../components/common/button/Button';
import SearchBar from '../../components/common/searchbar/SearchBar';
import colors from '../../assets/Colors';

interface Article {
  artcSeq: number;
  artcTitle: string;
  viewCnt: number;
  regDttm: number;
  artcContents: string;
}

interface ApiResponse {
  data: {
    list: Article[];
  };
}

const formatArticleContents = (contents: string) => {
  const baseUrl = 'https://wizzap.ktwiz.co.kr/';
  return contents.replace(/src="\/files/g, `src="${baseUrl}/files`);
};

const News = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, isLoading, error } = useFetchData<ApiResponse>(`article/newslist?searchWord=${searchTerm}`);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [currentItems, setCurrentItems] = useState<Article[]>([]);
  const [startPage, setStartPage] = useState(1);
  const maxVisibleButtons = 5;

  useEffect(() => {
    if (data && data.data && data.data.list) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentItems(data.data.list.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage, data]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectedArticle(null);

    if (pageNumber > startPage + maxVisibleButtons - 1) {
      setStartPage(startPage + maxVisibleButtons);
    } else if (pageNumber < startPage) {
      setStartPage(Math.max(pageNumber - maxVisibleButtons + 1, 1));
    }
  };

  const totalPages = Math.ceil((data?.data?.list.length || 0) / itemsPerPage);
  const endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

  const handleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleSearchSubmit = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <NewsContainer>
      <SearchBarWrapper>
        <SearchBar 
          containerWidth="15%" 
          height="40px" 
          lineHeight="1.5" 
          buttonWidth="60px" 
          placeholder="검색어를 입력해주세요"
          // onSearch={handleSearchSubmit}
        />
      </SearchBarWrapper>
      {selectedArticle ? (
        <div>
          <Title>{selectedArticle.artcTitle}</Title>
          <MetaInfo>
            <Views>Views: {selectedArticle.viewCnt}</Views>
          </MetaInfo>
          <div dangerouslySetInnerHTML={{ __html: formatArticleContents(selectedArticle.artcContents) }} />
          <Button 
            onClick={() => setSelectedArticle(null)} 
            backgroundColor={colors.black} 
            fontColor={colors.white} 
            padding="10px 15px"
          >
            돌아가기
          </Button>
        </div>
      ) : (
        <>
          <NewsList>
            {currentItems.length > 0 ? (
              currentItems.map((article: Article) => (
                <NewsItem key={article.artcSeq} onClick={() => handleClick(article)}>
                  <Title>{article.artcTitle}</Title>
                  <MetaInfo>
                    <Views>Views: {article.viewCnt}</Views>
                  </MetaInfo>
                </NewsItem>
              ))
            ) : (
              <div>No data</div>
            )}
          </NewsList>
          <Pagination>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              backgroundColor={currentPage === 1 ? colors.ashGray : colors.darkGray}
              fontColor={colors.white}
              padding="10px 15px"
            >
              &lt;
            </Button>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
              const page = startPage + index;
              return (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  backgroundColor={currentPage === page ? colors.redPrimary : colors.silverGray}
                  fontColor={colors.white}
                  padding="10px 15px"
                >
                  {page}
                </Button>
              );
            })}
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              backgroundColor={currentPage === totalPages ? colors.ashGray : colors.darkGray}
              fontColor={colors.white}
              padding="10px 15px"
              // disabled={currentPage === totalPages}
            >
              &gt;
            </Button>
          </Pagination>
        </>
      )}
    </NewsContainer>
  );
};

export default News;
