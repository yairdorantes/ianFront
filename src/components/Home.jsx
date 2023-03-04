import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import ad1 from "../media/ad1.jpg";
import ad2 from "../media/ad2.jpg";
import ad3 from "../media/ad3.jpg";
import Menu from "./Menu";
import Products from "./Products";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      {/* <Menu></Menu> */}
      <div className="h-screen">
        <Swiper
          spaceBetween={30}
          // effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper h-1/2 sm:w-3/4 mt-1 md:3/6 rounded-md"
          // style={{ height: "40vh" }}
        >
          <SwiperSlide
            style={{ backgroundImage: `url(${ad1})` }}
            className="bg-cover bg-no-repeat  bg-center"
          >
            {/* <img src={ad1} /> */}
          </SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: `url(${ad2})` }}
            className="bg-cover bg-no-repeat  bg-center"
          ></SwiperSlide>
          <SwiperSlide
            style={{ backgroundImage: `url(${ad3})` }}
            className="bg-cover bg-no-repeat  bg-center"
          ></SwiperSlide>
        </Swiper>
        <Products></Products>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
