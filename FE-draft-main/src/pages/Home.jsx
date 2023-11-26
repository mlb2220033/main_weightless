import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Feedback from '../components/Feedback'
import styled from 'styled-components';
const Title = styled.h1`
    text-align: center;
    margin: auto;
    position: relative;
    line-height: 60px;
    color: #555;

    &::after {
        content: '';
        background: #ff523b;
        width: 80px;
        height: 5px;
        border-radius: 5px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;
const Home = () => {
  return (
    <div>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Title>Best Seller</Title>
      <Products></Products>
      <Feedback></Feedback>
      <Newsletter></Newsletter>
      
      <Footer></Footer>
    </div>
    
  )
}

export default Home