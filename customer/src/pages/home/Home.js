import React from 'react';
import Carousel from './carousel/Carousel';
import CategoriesBox from './categories/CategoriesBox';
import BlogsBox from './blogs/BlogsBox';
import DescriptionBox from './description/DescriptionBox';
import KeywordsBox from './keywords/KeywordsBox';

const arr = [];

for(var i = 1; i < 100; i++) arr.push(i);

const Home = () => {
  return (
    <>
      <Carousel/>
      <CategoriesBox />
      <BlogsBox />
      <DescriptionBox />
      <KeywordsBox />
    </>
  )
}

export default Home