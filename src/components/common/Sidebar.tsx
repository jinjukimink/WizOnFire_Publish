import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocationStore } from '../../stores/useLocation.store';
import { ButtonContainer, ContentContainer, SectionContainer, SidebarButton, SidebarContainer } from './SidebarStyles';
import styled from 'styled-components';

const categories = [
  { title: "kt wiz는?" },
  { title: "수원 kt wiz park" },
  { title: "찾아오기" },
  { title: "정규 리그" },
  { title: "코칭스텝"},
  { title: "wiz 뉴스" },
];

const sidebars = [
  [
    { title: "구단 소개", route: "/ktwiz/about" },
    { title: "구단 연혁", route: "/ktwiz/history" },
  ],
  [
    { title: "구장 소개", route: "/wizpark/intro" },
    { title: "구장 안내도", route: "/wizpark/guide" },
  ],
  [
    { title: "찾아오기", route: "/wizpark/location" },
  ],
  [
    { title: "경기 일정", route: "/game/regular/schedule" },
    { title: "박스스코어", route: "/game/regular/boxscore" },
    { title: "순위기록", route: "/game/regular/ranking/team" },
    { title: "관전포인트", route: "/game/regular/watchPoint" },
  ],
  [
    { title: "코칭스텝", route: "/player/coach" },
    { title: "투수", route: "/player/pitcher" },
    { title: "타자", route: "/player/catcher" }, // 타자를 클릭하면 서브 카테고리 표시
    { title: "응원단", route: "/player/cheer" },
  ],
  [
    { title: "wiz 뉴스", route: "/media/wiznews" },
    { title: "wiz 보도자료", route: "/media/wizpress" },
  ],
];

const catcherSubbar = [
  { title: '포수', route: "/player/catcher" },
  { title: "내야수", route: "/player/infielder" },
  { title: "외야수", route: "/player/outfielder" },
];

const SubCategoryContainer = styled.div`
  display: flex;
  justify-content: center;  /* 수평 가운데 정렬 */
  margin-top: 47px;  /* 메인 카테고리와의 간격 */
  flex-wrap: wrap;   /* 화면이 작아지면 줄 바꿈 */
  position: absolute;
  gap:15px;

  margin-right: -1%;
`;

const SidebarButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  /* 카테고리 및 서브 카테고리 정렬 */
`;

// SideBar 컴포넌트
const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";
  const { selectedCategory } = useLocationStore();
  const isShopOrSponsor = ["shop", "스폰서"].includes(selectedCategory);

  const [activeTab, setActiveTab] = useState<string>(''); // 현재 활성화된 탭
  const [categoryIndex, setCategoryIndex] = useState<number>(0); // 현재 카테고리 인덱스
  const [showSubCategories, setShowSubCategories] = useState<boolean>(false); // 타자 서브 카테고리 표시 여부

  useEffect(() => {
    const currentPath = location.pathname;
    const activeCategoryIndex = sidebars.findIndex((sidebar) =>
      sidebar.some((item) => currentPath.includes(item.route))
    );
    if (activeCategoryIndex !== -1) {
      const activeTabData = sidebars[activeCategoryIndex].find((item) =>
        currentPath.includes(item.route)
      );
      setCategoryIndex(activeCategoryIndex);
      setActiveTab(activeTabData?.title || '');
    }
  }, [location.pathname]);

  const getTitle = () => {
    const category = categories[categoryIndex];
    if (activeTab) {
      return activeTab;
    }
    return category.title;
  };

  return (
    !(isLandingPage || isShopOrSponsor) && (
      <SidebarContainer>
        <SectionContainer>
          <h1>{getTitle()}</h1>

          <ButtonContainer>
            {sidebars[categoryIndex]?.map((subCategory, index) => (
              <SidebarButtonWrapper key={index}>
                <SidebarButton
                  active={activeTab === subCategory.title}
                  onClick={() => {
                    setActiveTab(subCategory.title);
                    if (subCategory.title === '타자') {
                      setShowSubCategories(!showSubCategories); // 타자 클릭 시 서브 카테고리 토글
                    } else {
                      setShowSubCategories(false); // 다른 카테고리 클릭 시 서브 카테고리 숨기기
                    }
                    navigate(subCategory.route);
                  }}
                >
                  {subCategory.title}
                </SidebarButton>

                {/* 타자 카테고리가 활성화되면 서브 카테고리 렌더링 */}
                {subCategory.title === '타자' && showSubCategories && (
                  <SubCategoryContainer>
                    {catcherSubbar.map((subbar, idx) => (
                      <SidebarButton
                      style={{fontSize:"15px"}}
                        key={idx}
                        active={location.pathname.includes(subbar.route)}
                        onClick={() => navigate(subbar.route)}
                      >
                        {subbar.title}
                      </SidebarButton>
                    ))}
                  </SubCategoryContainer>
                )}
              </SidebarButtonWrapper>
            ))}
          </ButtonContainer>
        </SectionContainer>

        <ContentContainer>{/* Main content goes here */}</ContentContainer>
      </SidebarContainer>
    )
  );
};

export default SideBar;
