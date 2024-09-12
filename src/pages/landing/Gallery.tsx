import styled from "styled-components";
import GradientChip from "../../components/common/gradientChip/GradientChip";
import {
    GalleryContainer,
    GalleryNews,
    GalleryTitle,
    GalleryLine,
} from "./GalleryStyles";

import SimpleSlider from "../../components/common/slider/SimpleSlider";
const LargePhoto = styled.div`
    width: 550px;
    height: 600px;
    background-color: aqua;
`

const Gallery = () => {
  return (
    <GalleryContainer>
        <GalleryNews>
            <GradientChip
                main="KTWIZ" title="빛나던 순간들" />
            <GalleryTitle>GALLERY</GalleryTitle>
            <GalleryLine />
        </GalleryNews>
            <SimpleSlider/>
    </GalleryContainer>
  );
}
export default Gallery