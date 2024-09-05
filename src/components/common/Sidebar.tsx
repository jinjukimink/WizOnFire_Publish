import styled from "styled-components";

const SidebarContainer = styled.div`
width: 100%;
height: 255px;
background-color: #333;
h1{
    padding: 0;
    margin: 0;
}
`
const Sidebar = () => {
  
  return (
    <SidebarContainer>
      <h1>Sidebar Component</h1>
    </SidebarContainer>
  );
}
export default Sidebar