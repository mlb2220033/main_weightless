import React from 'react'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { Link } from "react-router-dom"
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  const Container = styled.div`
    // max-width:300px;
    min-width:0;
    text-align:center;
    justify-content:center;
    
  `;
  const SmallContainer = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 300px;
    z-index: 2;
    width:300px;
  `;
  const Name = styled.h3`
    color:black;
    margin: 20px;
`;

const Price = styled.h4`
    color:black;
    margin: 20px;
    font-weight: lighter;
`;
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      color: #fe5f00;
      transform: scale(1.1);
    }
  `;
const MyLink = styled(Link)`
text-decoration:none;
&:hover {
  color: #fe5f00;
  transform: scale(1.1);
}
`;



const Product = ({item}) => {
  return (
    // <Container>
    //     <Circle></Circle>
    //     <Image src={item.img}></Image>
    //     <Info>
    //         <Icon>
    //             <ShoppingCartOutlined></ShoppingCartOutlined>
    //         </Icon>
    //         <Icon>
    //         <Link to={`/product/${item._id}`}>
    //       <SearchOutlined />
    //       </Link>
    //         </Icon>
    //         <Icon>
    //             <FavoriteBorderOutlined />
    //         </Icon>
    //     </Info>


    // </Container>
    <Container>
    <SmallContainer>
      <Circle />
      <Image src={item?.image[0].image}/>
      
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <MyLink to={`/product/${item._id}`}>
          <SearchOutlined /></MyLink>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      
    </SmallContainer>
    <Name>{item.name}</Name>
    <Price>${item.price}</Price>
    </Container>
  )
}

export default Product