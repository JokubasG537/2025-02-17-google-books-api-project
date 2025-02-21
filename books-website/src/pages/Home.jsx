import React from "react";
import Categories from "../components/Categories";
import FetchQuotes from "../components/FetchQuotes";
import Books from "../components/Books";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Home() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><FetchQuotes /></SwiperSlide>
        <SwiperSlide><FetchQuotes /></SwiperSlide>
        <SwiperSlide><FetchQuotes /></SwiperSlide>
      </Swiper>


      <Categories />
      <Books />
      <Footer />
    </>
  );
}

export default Home;
