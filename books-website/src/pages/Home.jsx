import React from "react";
import Categories from "../components/Categories";
import FetchQuotes from "../components/FetchQuotes";
import Books from "../components/Books";
import Footer from "../components/Footer";
import "../components/HomeStyle.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // ✅ Import Autoplay

function Home() {
  return (
    <div className="home-wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide ><FetchQuotes /></SwiperSlide>
        <SwiperSlide ><FetchQuotes /></SwiperSlide>
        <SwiperSlide ><FetchQuotes /></SwiperSlide>
      </Swiper>

      <Categories />
      <Books />
    </div>
  );
}

export default Home;
