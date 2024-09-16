import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {
    GalleryWarpper,
    GalleryBox,
    SwiperContainer,
    SliderSlider
} from "./SliderStyles"

type TSliderProps = {
    images: string[];
}
const Slider = ({images} : TSliderProps) => {
    
    return (
    <GalleryWarpper>
        <GalleryBox>
            <SwiperContainer
                slidesPerView={4} //한번에 보여지는 슬라이드개수
                spaceBetween={30} //스와이퍼 간격
                centeredSlides={true}
                breakpoints={{
                    1366: {
                        slidesPerView: 5,
                    },
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {images.map((img,index) => (
                    <SliderSlider key={index}>
                        <img src={img}/>
                    </SliderSlider>
                ))}
            </SwiperContainer>
        </GalleryBox>
    </GalleryWarpper>
    );
}

export default Slider;