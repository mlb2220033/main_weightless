import React from 'react'
import styled from "styled-components"
import bproduct from  '../assets/images/bproduct.png';
const ImgContainer = styled.div`
  display: flex;
  text-align:justify;
  font-size: 20px;
  min-width: 0;
  max-width: 100%;
  object-fit:contain;
  height: 15vh;
  justify-content:center;
  padding-top:5rem;

`;

const Title = styled.h1`
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 0.05em;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom:-20px;
    left: 0;
    width: 100%;
    height: 0.5px;
    background-color: black; /* black color */
}
 
`;

const Topbanner = () => {
  return (
    <ImgContainer>
    <Title>PRODUCTS</Title>
    
  </ImgContainer>
            
    
  )
}

export default Topbanner