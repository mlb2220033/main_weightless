import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { normal } from "../data";
import axios from "axios"


// const ProductDisplayContainer = styled.div`
//     display: flex;
//     margin: 0px 170px;
    
// `;

// const LeftSection = styled.div`
//     display: flex;
//     gap: 17px;
// `;

// const ImageList = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
// `;

// const Image = styled.img`
//     height: 163px;
// `;

// const MainImage = styled.img`
//     width: 596px;
//     height: 700px;
// `;

// const RightSection = styled.div`
//     margin: 0px 70px;
//     display: flex;
//     flex-direction: column;
// `;

// const ProductTitle = styled.h1`
//     color: #3d3d3d;
//     font-size: 40px;
//     font-weight: 700;
// `;

// const StarRating = styled.div`
//     display: flex;
//     align-items: center;
//     margin-top: 13px;
//     gap: 5px;
//     color: #1c1c1c;
//     font-size: 16px;
// `;

// const PriceContainer = styled.div`
//     display: flex;
//     margin: 40px 0px;
//     gap: 30px;
//     font-size: 24px;
//     font-weight: 700;
// `;

// const OldPrice = styled.div`
//     color: #818181;
//     text-decoration: line-through;
// `;

// const NewPrice = styled.div`
//     color: #ff4141;
// `;

// const SizeSelectionTitle = styled.h1`
//     margin-top: 55px;
//     color: #656565;
//     font-size: 20px;
//     font-weight: 600;
// `;

// const SizeOptions = styled.div`
//     display: flex;
//     margin: 30px 0px;
//     gap: 20px;
// `;

// const SizeOption = styled.div`
//     padding: 18px 24px;
//     background: #fbfbfb;
//     border: 1px solid #ebebeb;
//     border-radius: 3px;
//     cursor: pointer;
// `;

// const AddToCartButton = styled.button`
//     padding: 20px 40px;
//     width: 200px;
//     font-size: 16px;
//     font-weight: 600;
//     color: white;
//     background: #ff4141;
//     margin-bottom: 40px;
//     border: none;
//     outline: none;
//     cursor: pointer;
// `;

// const CategoryInfo = styled.p`
//     margin-top: 10px;
//     font-weight: 600;
// `;
//new
const Container = styled.div`

    
`;
const ProductDisplayContainer = styled.div`
    display: flex;
    margin: 0px 0px;
    
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
    width: 596px;
    height: 700px;
    ${mobile({ width:"50px"})}
`;

const RightSection = styled.div`
    margin: 0px 70px;
    display: flex;
    flex-direction: column;
`;

const ProductTitle = styled.h1`
    color: #3d3d3d;
    font-size: 40px;
    font-weight: 700;
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
    margin: 40px 0px;
    gap: 30px;
    font-size: 24px;
    font-weight: 700;
`;

const OldPrice = styled.div`
    color: #818181;
    text-decoration: line-through;
`;

const NewPrice = styled.div`
    color: #ff4141;
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
    background-color: ${({ selected }) => (selected ? 'teal' : 'white')};
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
    color: white;
    background: #ff4141;
    margin-bottom: 40px;
    border: none;
    outline: none;
    cursor: pointer;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const CategoryInfo = styled.p`
    margin-top: 10px;
    font-weight: 600;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
//   const product = normal.find((b) => b.id === id)
// const products = require('../assets/data/apparel/weightless.products.json');

// const product = products.apparel_products.find((product) => product._id.$oid === id);


  const [product, setProduct] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   const [color, setColor] = useState("");
//   const [size, setSize] = useState("");
//   const dispatch = useDispatch();
  
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/product/get-details/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
// console.log(product)
//   const handleQuantity = (type) => {
//     if (type === "dec") {
//       quantity > 1 && setQuantity(quantity - 1);
//     } else {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleClick = () => {
//     dispatch(
//       addProduct({ ...product, quantity, color, size })
//     );
//   };

// const { id } = useParams();
  
  return (

// <ProductDisplayContainer>
    
            //<LeftSection>
            //<ImageList>  
                //Hiển thị danh sách các ảnh 
         
            //     <Image src={product?.img[0]} />
          
            // </ImageList>
                // <div className="productdisplay_img">
                //     <MainImage src={mainImageSrc} alt="" />
                // </div> 
            // </LeftSection>
            // <RightSection>
            //     <ProductTitle>{product?.name}</ProductTitle>
            //     <StarRating></StarRating>
            //     <PriceContainer>
            //         <OldPrice>${product?.price}</OldPrice>
            //         <NewPrice>${product?.price}</NewPrice>
            //     </PriceContainer>
                // <div className="productdisplay_right_descr">
                //     {product?.desc}
                // </div> 
        //         <SizeSelectionTitle>select size</SizeSelectionTitle>
        //         <SizeOptions>
        //             <SizeOption>S</SizeOption>
        //             <SizeOption>M</SizeOption>
        //             <SizeOption>L</SizeOption>
        //             <SizeOption>XL</SizeOption>
        //             <SizeOption>XXL</SizeOption>
        //         </SizeOptions>
        //         <AddToCartButton >ADD TO CART</AddToCartButton>
        //         <CategoryInfo><span>Category :</span> {product?.cat}</CategoryInfo>
                
        //     </RightSection>
        // </ProductDisplayContainer>


        <Container>
    <Navbar></Navbar>
    
    <ProductDisplayContainer>
            <LeftSection>
            
                {/* Hiển thị danh sách các ảnh */}
         
                <Image src={product.data?.image[0].image} />
          
            
                {/* <div className="productdisplay_img">
                    <MainImage src={mainImageSrc} alt="" />
                </div> */}
            </LeftSection>
            <RightSection>
                
                <StarRating></StarRating>
                
                <ProductTitle>{product.data?.tittle}</ProductTitle>
                <PriceContainer>
                    <OldPrice>${product.data?.price}</OldPrice>
                    <NewPrice>${product.data?.price}</NewPrice>
                </PriceContainer>
                <div className="productdisplay_right_descr">
                    {product.data?.description}
                </div>
                
                {/* {product?.categories?.includes("Apparel")? 
            <FilterContainer>
              <Filter>
                <SizeSelectionTitle>Size</SizeSelectionTitle>
                <SizeOptions >
                  {product.size?.map((s) => (
                    <SizeOption onClick={() => {setSize(s),handleSizeClick(s)}} key={s} selected={selectedSize === s}>{s}</SizeOption>
                  ))}
                </SizeOptions>
              </Filter>
            </FilterContainer>
                :  <hr />
                    } */}
                 <SizeOptions >
                  {product.data?.size.map((s) => (
                    <SizeOption >{s}</SizeOption>
                  ))}
                </SizeOptions>
                 <AmountContainer>
              <Remove  />
              <Amount>1</Amount>
              <Add  /> 
            </AmountContainer>
                <AddToCartButton >ADD TO CART</AddToCartButton>
                {/* <CategoryInfo><span>Category :</span> {product?.categories?.[0]}</CategoryInfo> */}
                
            </RightSection>
        </ProductDisplayContainer>
        </Container>
  );
};

export default Product;
