import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocationStore } from '../../stores/useLocation.store';
import { ButtonContainer, ContentContainer, ContentText, SectionContainer, SidebarButton, SidebarContainer } from './SidebarStyles';

const categories = [
  { title: "kt wiz는?" },
  { title: "수원 kt wiz park" },
  { title: "찾아오기" },
  { title: "정규 리그" },
  { title: "코칭스텝", subtitles: ["투수", "타자", "응원단"] },
  { title: "wiz 뉴스" },
];

const sidebars = [
  [
    { title: "구단 소개", description: "구단소개요", route: "/ktwiz/about" },
    { title: "구단 연혁", description: "구단연혁이요", route: "/ktwiz/history" },
  ],
  [
    { title: "구장 소개", description: "구장 소개요", route: "/wizpark/intro" },
    { title: "구장 안내도", description: "구장 안내도요", route: "/wizpark/guide" },
  ],
  [
    { title: "찾아오기", description: "찾아오는 방법이요", route: "/wizpark/location" },
  ],
  [
    { title: "경기 일정", description: "일정이요", route: "/game/regular/schedule" },
    { title: "박스스코어", description: "스코어요", route: "/game/regular/boxscore" },
    { title: "순위기록", description: "순위요", route: "/game/regular/ranking" },
    { title: "관전포인트", description: "다시봐야할거", route: "/game/regular/watchPoint" },
  ],
  [
    { title: "코칭스텝", description: "코칭스텝 정보", route: "/player/coach" },
    { title: "투수", description: "투수 정보", route: "/player/pitcher" },
    { title: "타자", description: "타자 정보", route: "/player/catcher" },
    { title: "응원단", description: "응원단 정보", route: "/player/cheer" },
  ],
  [
    { title: "wiz 뉴스", description: "wiz소식 리스트", route: "/media/wiznews" },
    { title: "wiz 보도자료", description: "이벤트 공유", route: "/media/wizpress" },
  ],
];

// SideBar 컴포넌트
const SideBar = () => {
  const isLandingPage = window.location.pathname === "/";
  const { selectedCategory } = useLocationStore();
  const isShopOrSponsor = ["shop","스폰서"].includes(selectedCategory);

  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>(''); // 현재 활성화된 탭
  const [categoryIndex, setCategoryIndex] = useState<number>(0); // 현재 카테고리 인덱스

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

  // 사이드바 밑 컨텐츠들 여기에 표시
  const renderContent = () => {
    const activeContent = sidebars[categoryIndex].find((item) => item.title === activeTab);
    if (activeContent) {
      return (
        <div>
          <ContentText>{activeContent.description}</ContentText>
        </div>
      );
    }
    return <div>404 not found</div>;
  };

  const getTitle = () => {
    const category = categories[categoryIndex];
    if (category.subtitles && activeTab && category.subtitles.includes(activeTab)) {
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
            <SidebarButton
              key={index}
              active={activeTab === subCategory.title}
              onClick={() => {
                setActiveTab(subCategory.title);
                navigate(subCategory.route);
              }}
            >
              {subCategory.title}
            </SidebarButton>
          ))}
        </ButtonContainer>
      </SectionContainer>

      <ContentContainer>{renderContent()}</ContentContainer>
    </SidebarContainer>
    )
  );
};

export default SideBar;
