import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    Keyboard,
    Controller,
    HashNavigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../styles/swiper.scss';
import '../styles/navigation.scss';
import '../styles/scrollbar.scss';
import '../styles/pagination.scss';
import styled from 'styled-components';
import { useState } from 'react';

SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    Keyboard,
    Controller,
    HashNavigation,
]);

const SwiperStyles = styled.div`
    .swiper-wrapper {
        width: 100vw;
        height: 100vh;
    }
    .swiper-slide {
        position: relative;
        /* width: 100vw;
        height: 100vh; */
        background: #333;
    }
`;

const SwiperPage = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [thirdSwiper, setThirdSwiper] = useState(null);
    const [forthSwiper, setForthSwiper] = useState(null);

    return (
        <SwiperStyles>
            <Swiper
                hashNavigation={{
                    watchState: true,
                    replaceState: true,
                }}
                speed={50}
                direction="vertical"
                spaceBetween={10}
                slidesPerView={1}
                navigation
                keyboard={{
                    enabled: true,
                    onlyInViewport: false,
                    pageUpDown: false,
                }}
                // pagination={{ clickable: true }}
                onSwiper={setFirstSwiper}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide data-hash="slide1">1</SwiperSlide>
                <SwiperSlide data-hash="slide2">2</SwiperSlide>
                <SwiperSlide data-hash="slide3">3</SwiperSlide>
                <SwiperSlide data-hash="slide4">4</SwiperSlide>
                <SwiperSlide data-hash="slide5">5</SwiperSlide>
                <SwiperSlide data-hash="slide6">
                    <Swiper
                        controller={{
                            control: controlledSwiper,
                        }}
                        slidesPerView={1}
                        keyboard={{
                            enabled: true,
                        }}
                        navigation
                        // pagination={{ clickable: true }}
                        onSwiper={setSecondSwiper}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide data-hash="slide6-1">6-1</SwiperSlide>
                        <SwiperSlide data-hash="slide6-2">
                            <Swiper
                                hashNavigation={{
                                    watchState: true,
                                    replaceState: true,
                                }}
                                direction="vertical"
                                controller={{
                                    control: controlledSwiper,
                                }}
                                slidesPerView={1}
                                keyboard={{
                                    enabled: true,
                                }}
                                navigation
                                // pagination={{ clickable: true }}
                                onSwiper={setSecondSwiper}
                                onSlideChange={() =>
                                    console.log('slide change')
                                }
                            >
                                <SwiperSlide>6-2</SwiperSlide>
                                <SwiperSlide>6-3</SwiperSlide>
                            </Swiper>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>7</SwiperSlide>
                <SwiperSlide>8</SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        controller={{
                            control: controlledSwiper,
                        }}
                        slidesPerView={1}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={setThirdSwiper}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>9-1</SwiperSlide>
                        <SwiperSlide>9-2</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        controller={{
                            control: controlledSwiper,
                        }}
                        slidesPerView={1}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={setForthSwiper}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>10-1</SwiperSlide>
                        <SwiperSlide>10-2</SwiperSlide>
                        <SwiperSlide>10-3</SwiperSlide>
                        <SwiperSlide>10-4</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>11</SwiperSlide>
            </Swiper>
        </SwiperStyles>
    );
};

export default SwiperPage;
