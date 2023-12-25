import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  
  
  position: relative;
  overflow: hidden;
  
  margin-top: 15px;
  ${mobile({ fontSize: "24px" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
flex: 1;

/* padding: 40px; */
padding-right: 5vw;
// padding-left: 5vw;
height: 55vh;
padding-top: 20vh;
padding-bottom: 5vh;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  // font-weight: 500;
  // letter-spacing: 3px;
  font-family: 'Fjalla One', sans-serif;
  text-align:justify;
`;
const ButtonLink = styled(Link)`
  text-decoration: none;

`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #fe5f00; // Màu của văn bản khi hover
    transition: 0.3s ease-in-out;
    .dropdown {
      display: block; /* Hiển thị dropdown khi hover */
    }
  }
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    console.log(direction)
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>
        {/* <Wrapper data-slideindex={slideIndex}> */}
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <ButtonLink to={`/products`}>
              <Button> SHOP NOW</Button></ButtonLink>
            </InfoContainer>
          </Slide>
        ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider