'use client'
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {Navigation, Autoplay, Pagination, EffectFade} from "swiper/modules";


const carouselImages = [
    {
        src: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
        alt: "现代时尚购物中心橱窗展示"
    },
    {
        src: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000&q=80",
        alt: "精品电子产品展示"
    },
    // {
    //     src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000&q=80",
    //     alt: "高端时尚服装系列"
    // },
    // {
    //     src: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000&q=80",
    //     alt: "家居装饰设计精品"
    // },
    // {
    //     src: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000&q=80",
    //     alt: "运动装备限时特惠"
    // },
    // {
    //     src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000&q=80",
    //     alt: "季节限定时尚产品"
    // }
]


const Carousel = ({title}) => {
    const colorValue = "bg-black/20 hover:bg-black/50 text-white hover:text-white border border-white/30 backdrop-blur-sm";
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
                            className={`custom-prev z-10 absolute top-1/2 left-5 transform -translate-y-1/2 p-3 ${colorValue} rounded-full shadow-lg focus:outline-none transition-all duration-300 ease-in-out`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                        <button
                            className={`custom-next z-10 absolute top-1/2 right-5 transform -translate-y-1/2 p-3 ${colorValue} rounded-full shadow-lg focus:outline-none transition-all duration-300 ease-in-out`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
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