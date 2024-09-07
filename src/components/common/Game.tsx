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


const Game = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오기 위한  훅
  const goToHome = () => {
    navigate('/');
  };
  const goToSchedule = () => {
    navigate('/game/regular/schedule');
  };
  const goToBoxScore = () => {
    navigate('/game/regular/boxscore');
  };
  const goToRanking = () => {
    navigate('/game/regular/ranking/');
  };
  const goToWatchPoint = () => {
    navigate('/game/regular/watchPoint');
  };

  const [activeTab, setActiveTab] = useState<string>('경기 일정');

  // 경로가 바뀔 때마다 실행
  useEffect(() => {
      if (location.pathname === '/game/regular/schedule') {
          setActiveTab('경기 일정');
      } else if (location.pathname === '/game/regular/boxscore') {
          setActiveTab('박스스코어');
      } else if (location.pathname === '/game/regular/ranking/') {
          setActiveTab('순위기록');
      } else if (location.pathname === '/game/regular/watchPoint') {
          setActiveTab('관전포인트');
      }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activeTab) {
      case '경기 일정':
        return (
          <div>
            <ContentTitle>경기일정</ContentTitle>
            <ContentText>두산 베어스 vs KT 위즈</ContentText>
          </div>
        );
      case '박스스코어':
        return (
          <div>
            <ContentTitle>9/7 두산 KT</ContentTitle>
            <ContentText> 두산 12:0 KT</ContentText>
          </div>
        );
     case '순위기록':
        return (
          <div>
            <ContentTitle>팀순위</ContentTitle>
          </div>
        );
     case '관전포인트':
        return (
          <div>
            <ContentTitle>9/7 관전포인트</ContentTitle>
                <ContentText>
                    선발투수 비교
                    곽빈 vs 쿠에바스
                </ContentText>
          </div>
        );
      default:
        return <div>404 not found</div>;
    }
  };

  return (
    <>
      <SectionContainer>
        <Title>정규 리그</Title>
        <ButtonContainer>
          <Button active={activeTab === '경기 일정'} onClick={goToSchedule}>
            경기 일정
          </Button>
          <Button active={activeTab === '박스스코어'} onClick={goToBoxScore}>
            박스스코어
          </Button>
          <Button active={activeTab === '순위기록'} onClick={goToRanking}>
            순위기록
          </Button>
          <Button active={activeTab === '관전포인트'} onClick={goToWatchPoint}>
            관전포인트
          </Button>
        </ButtonContainer>
      </SectionContainer>

      <ContentContainer>{renderContent()}</ContentContainer>

    <button onClick={goToHome}>홈</button>
    </>
  );
};

export default Game;
