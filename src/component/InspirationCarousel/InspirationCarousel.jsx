import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./InspirationCarousel.css"
import { useRef } from "react";


function InspirationCarousel({ products }) {
    const swiperRef = useRef(null);
    const limitedProducts = products.slice(0, 8);
    const slidesPerView = 1;


    return (
        <>
            <div className="inspiration-section">
                {/* Left Side */}
                <div className="inspiration-left">
                    <h2 className="title">50+ Beautiful Rooms Inspiration</h2>
                    <p className="desc">
                        Our designer already made a lot of beautiful prototypes of rooms that inspire you.
                    </p>
                    <button className="explore-btn" onClick={() => navigate("/shop")}>
                        Explore More
                    </button>
                </div>

                {/* Right Side (Swiper) */}
                <div className="inspiration-right">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={products.length > 1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                    >
                        {products.slice(0, 8).map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <div className="slide-container">
                                    <div className="main-image">
                                        <img src={item.images && item.images[0]} alt={item.title}
                                        />
                                        <div className="overlay-box">
                                            <p>{String(index + 1).padStart(2, "0")} — {item.category}</p>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <button className="arrow-btn">→</button>
                                    </div>

                                    <div className="next-image">
                                        <img
                                            src={
                                                limitedProducts[(index + 1) % limitedProducts.length]?.images?.[0]
                                                    ? limitedProducts[(index + 1) % limitedProducts.length].images[0]
                                                    : limitedProducts[(index + 1) % limitedProducts.length]?.thumbnail
                                                        ? limitedProducts[(index + 1) % limitedProducts.length].thumbnail
                                                        : item.images?.[0]
                                            }
                                            alt="Next product"
                                        />
                                    </div>
                                    <div className="rigth-arrow">
                                        <button className="custom-next" onClick={() => swiperRef.current?.slideNext()} > &gt; </button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default InspirationCarousel