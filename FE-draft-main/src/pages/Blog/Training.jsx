import React from "react";

import blog from "../../assets/data/blog.json";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import { useParams } from "react-router-dom";
const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const TrainingDetail = () => {
  const { training } = blog.blog[0];
  const { itemName } = useParams();
  const selectedItem = training.find((item) => item.name === decodeURIComponent(itemName));

  // If itemName is present, render the detail view for the selected item
  if (itemName && selectedItem) {
    return (
      <div>
        <Navbar/>
        <img src={selectedItem.image} alt='' />
        <h2>{selectedItem.name}</h2>
        
         {selectedItem.detail}
        {/* Add more details as needed */}
        <Footer/>
      </div>
    );
  }

  // Otherwise, render the list of items
  return (
    <>
      <Navbar />
      <section className='blog'>
        <div className='container'>
          {training && training.map((item) => (
            <MyLink to={`/blogs/training/${encodeURIComponent(item.name)}`} key={item.name}>
              <div className='box boxItems'>
                <div style={{width:"100px", height:"100px"}}>
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
      <Footer />
    </>
  );
};

export default TrainingDetail;