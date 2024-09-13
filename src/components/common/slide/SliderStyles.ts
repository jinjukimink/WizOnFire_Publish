import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const GalleryWarpper = styled.div`
    position: absolute;
    width: 100%;
    height: 500px;
    background: transparent;
    margin: 0;
    padding: 0;
    z-index: 35;
`
export const GalleryBox = styled.div`
position: relative;
    height: 100%;
    z-index: 36;
    display: flex;
    align-items: center;
`
export const SwiperContainer = styled(Swiper)`
    width: 100%;
    height: 85%;
    top: 20%;
    img {
        border-radius: 20px;
    }
`
export const SliderSlider = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`