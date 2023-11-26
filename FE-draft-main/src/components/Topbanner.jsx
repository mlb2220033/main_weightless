import React from 'react'
import styled from "styled-components"
const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;width:100%;
`;
const Topbanner = () => {
  return (
    
            <ImgContainer>
              <Image src='https://www.gornation.com/cdn/shop/files/header_gornation_bars_homepage.jpg?v=1693571157&width=2000' />
            </ImgContainer>
            
    
  )
}

export default Topbanner