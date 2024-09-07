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


const Ktwiz = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오기 위한  훅
  const goToHome = () => {
    navigate('/');
  };
  const goToAbout = () => {
    navigate('/ktwiz/about');
  };
  const goToHistory = () => {
    navigate('/ktwiz/history');
  };

  const [activeTab, setActiveTab] = useState<string>('구단 소개');

  // 경로가 바뀔 때마다 실행
  useEffect(() => {
    if (location.pathname === '/ktwiz/about') {
      setActiveTab('구단 소개');
    } else if (location.pathname === '/ktwiz/history') {
      setActiveTab('구단 연혁');
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activeTab) {
      case '구단 소개':
        return (
          <div>
            <ContentTitle>구단 소개</ContentTitle>
            <ContentText>신비롭고 강력한 힘, 상상의 야구 실현</ContentText>
          </div>
        );
      case '구단 연혁':
        return (
          <div>
            <ContentTitle>구단 연혁</ContentTitle>
            <ContentText>역사 설명</ContentText>
          </div>
        );
      default:
        return <div>404 not found</div>;
    }
  };

  return (
    <>
      <SectionContainer>
        <Title>kt wiz는?</Title>
        <ButtonContainer>
          <Button active={activeTab === '구단 소개'} onClick={goToAbout}>
            구단 소개
          </Button>
          <Button active={activeTab === '구단 연혁'} onClick={goToHistory}>
            구단 연혁
          </Button>
        </ButtonContainer>
      </SectionContainer>

      <ContentContainer>{renderContent()}</ContentContainer>

    <button onClick={goToHome}>홈</button>
    </>
  );
};

export default Ktwiz;
