import useFetchData from '../../hooks/useFetchData';
import { NewsContainer, NewsList, NewsItem, Title, MetaInfo, Views, SearchBarWrapper, Pagination, Thumbnail, ViewsIcon, ArticleIndex } from './NewsStyles';
import { useState, useEffect } from 'react';
import SearchBar from '../../components/common/searchbar/SearchBar';
import colors from '../../assets/Colors';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Article {
  artcSeq: number;
  artcTitle: string;
  viewCnt: number;
  regDttm: number;
  thumbnailUrl?: string;
  imgFilePath: string;
}

interface ApiResponse {
  data: {
    list: Article[];
  };
}

const formatThumbnail = (thumbnailUrl: string) => {
  const baseUrl = 'https://wizzap.ktwiz.co.kr/';
  return thumbnailUrl.replace(/src="\/files/g, `src="${baseUrl}/files`);
};

const News = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, isLoading, error } = useFetchData<ApiResponse>(`/article/newslist-searchWord-${searchTerm}.json`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [currentItems, setCurrentItems] = useState<Article[]>([]);
  const [isShowingFirstGroup, setIsShowingFirstGroup] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.data && data.data.list) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const paginatedItems = data.data.list.slice(indexOfFirstItem, indexOfLastItem);

      const updatedArticles = paginatedItems.map((article: Article) => {
        const thumbnailUrl = article.thumbnailUrl ? formatThumbnail(article.thumbnailUrl) : '';
        return {
          ...article,
          thumbnailUrl,
        };
      });

      setCurrentItems(updatedArticles);
    }
  }, [currentPage, data]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextGroup = () => {
    setIsShowingFirstGroup(false);
    setCurrentPage(6);
  };

  const handlePrevGroup = () => {
    setIsShowingFirstGroup(true);
    setCurrentPage(1);
  };

  const handleClick = (article: Article) => {
    navigate(`/media/wiznews/${article.artcSeq}`);
  };

  if (isLoading) {
    return (
      <NewsContainer>
        <Skeleton width={169} height={29} style={{ marginBottom: '-2px', top: '-40px' }} />
        <NewsList>
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '20px', borderBottom: `1px solid ${colors.ashGray}` }}>
              <Skeleton width={50} height={25} style={{ marginRight: '10px' }} />
              <Skeleton width={250} height={125} style={{ marginRight: '20px' }} />
              <div style={{ flex: 1 }}>
                <Skeleton width={`60%`} height={25} style={{ marginBottom: '10px' }} />
                <Skeleton width={80} height={15} />
              </div>
            </div>
          ))}
        </NewsList>
      </NewsContainer>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <NewsContainer>
      <SearchBarWrapper>
        <SearchBar 
          placeholder="검색어를 입력해주세요." 
          containerWidth="140px" 
          height="29px" 
          buttonWidth="45px"
          onSearch={(term) => setSearchTerm(term)} 
        />
      </SearchBarWrapper>
      <NewsList>
        {currentItems.length > 0 ? (
          currentItems.map((article: Article, index: number) => (
            <NewsItem key={article.artcSeq} onClick={() => handleClick(article)}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArticleIndex>{index + 1 + (currentPage - 1) * itemsPerPage}</ArticleIndex>
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                  <Thumbnail src={article.imgFilePath} alt="사진" style={{ marginRight: '20px' }} />
                  <div>
                    <Title>{article.artcTitle}</Title>
                    <MetaInfo>
                      <Views>
                        <ViewsIcon color="gray" />
                        {article.viewCnt}
                      </Views>
                    </MetaInfo>
                  </div>
                </div>
              </div>
            </NewsItem>
          ))
        ) : (
          <div>No data</div>
        )}
      </NewsList>

      <Pagination>
        {isShowingFirstGroup ? (
          <>
            {Array.from({ length: 5 }, (_, index) => index + 1).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                backgroundColor={currentPage === page ? colors.redPrimary : colors.silverGray}
                fontColor={colors.white}
                padding="10px 15px"
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={handleNextGroup}
              backgroundColor={colors.darkGray}
              fontColor={colors.white}
              padding="10px 15px"
            >
              &gt;&gt;
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={handlePrevGroup}
              backgroundColor={colors.darkGray}
              fontColor={colors.white}
              padding="10px 15px"
            >
              &lt;&lt;
            </Button>
            <Button
              onClick={() => handlePageChange(6)}
              backgroundColor={colors.redPrimary}
              fontColor={colors.white}
              padding="10px 15px"
            >
              6
            </Button>
          </>
        )}
      </Pagination>
    </NewsContainer>
  );
};

export default News;
