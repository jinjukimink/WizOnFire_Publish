import styled from "styled-components";
import { Outlet} from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageLocation from "../components/common/pageLocation/PageLocation";
import SideBar from "../components/common/Sidebar";
import ScrollToTop from "../hooks/ScrollToTop";

const PageContainer = styled.div`//DOM으로 props가 전달되지 않도록 해야 함.(스타일에만 한정)
  display: flex;
  flex-direction: column;
  //justify-content: center; /* Center horizontally */
  //align-items: center; /* Center vertically */

`;
const MainContent = styled.main`
  flex-grow: 1;  // 메인 컨텐츠 영역이 가능한 많은 공간을 차지하도록 설정
  //overflow-y: auto;
`;

const Layout = () => {
  return (
    <PageContainer >
      <ScrollToTop/>
      <Header />
      <SideBar/>
      <MainContent>
      <PageLocation/>
        <Outlet /> 
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Layout;