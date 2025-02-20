import { useEffect, useState } from "react"
import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesItems from "./categoriesComp/Categories-items";

function Categories() {

  const categoriesData = [
    {
      category: "Art",
      image: "https://media.timeout.com/images/106006274/image.jpg"
    },
    {
      category: "Biography",
      image: "https://t3.ftcdn.net/jpg/01/10/23/98/360_F_110239841_FF8MwMeJ9ZE4f9OItsuvOfEOhR0OTGZY.jpg"
    },
    {
      category: "Business & Economics",
      image: "https://img.freepik.com/free-vector/business-people-working-celebrating-success-rising-arrow_1262-19724.jpg"
    },
    {
      category: "Children's Books",
      image: "https://media.tpt.cloud/nextavenue/uploads/2024/07/childrensbooks.jpg"
    },
    {
      category: "Comics & Graphic Novels",
      image: "https://assets-prd.ignimgs.com/2023/09/27/comic-book-covers-1695839217489.jpg"
    },
    {
      category: "Computers",
      image: "https://st3.depositphotos.com/14862852/17648/i/450/depositphotos_176480284-stock-photo-desktop-computer-blank-screen-digital.jpg"
    },
    {
      category: "Cooking",
      image: "https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"
    },
    {
      category: "Education",
      image: "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
    },
    {
      category: "Health & Fitness",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2ph5uq8-8k-xtbfz3fWXYSDc-R0xkGUJSQ&s"
    },
    {
      category: "History",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      category: "Literature",
      image: "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2019/02/classic-lit-.jpg?fit=1024%2C768&ssl=1"
    },
    {
      category: "Medical",
      image: "https://www.postdicom.com/images/blog-posts/social-media-images/medical-imaging-types-and-modalities.png"
    },
    {
      category: "Music",
      image: "https://t3.ftcdn.net/jpg/02/02/59/16/360_F_202591641_vj8OUw8TnsDuUvGJGna0rTMZZxnXkfNV.jpg"
    },
    {
      category: "Photography",
      image: "https://plus.unsplash.com/premium_photo-1682097066897-209d0d9e9ae5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
    },
    {
      category: "Science",
      image: "https://www.pewresearch.org/science/wp-content/uploads/sites/16/2019/03/PS_2019.03.28_science-knowledge_featured_image-1.jpg"
    }
  ]

  return (
    <div className="categories">
    <h2>Categories</h2>
    <div className="categories-wrapper">
      {categoriesData.map((category, index) => (
        <div key={index} className="category-item">
          <Link to={`/category/${category.category.toLowerCase()}`} className="link-container" style={{ backgroundImage: `url(${category.image})` }}>
            <h3>{category.category}</h3>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );


}

export default Categories