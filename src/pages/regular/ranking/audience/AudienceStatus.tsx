import styled from "styled-components";
import AudienceRecord from "./AudienceRecord";

const AudienceContainer = styled.main`
  margin-top: 50px;
`
const AudienceStatus = () => {
  return (
    <AudienceContainer>
      <AudienceRecord/>
    </AudienceContainer>
  );
}
export default AudienceStatus