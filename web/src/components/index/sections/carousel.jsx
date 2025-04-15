'use client'
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {Navigation, Autoplay, Pagination, EffectFade} from "swiper/modules";


const carouselImages = [
    // {
    //     src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600&q=80",
    //     alt: "FAQ Image 1"
    // },
    {
        src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=80",
        alt: "FAQ Image 2"
    },
    {
        src: "https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1920&h=600&q=80",
        alt: "FAQ Image 3"
    }
]


const Carousel = ({title}) => {
    const colorValue = "bg-mainColorNormal/70 hover:bg-mainColorNormal text-white/60 hover:text-white/80";
    return (
        <div className="relative w-full h-full bg-gray-300">
            <Swiper
                className="w-full h-full"
                modules={[Navigation, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{
                    clickable: true, // 确保分页器可以点击
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                speed={1500}
                effect="fade" // 设置为淡入淡出效果
                fadeEffect={{crossFade: false}} // 可选：添加交叉淡化效果
                loop={true}
            >
                {carouselImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />

                        {/*蒙层*/}
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <h1 className="text-white text-4xl font-bold tracking-wider">
                                {title}
                            </h1>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            {/* 自定义导航按钮 */}
            {
                carouselImages.length > 1 ? (
                    <>
                        <button
                            className={`custom-prev z-10 absolute top-1/2 left-0 transform -translate-y-1/2 p-3 ${colorValue} rounded-0  focus:outline-none transition duration-300`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                        <button
                            className={`custom-next z-10 absolute top-1/2 right-0 transform -translate-y-1/2 p-3 ${colorValue}  rounded-0 focus:outline-none transition duration-300`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </>

                ) : null
            }

        </div>
    );
};

export default Carousel;