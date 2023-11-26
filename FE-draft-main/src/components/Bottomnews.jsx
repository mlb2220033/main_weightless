import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive"
import { news } from '../data';
const Container = styled.div``;
const SmallContainer = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
  

  
    
`;
const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); // Added background color for hover effect
  opacity: 0; // Set initial opacity to 0 for the hover effect
  transition: opacity 0.3s ease; // Added transition for smooth hover effect
`;
const NewsContainer = styled.div`
  flex: 1;

  margin: 3px;
  height: 70vh;
  width: 40%;
  position: relative;
  transition: transform 0.3s;
  &:hover ${Info} {
    opacity: 1; // Change opacity to 1 on hover
    
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  ${mobile({ height: "20vh" })}

`;

const FTitle = styled.h1`
    text-align: center;
    margin: auto;
    position: relative;
    line-height: 60px;
    color: #555;
    margin-bottom: 10px;
    &::after {
        content: '';
        background: #ff6d1a;
        width: 80px;
        height: 5px;
        border-radius: 5px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Title = styled.h1`
    color:white;
    margin: 20px;
`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    
    font-weight: 600;
`;
const Bottomnews = () => {
  return (
    <Container>
      <FTitle>What's new?</FTitle>
    <SmallContainer>
      
    <NewsContainer>
      <Image src={news[0].banner} />
      <Info>
        <Title>{news[0].title}</Title>
        <Button>JOIN NOW</Button>
      </Info>
      
    </NewsContainer>
    <NewsContainer>
      <Image src={news[1].banner} />
      <Info>
        <Title>{news[1].title}</Title>
        <Button>JOIN NOW</Button>
      </Info>
    </NewsContainer>
    </SmallContainer></Container>
  )
}

export default Bottomnews