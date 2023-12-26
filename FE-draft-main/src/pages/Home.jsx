import React, { useState } from 'react'
import Navbar from '../components/Navbar'

import Slider from '../components/Slider'

import Products from '../components/Products'

import Footer from '../components/Footer'
import Feedback from '../components/Feedback'
import styled from 'styled-components';
import Video from '../components/Video'
const Title = styled.h1`

    text-align: center;
    padding-top:2vw;
    padding-bottom:1vw;
    margin: auto;
    position: relative;
    line-height: 60px;
    color: #000000;
    font-size: 40px;
    letter-spacing: 0.05em;
    font-family: 'Fjalla One', sans-serif;

    &::after {
        content: '';
        background: #ff523b;
        width: 140px;
        height: 5px;
        border-radius: none;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Home = () => {
 
  return (
    <div>
      

      <Navbar></Navbar>
      <Video></Video>
      <Slider></Slider>

      <Title>BEST SELLERS</Title>
      <Products limit={8} cat="Best"></Products>
      <Feedback></Feedback>

      
      <Footer></Footer>
    </div>
    
  )
}

export default Home