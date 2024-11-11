import useFetchData from '../../hooks/useFetchData';
import { WizPressContainer, NewsList, NewsItem, Title, MetaInfo, Views, Pagination, ArticleIndex, SkeletonWrapper, SkeletonNewsItem, SkeletonViews, ViewsIcon, SkeletonTitle } from './WizPressStyles';
import { useState, useEffect } from 'react';
import colors from '../../assets/Colors';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import Skeleton from 'react-loading-skeleton';

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

const WizPress = () => {
  const [searchTerm] = useState<string>('');
  const { data, isLoading } = useFetchData<ApiResponse>(`article/wizpresslist-searchWord-${searchTerm}.json`);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<Article[]>([]);
  const itemsPerPage = 5;
  const [showPageGroup, setShowPageGroup] = useState<'firstGroup' | 'lastPage'>('firstGroup');
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.data && data.data.list) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentItems(data.data.list.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage, data]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextGroup = () => {
    setShowPageGroup('lastPage');
    setCurrentPage(6);
  };

  const handlePrevGroup = () => {
    setShowPageGroup('firstGroup');
    setCurrentPage(1);
  };

  const handleClick = (article: Article) => {
    navigate(`/media/wizpress/${article.artcSeq}`);
  };

  if (isLoading) {
    return (
      <SkeletonWrapper>
        {Array.from({ length: itemsPerPage }).map((_, index) => (
          <SkeletonNewsItem key={index}>
            <Skeleton width={30} height={25} style={{ marginLeft:'10px', marginRight: '-95px', top:'15px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <SkeletonTitle />
              <SkeletonViews />
            </div>
          </SkeletonNewsItem>
        ))}
      </SkeletonWrapper>
    );
  }

  return (
    <WizPressContainer>
      <NewsList>
        {currentItems.length > 0 ? (
          currentItems.map((article: Article, index: number) => (
            <NewsItem key={article.artcSeq} onClick={() => handleClick(article)}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArticleIndex>{index + 1 + (currentPage - 1) * itemsPerPage}</ArticleIndex>
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
            </NewsItem>
          ))
        ) : (
          <div>No data</div>
        )}
      </NewsList>

      <Pagination>
        {/* << 버튼은 페이지 그룹이 첫 번째 그룹이 아닐 때만 표시 */}
        {showPageGroup === 'lastPage' && (
          <Button
            onClick={handlePrevGroup}
            backgroundColor={colors.darkGray}
            fontColor={colors.white}
            padding="10px 15px"
          >
            &lt;&lt;
          </Button>
        )}

        {/* 페이지 번호 버튼 */}
        {showPageGroup === 'firstGroup'
          ? Array.from({ length: 5 }, (_, index) => {
              const page = index + 1;
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
            })
          : (
            <Button
              key={6}
              onClick={() => handlePageChange(6)}
              backgroundColor={currentPage === 6 ? colors.redPrimary : colors.silverGray}
              fontColor={colors.white}
              padding="10px 15px"
            >
              6
            </Button>
          )}

        {/* >> 버튼은 페이지 그룹이 첫 번째 그룹일 때만 표시 */}
        {showPageGroup === 'firstGroup' && (
          <Button
            onClick={handleNextGroup}
            backgroundColor={colors.darkGray}
            fontColor={colors.white}
            padding="10px 15px"
          >
            &gt;&gt;
          </Button>
        )}
      </Pagination>
    </WizPressContainer>
  );
};

export default WizPress;
