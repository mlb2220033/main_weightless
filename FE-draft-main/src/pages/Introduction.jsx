import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Topbanner from '../components/Topbanner'
import styled from "styled-components";
import { Link } from "react-router-dom"
import { mobile } from "../responsive";
import { intro, news } from '../data';
import Menubar from '../components/Menubar'

const Container = styled.div``;
const SmallContainer = styled.div`
  display: flex;
  padding: 5px;
  
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
const IntroContainer = styled.div`
  
  cursor: pointer;
  margin: 2px;
  height: 70vh;
  width: 50%;
  position: relative;
  transition: transform 0.3s;
  &:hover ${Info} {
    opacity: 1; // Change opacity to 1 on hover
  }
`;
const DesContainer = styled.div`
  margin: auto;
  height: 40vh;
  width: 50%;
  text-align: center;
  
  position: relative;

    
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  ${mobile({ height: "20vh" })}

`;


const Title = styled.h1`
    color:black;
    margin: 20px;
    text-align: center;
`;
const Title1 = styled.h1`
    color:black;
    margin: 20px;
    position: relative;
    
    
`;
const Introduction = () => {
  return (

  <>
  <Navbar></Navbar>
  <Menubar></Menubar>
  <SmallContainer>
  
  </SmallContainer>
    
    <Footer></Footer>
    </>
 
 
  )};





export default Introduction
