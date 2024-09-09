'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import SwiperSlideBox from './SwiperSlideBox';

interface ImageSwipperBoxProps {
    category: string;
    name: string;
}

const ImageSwipperBox: React.FC<ImageSwipperBoxProps> = ({ category, name }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const images = ['front', 'side', 'back'];

    return (
        <div className='w-full'>
            {/* Main Swiper */}
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
                spaceBetween={10} // Added space between slides
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <SwiperSlideBox
                            image={image}
                            category={category}
                            name={name}
                            size={{ width: 200, height: 350 }}
                            className="max-xl:w-1/2"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Swiper */}
            <div className='w-full flex justify-center items-center gap-x-3'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper w-full mt-5 cursor-pointer"
                >
                    {images.map((image) => (
                        <SwiperSlide key={image}>
                            <SwiperSlideBox
                                image={image}
                                category={category}
                                name={name}
                                size={{ width: 25, height: 30 }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageSwipperBox;
