import React from 'react'
import styled from "styled-components"

import { Link,Outlet } from "react-router-dom"

import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  margin: auto;
  background-color: white;
  box-sizing: border-box;
  
  ${mobile({ height: "50px" })}
`;


const Header= styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: space-between;
  margin-left: 37%;
  margin-right: 34%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  color: black;
  text-decoration: none!important;
  &:hover {
    color: #FE5F00; // Màu của văn bản khi hover
    text-decoration: none!important;
    
  }
  a {
    text-decoration: none !important; /* Loại bỏ gạch chân của các thẻ a bên trong Title */
  }
`;

const Separator = styled.div`
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.3); /* Màu của dấu | */
  margin: 0 10px; /* Khoảng cách giữa dấu | và các phần tử khác */
`;



const Menubar = () => {
  return (
    <>
    <Container>
            <Header>
              <Link to='aboutus' style={{ textDecoration: 'none' }}>
                <Title>ABOUT US</Title>
              </Link>
              <Separator></Separator>
              <Link to='customer-service' style={{ textDecoration: 'none' }}>
                <Title>CUSTOMER SERVICES</Title>
              </Link>
              <Separator></Separator>
              <Link to='terms-and-policies' style={{ textDecoration: 'none' }}>
                <Title>TERMS AND POLICIES</Title>
              </Link>
            </Header>
        
    </Container>
    <Outlet/>
    </>
  )
}

export default Menubar
