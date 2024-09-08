import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageLocation from "../components/common/pageLocation/PageLocation";
import Sidebar from "../components/common/Sidebar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 505vh;  // 전체 뷰포트 높이를 채우도록 설정
`;

const MainContent = styled.main`
 // margin-top: 60px;
  flex-grow: 1;  // 메인 컨텐츠 영역이 가능한 많은 공간을 차지하도록 설정
  overflow-y: auto;
  max-height: 480vh;
`;

const Layout = () => {
  return (
    <PageContainer>
      <Header />
      <Sidebar />
      <MainContent>
      <PageLocation />
        <Outlet />  {/* 이곳에 컴포넌트를 넣기 */}
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Layout;