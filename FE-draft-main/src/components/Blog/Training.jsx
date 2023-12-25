import React from "react";
import "./blog.css";
import blog from "../../assets/data/blog.json";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Training = () => {
  const { training} = blog.blog[0];
  const { lifestyle} = blog.blog[1];
  console.log("Training Data:", training);
  console.log("Lifestyle Data:", lifestyle);
  

  return (
    <>
    <Navbar/>
      <section className='blog'>
        <div className='container'>
        
          {/* Map over the first 6 items in the "training" array if it exists */}
          {training && training.map((item) => (
            <MyLink to={`/blogs/training/${item.name}`}>
            <div className='box boxItems' key={item.name}>
              <div className='img'>
                <img src={item.image} alt='' />
              </div>
              <div className='details'>
                <h3>{item.name}</h3>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  {item.type}
                </div>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' />{" "}
                  <label htmlFor=''>{item.published}</label>
                  
                  <AiOutlineShareAlt className='icon' />{" "}
                  <label htmlFor=''>SHARE</label>
                  
                
                </div>
              </div>
              
            </div>
            </MyLink>
            
          ))}
          
          {/* Map over the first 6 items in the "lifestyle" array if it exists
          {lifestyle && lifestyle.slice(0, 6).map((item) => (
            <div className='box boxItems' key={item.name}>
              <div className='img'>
                <img src={item.image} alt='' />
              </div>
              <div className='details'>
                <h3>{item.name}</h3>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  {item.type}
                </div>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' />{" "}
                  <label htmlFor=''>{item.published}</label>
                  
                  <AiOutlineShareAlt className='icon' />{" "}
                  <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))} */}
         
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Training;
