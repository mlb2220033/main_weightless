import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { normal } from "../data";
import axios from "axios"
import { useQuery } from "react-query";
import * as ProductService from '../services/ProductService'
import { addOrderProduct,resetOrder } from '../redux/slides/orderSlice'
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


  // const [product, setProduct] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   const [color, setColor] = useState("");
//   const [size, setSize] = useState("");
//   const dispatch = useDispatch();
  
  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3001/api/product/get-details/" + id);
  //       setProduct(res.data);
  //     } catch {}
  //   };
  //   getProduct();
  // }, [id]);
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



//new
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

    // useEffect(() => {
    //     initFacebookSDK()
    // }, [])

    // useEffect(() => {
    //     const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id) 
    //     if((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && productDetails?.countInStock > 0)) {
    //         setErrorLimitOrder(false)
    //     } else if(productDetails?.countInStock === 0){
    //         setErrorLimitOrder(true)
    //     }
    // },[numProduct])

    // useEffect(() => {
    //     if(order.isSucessOrder) {
    //         message.success('Đã thêm vào giỏ hàng')
    //     }
    //     return () => {
    //         dispatch(resetOrder())
    //     }
    // }, [order.isSucessOrder])

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
    const handleAddOrderProduct = () => {
        // if(!user?.id) {
        //     navigate('/sign-in', {state: location?.pathname})
        // }else {
            // {
            //     tittle: { type: String, required: true },
            //     amount: { type: Number, required: true },
            //     image: { type: String, required: true },
            //     price: { type: Number, required: true },
            //     product: {
            //         type: mongoose.Schema.Types.ObjectId,
            //         ref: 'Product',
            //         required: true,
            //     },
            // },

            const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id)
            // if((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && productDetails?.countInStock > 0)) {
            // if(productDetails.size) { 
            //   if(selectedSize)  {
                 dispatch(addOrderProduct({
                    orderItem: {
                      tittle: productDetails?.name,
                        amount: numProduct,
                        image: productDetails?.image[0].image,
                        price: productDetails?.price,
                        size:[selectedSize],
                        product: productDetails?._id,
                        // discount: productDetails?.discount,
                        // countInstock: productDetails?.countInStock
                    },
                    
                }))
              // }else{
              //   alert("saiz đâu")
              // }
           
              // }
            // } else {
                // setErrorLimitOrder(true)
            // }
        
    }
    console.log("ord",order)
    const pushSize = () => {
      setSelectedSize();
      sai.push(selectedSize);
      console.log('sai',sai)
    };
    
  return (




        <Container>
    <Navbar></Navbar>
    
    <ProductDisplayContainer>
            <LeftSection>
            
                {/* Hiển thị danh sách các ảnh */}
         
                <Image src={productDetails?.image[0].image} />
          
            
                {/* <div className="productdisplay_img">
                    <MainImage src={mainImageSrc} alt="" />
                </div> */}
            </LeftSection>
            <RightSection>
                
                <StarRating></StarRating>
                
                <ProductTitle>{productDetails?.name}</ProductTitle>
                <PriceContainer>
                    <OldPrice>${(productDetails?.price*1.2).toFixed(2)}</OldPrice>
                    <NewPrice>${productDetails?.price}</NewPrice>
                </PriceContainer>
                <div className="productdisplay_right_descr">
                    {productDetails?.description}
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
                  {productDetails?.size.map((s) => (
                    <SizeOption onClick={() => {setSize(s.size);handleSizeClick(s.size)}} key={s.size} selected={selectedSize === s.size} >{s.size}</SizeOption>
                  ))}
                </SizeOptions>
                 <AmountContainer>
              <Remove  onClick={() => handleChangeCount('decrease',numProduct === 1)}/>
              <Amount>{numProduct}</Amount>
              <Add  onClick={() => handleChangeCount('increase',numProduct === 100)}/>
              {/* ,  numProduct === productDetails?.countInStock  */}
            </AmountContainer>  
                <AddToCartButton onClick={()=>{handleAddOrderProduct();pushSize()}}>ADD TO CART</AddToCartButton>
                {/* <CategoryInfo><span>Category :</span> {product?.categories?.[0]}</CategoryInfo> */}
                
            </RightSection>
        </ProductDisplayContainer>
        </Container>
  );
};

export default Product;
