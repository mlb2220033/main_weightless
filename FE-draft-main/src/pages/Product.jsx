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



// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
//   ${mobile({ padding: "10px", flexDirection: "column" })}
// `;

// const ImgContainer = styled.div`
//   flex: 1;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 90vh;
//   object-fit: cover;
//   ${mobile({ height: "40vh" })}
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
//   ${mobile({ padding: "10px" })}
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const Price = styled.span`
//   font-weight: 100;
//   font-size: 40px;
// `;

// const FilterContainer = styled.div`
//   width: 50%;
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;

// const Button = styled.button`
//   padding: 15px;
//   border: 2px solid teal;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;

//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;

const ProductDisplayContainer = styled.div`
    display: flex;
    margin: 0px 170px;
    
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

const Image = styled.img`
    height: 163px;
`;

const MainImage = styled.img`
    width: 596px;
    height: 700px;
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

const CategoryInfo = styled.p`
    margin-top: 10px;
    font-weight: 600;
`;

const Product = () => {
//   const location = useLocation();
//   const id = location.pathname.split("/")[2];
//   const [product, setProduct] = useState({});
//   const [quantity, setQuantity] = useState(1);
//   const [color, setColor] = useState("");
//   const [size, setSize] = useState("");
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const res = await publicRequest.get("/products/find/" + id);
//         setProduct(res.data);
//       } catch {}
//     };
//     getProduct();
//   }, [id]);

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

const { id } = useParams();
  const product = normal.find((b) => b._id === id)
  return (
//     <Container>
      
//       <Wrapper>
//         <ImgContainer>
//           <Image src={product.img} />
//         </ImgContainer>
//         <InfoContainer>
//           <Title>{product.title}</Title>
//           <Desc>{product.desc}</Desc>
//           <Price>$ {product.price}</Price>
//           <FilterContainer>
//             <Filter>
//               <FilterTitle>Color</FilterTitle>
//               {product.color?.map((c) => (
//                 <FilterColor color={c} key={c} onClick={() => setColor(c)} />
//               ))}
//             </Filter>
//             <Filter>
//               <FilterTitle>Size</FilterTitle>
//               <FilterSize onChange={(e) => setSize(e.target.value)}>
//                 {product.size?.map((s) => (
//                   <FilterSizeOption key={s}>{s}</FilterSizeOption>
//                 ))}
//               </FilterSize>
//             </Filter>
//           </FilterContainer>
//           <AddContainer>
//             <AmountContainer>
//               <Remove onClick={() => handleQuantity("dec")} />
//               <Amount>{quantity}</Amount>
//               <Add onClick={() => handleQuantity("inc")} />
//             </AmountContainer>
//             <Button onClick={handleClick}>ADD TO CART</Button>
//           </AddContainer>
//         </InfoContainer>
//       </Wrapper>
//       <Newsletter />
//       <Footer />
//     </Container>
<ProductDisplayContainer>
            <LeftSection>
            <ImageList>
                {/* Hiển thị danh sách các ảnh */}
         
                <Image src={product?.img[0]} />
          
            </ImageList>
                {/* <div className="productdisplay_img">
                    <MainImage src={mainImageSrc} alt="" />
                </div> */}
            </LeftSection>
            <RightSection>
                <ProductTitle>{product?.name}</ProductTitle>
                <StarRating></StarRating>
                <PriceContainer>
                    <OldPrice>${product?.price}</OldPrice>
                    <NewPrice>${product?.price}</NewPrice>
                </PriceContainer>
                <div className="productdisplay_right_descr">
                    {product?.desc}
                </div>
                <SizeSelectionTitle>select size</SizeSelectionTitle>
                <SizeOptions>
                    <SizeOption>S</SizeOption>
                    <SizeOption>M</SizeOption>
                    <SizeOption>L</SizeOption>
                    <SizeOption>XL</SizeOption>
                    <SizeOption>XXL</SizeOption>
                </SizeOptions>
                <AddToCartButton >ADD TO CART</AddToCartButton>
                <CategoryInfo><span>Category :</span> {product?.cat}</CategoryInfo>
                
            </RightSection>
        </ProductDisplayContainer>
  );
};

export default Product;
