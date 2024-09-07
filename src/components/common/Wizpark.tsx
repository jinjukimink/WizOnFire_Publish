import { useEffect, useState } from 'react';

import {
  SectionContainer,
  Title,
  ButtonContainer,
  Button,
  ContentContainer,
  ContentTitle,
  ContentText
} from './SideBarStyles'
import { useLocation, useNavigate } from 'react-router-dom';


const Wizpark = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오기 위한  훅
  const goToHome = () => {
    navigate('/');
  };
  const goToIntro = () => {
    navigate('/wizpark/intro');
  };
  const goToGuide = () => {
    navigate('/wizpark/guide');
  };

  const [activeTab, setActiveTab] = useState<string>('구장 소개');

  // 경로가 바뀔 때마다 실행
  useEffect(() => {
    if (location.pathname === '/wizpark/intro') {
      setActiveTab('구장 소개');
    } else if (location.pathname === '/wizpark/guide') {
      setActiveTab('구장 안내도');
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activeTab) {
      case '구장 소개':
        return (
          <div>
            <ContentTitle>복합 문화공간의 첨단 야구장! 수원구장</ContentTitle>
            <ContentText>최적의 경기 환경 조성~~</ContentText>
          </div>
        );
      case '구장 안내도':
        return (
          <div>
            <ContentTitle>수원 케이티 위즈 파크</ContentTitle>
            <ContentText> 좌석 안내</ContentText>
          </div>
        );
      default:
        return <div>404 not found</div>;
    }
  };

  return (
    <>
      <SectionContainer>
        <Title>Suwon kt wiz park</Title>
        <ButtonContainer>
          <Button active={activeTab === '구장 소개'} onClick={goToIntro}>
            구장 소개
          </Button>
          <Button active={activeTab === '구장 안내도'} onClick={goToGuide}>
            구장 안내도
          </Button>
        </ButtonContainer>
      </SectionContainer>

      <ContentContainer>{renderContent()}</ContentContainer>

    <button onClick={goToHome}>홈</button>
    </>
  );
};

export default Wizpark;
