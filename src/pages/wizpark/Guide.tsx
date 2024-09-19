import { ktParkKorean, ParkGuide } from "../../assets/assets";
import { Container, Image, ImageContainer } from "../PagesStyles";

const Guide = () => {
  return (
    <>
      <Container>
        <ImageContainer width="342px">
          <Image src={ktParkKorean} alt="ktParkKorean" />
        </ImageContainer>
        <ImageContainer>
          <Image src={ParkGuide} alt="ParkGuide" />
        </ImageContainer>
    </Container>
    </>
  );
}
export default Guide 