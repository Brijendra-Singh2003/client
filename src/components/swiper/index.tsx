"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function App({ items, isMobile }: { items: { mb: string, lg: string, id: number }[], isMobile: boolean }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={!isMobile}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {items.map(item => <SwiperSlide key={item.id}>
                    <Image className="object-cover" height={270} width={1600} src={isMobile ? item.mb : item.lg} alt="banner" />
                </SwiperSlide>)}
            </Swiper>
        </>
    );
}