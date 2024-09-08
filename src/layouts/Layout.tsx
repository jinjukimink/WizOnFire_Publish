import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import subBackground from "../assets/images/common/subBackground.png"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 505vh;  // 전체 뷰포트 높이를 채우도록 설정
`;

const MainContent = styled.main`
  margin-top: -120px;
  flex-grow: 1;  // 메인 컨텐츠 영역이 가능한 많은 공간을 차지하도록 설정
  overflow-y: auto;
  max-height: 480vh;
`;
const SubImageWrapper=styled.div`

  height:200px;
  bottom: 100px;
`
const SubImage=styled.img`
  width: 96%;
  height:202px;
  position: relative;
  top:100px;
  transform: scale(1.3);  /* 이미지 10% 확대 */
`

const Layout = () => {
  const isLandingPage=window.location.pathname==="/"
  return (
    <PageContainer>
      <Header />
      <MainContent>
        {isLandingPage?null:      <SubImageWrapper>
          {/* <SubImage src={subBackground}/> */}
        </SubImageWrapper>}

        <Outlet />  {/* 이곳에 컴포넌트를 넣기 */}
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Layout;