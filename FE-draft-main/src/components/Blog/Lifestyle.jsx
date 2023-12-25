import React from "react";
import "./blog.css";
import lifbanner from  '../../assets/images/lifbanner.png';
import blog from "../../assets/data/blog.json";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const ImgContainer = styled.div`

  flex: 1;
  box-sizing: border-box
`;

const Image = styled.img`
max-width: 100%;
object-fit:contain;
height: auto;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Lifestyle = () => {
  const { training} = blog.blog[0];
  const { lifestyle} = blog.blog[1];
  console.log("Training Data:", training);
  console.log("Lifestyle Data:", lifestyle);

  return (
    <>
    <Navbar/>
    <ImgContainer>
        <Image src={lifbanner}/>
      </ImgContainer>
      <section className='blog'>
        <div className='container'>
          {/* Map over the first 6 items in the "training" array if it exists */}
          {/* {training && training.slice(0, 6).map((item) => (
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
          
          {/* Map over the first 6 items in the "lifestyle" array if it exists */}
          {lifestyle && lifestyle.map((item) => (
            <MyLink to={`/blogs/lifestyle/${item.name}`}>
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
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Lifestyle;
