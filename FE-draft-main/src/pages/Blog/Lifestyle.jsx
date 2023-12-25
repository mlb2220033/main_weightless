import React from "react";

import blog from "../../assets/data/blog.json";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Navbarnotrans from "components/Navbarnotrans";

import { useParams } from "react-router-dom";
const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Lifestyledetail = () => {
  const { lifestyle } = blog.blog[1];
  const { itemName } = useParams();
  const selectedItem = lifestyle.find((item) => item.name === decodeURIComponent(itemName));

  // If itemName is present, render the detail view for the selected item
  if (itemName && selectedItem) {
    return (
      <div>
        <Navbarnotrans/>
        <img src={selectedItem.image} alt='' />
        <div className="detail">
        <AiOutlineClockCircle className='icon' />{" "}
        <label htmlFor=''>{selectedItem.published}</label>
        <div className='text' dangerouslySetInnerHTML={{ __html: selectedItem.detail }} />

        </div>
        
        {/* Add more details as needed */}
        <Footer/>
      </div>
    );
  }
  // // Otherwise, render the list of items
  // return (
  //   <>
  //     <Navbar />
  //     <section className='blog'>
  //       <div className='container'>
  //         {lifestyle && lifestyle.map((item) => (
  //           <MyLink to={`/blogs/lifestyle/${encodeURIComponent(item.name)}`} key={item.name}>
  //             <div className='box boxItems'>
  //               <div className='img'>
  //                 <img src={item.image} alt='' />
  //               </div>
  //               <div className='details'>
                
  //                 <h3>{item.name}</h3>
                  
  //                 <div className='tag'>
  //                   <AiOutlineTags className='icon' />
  //                   {item.type}
  //                 </div>
  //                 <div className='date'>
  //                   <AiOutlineClockCircle className='icon' />{" "}
  //                   <label htmlFor=''>{item.published}</label>
  //                   <AiOutlineShareAlt className='icon' />{" "}
  //                   <label htmlFor=''>SHARE</label>
  //                 </div>
  //               </div>
  //             </div>
  //           </MyLink>
  //         ))}
  //       </div>
  //     </section>
  //     <Footer />
  //   </>
  // );
};

export default Lifestyledetail;