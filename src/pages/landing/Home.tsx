import styled from "styled-components";
import backgroundImage from "../../assets/images/landing/landingBackground.png"

const StartImage = styled.div`
  height: 1300px;
  width: auto;
  background-image: url(${backgroundImage}); /* 템플릿 리터럴을 사용하여 이미지 URL 설정 */
  background-size:cover;
  background-position: center;
`;

const Home = () => {
  return (
    <>
      {/* 랜딩페이지 */}
      <StartImage />
    </>
  );
};

export default Home;

