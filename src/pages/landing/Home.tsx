import styled from "styled-components";
import backgroundImage from "../../assets/images/landing/landingBackground.png"
import leftArrow from "../../assets/images/landing/leftArrow.png";
import rightArrow from "../../assets/images/landing/rightArrow.png";

const StartImage = styled.div`
  height: 1000px;
  width: auto;
  background-image: url(${backgroundImage}); /* 템플릿 리터럴을 사용하여 이미지 URL 설정 */
  background-size:cover;//배율 조정
  background-repeat: no-repeat; /* 이미지를 반복하지 않음 */
  background-position: center;
  display: flex;
  gap:900px;
  justify-content: center;
  align-items: center;

`;
const ArrowWapper=styled.img`
  width:90px;
  height:80px;

`

const Home = () => {
  return (
    <>
      {/* 랜딩페이지 */}
      <StartImage>
        <ArrowWapper style={{width:"90px",height:"80px"}}src={leftArrow} />
        <ArrowWapper style={{width:"90px",height:"80px"}}src={rightArrow}/>
      </StartImage>
    </>
  );
};

export default Home;

