import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./CategoriesStyle.scss";

function Categories() {
  const categoriesData = [
    {
        category: "Art",
        image: "https://media.timeout.com/images/106006274/image.jpg",
        description: "Explore the beauty of visual creativity, from classic masterpieces to modern artistic expressions."
    },
    {
        category: "Biography",
        image: "https://t3.ftcdn.net/jpg/01/10/23/98/360_F_110239841_FF8MwMeJ9ZE4f9OItsuvOfEOhR0OTGZY.jpg",
        description: "Discover the lives of remarkable individuals, from historical figures to contemporary icons."
    },
    {
        category: "Business & Economics",
        image: "https://img.freepik.com/free-vector/business-people-working-celebrating-success-rising-arrow_1262-19724.jpg",
        description: "Gain insights into the world of finance, management, and entrepreneurship."
    },
    {
        category: "Children's Books",
        image: "https://media.tpt.cloud/nextavenue/uploads/2024/07/childrensbooks.jpg",
        description: "Delightful stories and adventures designed to inspire young minds and nurture creativity."
    },
    {
        category: "Comics & Graphic Novels",
        image: "https://assets-prd.ignimgs.com/2023/09/27/comic-book-covers-1695839217489.jpg",
        description: "Dive into captivating visual storytelling with superheroes, fantasy worlds, and thrilling narratives."
    },
    {
        category: "Computers",
        image: "https://st3.depositphotos.com/14862852/17648/i/450/depositphotos_176480284-stock-photo-desktop-computer-blank-screen-digital.jpg",
        description: "Stay up-to-date with the latest in technology, programming, and digital innovations."
    },
    {
        category: "Cooking",
        image: "https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg",
        description: "Unleash your inner chef with delicious recipes, culinary tips, and cooking techniques."
    },
    {
        category: "Fantasy",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3a/Lord_of_the_Rings_Trilogy_poster.jpg",
        description: "Escape to magical realms filled with mythical creatures, epic quests, and powerful heroes."
    },
    {
        category: "Mystery",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn57bFQK0E4FTrbYIzfAtguUjKH5aolzCIw&usqp=CAU",
        description: "Engage your detective skills with suspenseful plots, thrilling twists, and intriguing puzzles."
    }
];


  return (
    <div className="categories">
      <h2>Categories</h2>
      <Swiper
  slidesPerView={4.7} // Default for large screens
  spaceBetween={20}
  loop={true}
  freeMode={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  speed={5000}
  modules={[Autoplay]}
  className="categories-swiper"
  breakpoints={{
    1024: { slidesPerView: 4.7 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2.1 },
    320: { slidesPerView: 1.3 },
  }}
>
  {categoriesData.map((category, index) => (
    <SwiperSlide key={index} className="category-slide">
      <Link
        to={`/category/${category.category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
        className="link-container"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <h3>{category.category}</h3>
      </Link>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
}

export default Categories;
