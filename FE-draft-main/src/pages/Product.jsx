import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { mobile } from "../responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { normal } from "../data";
import axios from "axios"
import { useQuery } from "react-query";
import * as ProductService from '../services/ProductService'
import { addOrderProduct,resetOrder } from '../redux/slides/orderSlice'
import Navbarnoscroll from "components/Navbarnoscroll";
import Navbarnotrans from "components/Navbarnotrans";
import '../styles/Dropdown.css';
import Products from "../components/Products";

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
    height:70vh;
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
const MyAdd = styled(Add)`
  cursor: pointer;
  &:hover {
    color: #fe5f00; // Màu của văn bản khi hover
    transition: 0.2s ease-in-out;
  }
`;
const MyRemove = styled(Remove)`
cursor: pointer;
&:hover {
  color: #fe5f00; // Màu của văn bản khi hover
  transition: 0.2s ease-in-out;
}

`;;

const Product = () => {
  
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [numProduct, setNumProduct] = useState(1)
    // const user = useSelector((state) => state.user)
    const user=true
    const order = useSelector((state) => state.order)
    const [errorLimitOrder,setErrorLimitOrder] = useState(false)
    const navigate = useNavigate()
    const [size, setSize] = useState('');
    const dispatch = useDispatch()
    const [selectedSize, setSelectedSize] = useState('');
    const sai=[]
    const handleSizeClick = (size) => {
      setSelectedSize(size);
      
      console.log('size',selectedSize)
    }


    const onChange = (value) => { 
        setNumProduct(Number(value))
    }

    const fetchGetDetailsProduct = async (context) => {
      console.log(context)
      const id = context?.queryKey && context?.queryKey[1]
      if(id) {
          const res = await ProductService.getDetailsProduct(id)
          return res.data
      }
      
  }

    
    const handleChangeCount = (type,limited) => {
        if(type === 'increase') {
            if(!limited) {
                setNumProduct(numProduct + 1)
            }
        }else {
            if(!limited) {
                setNumProduct(numProduct - 1)
            }
        }
    }

    
    const { isLoading, data: productDetails } = useQuery(['product-details', id], fetchGetDetailsProduct, { enabled : !!id})
    console.log(productDetails)
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [limit] = useState(8)
    const handleAddOrderProduct = () => {
      dispatch(addOrderProduct({
          orderItem: {
            tittle: productDetails?.name,
              amount: numProduct,
              image: productDetails?.image[0].image,
              price: productDetails?.price,
              size:[selectedSize],
              product: productDetails?._id,

          },    
      }))
      setIsAddedToCart(true);

      // Optionally, reset the state after a delay
      setTimeout(() => {
        setIsAddedToCart(false);
      }, 1000); // Adjust the duration as needed

        
    }
    console.log("ord",order)
    const pushSize = () => {
      setSelectedSize();
      sai.push(selectedSize);
      console.log('sai',sai)
    };
    
  return (




        <Container>
    <Navbarnotrans></Navbarnotrans>
    
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
                    <OldPrice>${(productDetails?.price*1.2).toFixed(2)}</OldPrice>
                    <NewPrice>${productDetails?.price}</NewPrice>
                </PriceContainer>
                <div className="productdisplay_right_descr">
                    {productDetails?.description}
                </div>
                
                 <SizeOptions >
                  {productDetails?.size.map((s) => (
                    <SizeOption onClick={() => {setSize(s?.size);handleSizeClick(s?.size)}} key={s?.size} selected={selectedSize === s?.size} >{s?.size}</SizeOption>
                  ))}
                </SizeOptions>
                 <AmountContainer>
              <MyRemove  onClick={() => handleChangeCount('decrease',numProduct === 1)}/>
              <Amount>{numProduct}</Amount>
              <MyAdd  onClick={() => handleChangeCount('increase',numProduct === 100)}/>
              {/* ,  numProduct === productDetails?.countInStock  */}
            </AmountContainer>  
                <AddToCartButton onClick={handleAddOrderProduct} addedToCart={isAddedToCart}>
                {isAddedToCart ? "ADDED TO CART!" : "ADD TO CART"}
                  </AddToCartButton>
                {/* <CategoryInfo><span>Category :</span> {productDetails?.type?.map((t)=>(t))}</CategoryInfo> */}
            
                
            </RightSection>
        </ProductDisplayContainer>
        <Slider>
          <ProductTitle>YOU MAY ALSO LIKE</ProductTitle>
          <Products limit={limit}/>
          
        


        </Slider>
        <Footer></Footer>
        </Container>
  );
};

export default Product;
