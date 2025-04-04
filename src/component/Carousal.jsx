"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function Carousel() {
  return (
    <div className="w-full bg-black">
      {/* MEDIUM AND LARGE SCREENS */}
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[500px] md:h-[700px] max-w-[1200px] mx-auto" // Added max width and centered
      >
        <SwiperSlide className="h-full">
          <div className="relative w-full h-full">
            <Image
              src="/Carousel/image-300x80.jpg"
              alt="Carousel Image"
              layout="responsive" // Use layout="responsive" for dynamic sizing
              width={100}
              height={10} // Set the height (adjust based on image aspect ratio)
              className="object-cover"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="relative w-full h-full">
            <Image
          src="/Carousel/image-300x80.jpg"
              alt="Carousel Image"
              layout="responsive"
              width={100}
              height={50}
              className="object-cover"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="relative w-full h-full">
            <Image
              src="/Carousel/image-300x80 (2).jpg"
              alt="Carousel Image"
              layout="responsive"
              width={100}
              height={50}
              className="object-cover"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="relative w-full h-full">
            <Image
             src="/Carousel/image-300x80 (1).jpg"
              alt="Carousel Image"
              layout="responsive"
              width={10}
              height={1}
              className="object-cover"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
