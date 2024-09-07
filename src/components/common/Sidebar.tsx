import styled from "styled-components";
import { useLocationStore } from "../../stores/useLocation.store";

const SidebarContainer = styled.div`
  width: 100%;
  height: 255px;
  background-color: #333;
`
const Sidebar = () => {
  const isLandingPage = window.location.pathname === "/";
  const { selectedCategory } = useLocationStore();
  const isShopOrSponsor = ["shop","스폰서"].includes(selectedCategory);
  return (
    !(isLandingPage || isShopOrSponsor) && (
    <SidebarContainer>
      Sidebar Component
    </SidebarContainer>
    )
  );
}
export default Sidebar