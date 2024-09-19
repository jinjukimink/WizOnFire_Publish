import useFetchData from '../../hooks/useFetchData';
import { NewsContainer, NewsList, NewsItem, Title, MetaInfo, Views, SearchBarWrapper } from './NewsStyles';
import { useState, useEffect } from 'react';
import Button from '../../components/common/button/Button';
import SearchBar from '../../components/common/searchbar/SearchBar';

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
  const baseUrl = 'http://3.35.51.214'; // Server base URL
  return contents.replace(/src="\/files/g, `src="${baseUrl}/files`);
};

const News = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');  // Add search term state
  const { data, isLoading, error } = useFetchData<ApiResponse>(`article/newslist?searchWord=${searchTerm}`);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState<Article[]>([]);

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
  };

  const totalPages = Math.ceil((data?.data?.list.length || 0) / itemsPerPage);

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
          <Button onClick={() => setSelectedArticle(null)} backgroundColor="#ccc" fontColor="#fff" padding="10px 20px">
            Back to list
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
          <div className="pagination" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                backgroundColor={currentPage === page ? '#f00' : '#ccc'}
              >
                {page}
              </Button>
            ))}
          </div>
        </>
      )}
    </NewsContainer>
  );
};

export default News;
