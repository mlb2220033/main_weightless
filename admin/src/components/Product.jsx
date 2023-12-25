import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"
import * as ProductService from "../services/ProductService" 
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
    width: 60px;
    height: 60px;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate=useNavigate()
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    ProductService.deleteProduct(item._id)
    navigate(`/products`)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (

    <Container>
    <SmallContainer>
      <Circle />
      <Image src={item?.image[0].image}/>
      
      <Info>
        <Icon onClick={showModal}>Delete</Icon>
        <Icon onClick={()=>navigate(`/product/${item._id}`)}>Detail</Icon>
        <Icon onClick={()=>navigate(`/update/${item._id}`)}>Update</Icon>
        
      </Info>
      
    </SmallContainer>
    <Name>{item.name}</Name>
    
    <Price>ID: {item._id}</Price>
    
    <Modal title="Delete Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button onClick={()=>navigate(`/product/${item._id}`)}>Product Detail</Button>
            <CancelBtn />
            <OkBtn />
          </>
        )}>
        <p>Are you sure to delete <strong>{item.name}</strong> (ID: {item._id})?</p>
        
      </Modal>
    </Container>
  )
}

export default Product