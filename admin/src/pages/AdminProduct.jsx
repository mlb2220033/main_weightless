// import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation, useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
// import { publicRequest } from "../requestMethods";
// import { addProduct } from "../redux/cartRedux";
// import { useDispatch, useSelector } from "react-redux";
// import { normal } from "../data";
// import axios from "axios"
import { useQuery } from "react-query";
import * as ProductService from '../services/ProductService'
// import { addOrderProduct,resetOrder } from '../redux/slides/orderSlice'
// import Navbarnoscroll from "components/Navbarnoscroll";
// import Navbarnotrans from "components/Navbarnotrans";
// import '../styles/Dropdown.css';
// import Products from "../components/Products";
import * as Productservice from "../services/ProductService"
import { Button, Modal } from 'antd'; 
//new
const Container = styled.div`
`;
const Slider = styled.div`
align-items:center;
margin: 40px 0px 20px;
padding-left:10rem;
padding-right:5rem;
display: flex;
flex-direction: column;
  
${mobile({ margin: "10px 0px" })}
`;
const ProductDisplayContainer = styled.div`
    height:80vh;
    display: flex;
    margin-top: 5rem;
    padding-left:10rem;
  padding-right:5rem;
  
${mobile({ margin: "10px 0px" })}
    
`;

const LeftSection = styled.div`
    display: flex;
    gap: 17px;

`;

const ImageList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ProductImage = styled.img`
    height: 163px;
`;

const Image = styled.img`

width:40vw;
height: 80vh;
    ${mobile({ width:"50px"})}
`;

const RightSection = styled.div`
    margin: 0px 70px;
    display: flex;
    flex-direction: column;
`;

const ProductTitle = styled.h1`
    color: black;
    font-size: 40px;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: .03em;
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

const StarRating = styled.div`
    display: flex;
    align-items: center;
    margin-top: 13px;
    gap: 5px;
    color: #1c1c1c;
    font-size: 16px;
`;

const PriceContainer = styled.div`
    display: flex;
    margin: 20px 0px;
    gap: 30px;
    font-size: 24px;
    font-weight: 700;
    
`;

const OldPrice = styled.div`
    color: #818181;
    text-decoration: line-through;
`;

const NewPrice = styled.div`
    color: #fe5f00;
    font-size:30px;
   
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSizeOption = styled.option`
padding: 18px 24px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    cursor: pointer;`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const SizeSelectionTitle = styled.h1`
    margin-top: 55px;
    color: #656565;
    font-size: 20px;
    font-weight: 600;
`;

const SizeOptions = styled.div`
    display: flex;
    margin: 30px 0px;
    gap: 20px;
`;

const SizeOption = styled.div`
    padding: 18px 24px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? '#fe5f00' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  padding-bottom: 15px;
`;
const AddToCartButton = styled.button`
    padding: 20px 40px;
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ addedToCart }) => (addedToCart ? "white" : "white")};
    background: ${({ addedToCart }) => (addedToCart ? "#218838" : "black")};
    margin: 20px 0px 40px 0px;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      
      background-color: ${({ addedToCart }) => (addedToCart ? "#218838" : "#fe5f00")};
      transition: 0.3s ease-in-out;
    }
    
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #B6B7B2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const CategoryInfo = styled.p`
    margin-top: 10px;
    font-weight: 600;
`;
const ButtonHead = styled.button`
cursor:pointer;
display: flex;
text-align: center; /* Căn giữa theo chiều ngang */
align-items: center; /* Căn giữa theo chiều dọc */
font-size: 16px;
padding: 10px;
border-color: black;
background-color: #fff;
margin: 50px;
color:#000;
&:hover {
  background-color: #fe5f00; // Màu của văn bản khi hover
  border-color:#fe5f00;
  color: white;
  transition: 0.3s ease-in-out;
}
`;
const ButtonContainer = styled.div`
  display: flex;
  text-align:justify;
  min-width: 0;
  max-width: 100%;
  object-fit:contain;
  margin-bottom:20px;
  
  justify-content:center;
  

`;

const Product = () => {
  
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [isModalOpen, setIsModalOpen] = useState(false);
//new

    const navigate = useNavigate()



    const fetchGetDetailsProduct = async (context) => {
      console.log(context)
      const id = context?.queryKey && context?.queryKey[1]
      if(id) {
          const res = await ProductService.getDetailsProduct(id)
          return res.data
      }
      
  }


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    ProductService.deleteProduct(id)
    navigate(`/products`)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    
    const { isLoading, data: productDetails } = useQuery(['product-details', id], fetchGetDetailsProduct, { enabled : !!id})
    console.log(productDetails)
const handleDelete=()=>{
  ProductService.deleteProduct(productDetails._id)
  navigate(`/products`)
}

    
  return (
<Container>
<div>AdminProduct</div>
<ButtonContainer>
      <ButtonHead  onClick={()=>navigate(`/products`)}>Product Home Page</ButtonHead>
    </ButtonContainer>
  <ProductDisplayContainer>
    <LeftSection>
    
        {/* Hiển thị danh sách các ảnh */}
  
        <Image src={productDetails?.image[0].image} />
  
    
        {/* <div className="productdisplay_img">
            <MainImage src={mainImageSrc} alt="" />
        </div> */}
    </LeftSection>
    <RightSection>
        
        
        
        <ProductTitle>{productDetails?.name}</ProductTitle>
        <StarRating></StarRating>
        <PriceContainer>
            
            <NewPrice>${productDetails?.price}</NewPrice>
        </PriceContainer>
        <div className="productdisplay_right_descr">
            {productDetails?.description}
        </div>
        
          <CategoryInfo><span>Category :</span> {productDetails?.type?.map((t)=>(t))}</CategoryInfo>
        <SizeOptions >
          {productDetails?.size?.map((s) => (
            <SizeOption >{s?.size}</SizeOption>
          ))}
        </SizeOptions>

        
          

        
    </RightSection>
  </ProductDisplayContainer>
  <ButtonContainer>
<ButtonHead onClick={()=>navigate(`/update/${productDetails._id}`)}>
          Edit
        </ButtonHead>
       
        <ButtonHead onClick={showModal}>
          Delete
        </ButtonHead></ButtonContainer>
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <p>Are you sure to delete <strong>{productDetails?.name}</strong> (ID: {productDetails?._id})?</p>
      
    </Modal>
        
</Container>
  );
};

export default Product;
