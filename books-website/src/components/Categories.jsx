import { useEffect, useState } from "react"
import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesItems from "./categoriesComp/Categories-items";

function Categories() {

  const categoriesData = [
    {
      category: "Art",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
    },
    {
      category: "Biography",
      image: "https://images.unsplash.com/photo-1593642634315-8f8a27f8d8d5"
    },
    {
      category: "Business & Economics",
      image: "https://images.unsplash.com/photo-1556742427-1b5e3a5d7f3e"
    },
    {
      category: "Children's Books",
      image: "https://images.unsplash.com/photo-1544716278-d0f0c1a2d0e9"
    },
    {
      category: "Comics & Graphic Novels",
      image: "https://images.unsplash.com/photo-1594093486547-48e0d784c170"
    },
    {
      category: "Computers",
      image: "https://images.unsplash.com/photo-1504638360573-6b2cdb1d06f9"
    },
    {
      category: "Cooking",
      image: "https://images.unsplash.com/photo-1561948955-4b79ad42b85a"
    },
    {
      category: "Education",
      image: "https://images.unsplash.com/photo-1585825442999-227f0bc4b302"
    },
    {
      category: "Health & Fitness",
      image: "https://images.unsplash.com/photo-1576621840027-d5b2e8c07292"
    },
    {
      category: "History",
      image: "https://images.unsplash.com/photo-1584567323250-d7d2879d8b71"
    },
    {
      category: "Literature",
      image: "https://images.unsplash.com/photo-1587502531413-d6cd16d6f21e"
    },
    {
      category: "Medical",
      image: "https://images.unsplash.com/photo-1603034062811-c2f8f451b0e2"
    },
    {
      category: "Music",
      image: "https://images.unsplash.com/photo-1512292020617-0e9748a6be96"
    },
    {
      category: "Photography",
      image: "https://images.unsplash.com/photo-1602665618935-15d9a232271b"
    },
    {
      category: "Science",
      image: "https://images.unsplash.com/photo-1555685812-61ef510d9eeb"
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