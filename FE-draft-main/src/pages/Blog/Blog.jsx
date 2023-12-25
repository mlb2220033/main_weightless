import React from "react"
import Announcement from "components/Announcement"
import Navbar from "components/Navbar"
import Card from "components/Blog/Lifestyle"
import Footer from "components/Footer"
import styled from "styled-components"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import b3 from  '../../assets/images/b3.png';
import { mobile } from '../../responsive';
import "../../components/Blog/blog.css";
import blog from "../../assets/data/blog.json";
import { Link } from "react-router-dom";
import Lifestyle from "components/Blog/Lifestyle"
import Training from "components/Blog/Training"
const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:auto;
  ${mobile({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  box-sizing: border-box
`;
const Image = styled.img`
max-width: 100%;
object-fit:contain;
height: auto;
`;
const Button = styled.button`
cursor:pointer;
display: flex;
text-align: center; /* Căn giữa theo chiều ngang */
align-items: center; /* Căn giữa theo chiều dọc */
font-size: 16px;
padding: 10px;
border-color: black;
background-color: #fff;
color:#000;
&:hover {
  background-color: #fe5f00; // Màu của văn bản khi hover
  border-color:#fe5f00;
  color: white;
  transition: 0.3s ease-in-out;
}
`;
const MyLink = styled(Link)`
text-decoration:none;
`;
const ButtonContainer = styled.div`
  display: flex;
  text-align:justify;
  min-width: 0;
  // max-width: 100%;
  // object-fit:contain;
  margin:40px 0 80px 0;
  justify-content:center;
`;
const Title = styled.h2`
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 0.05em;
  display: flex;

  position: relative;
  text-align:justify;
  margin-bottom:50px;
  justify-content:center;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom:-10px;
    left: 0;
    width: 100%;
    height: 0.5px;
    background-color: black; /* black color */
}
 
`;
const BlogHome = () => {
  const { training} = blog.blog[0];
  const { lifestyle} = blog.blog[1];
  console.log("Training Data:", training);
  console.log("Lifestyle Data:", lifestyle);

    return (
      <Container>
      <ImgContainer>
        <Image src={b3}/>
      </ImgContainer>
        {/* <Announcement></Announcement> */}
        <Navbar></Navbar>
        
  
      <section className='blog'>
        <Title>TRAININGS</Title>
        <div className='container'>
          {/* Map over the first 6 items in the "training" array if it exists */}
          {training && training.slice(0, 6).map((item) => (
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
            
          ))}
          </div>
          <MyLink to='/blogs/training'>
            <ButtonContainer>
                    <Button>VIEW ALL</Button>
                    </ButtonContainer>
                </MyLink>
          
          <Title>LIFESTYLES</Title>
          <div className='container'>
          
          
          {/* Map over the first 6 items in the "lifestyle" array if it exists */}
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
          ))}
        </div>
        <MyLink to='/blogs/lifestyle'>
            <ButtonContainer>
                    <Button>VIEW ALL</Button>
                    </ButtonContainer>
                </MyLink>
      </section>
   
        <Footer></Footer>
      </Container>
      
    )
  }
  
  export default BlogHome