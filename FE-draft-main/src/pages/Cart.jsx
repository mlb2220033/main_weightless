import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from 'react-redux';
import { normal } from "../data";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbarnoscroll from 'components/Navbarnoscroll';
import { decreaseAmount, increaseAmount, removeAllOrderProduct, removeOrderProduct, selectedOrder } from '../redux/slides/orderSlice';

const Container = styled.div``;

const Wrapper = styled.div`
  // padding: 20px;
  padding-left:5rem;
  padding-right:5rem;
  margin-bottom: 2rem;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
    background-color: #fe5f00; // Màu của văn bản khi hover
    border-color:#fe5f00;
    transition: 0.3s ease-in-out;
  }
`;
const RemoveButton = styled.button`
  padding: 10px;
  font-weight: 600;
  width:100px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
    background-color: #fe5f00; // Màu của văn bản khi hover
    border-color: #fe5f00;
    color: #ffffff;
    transition: 0.2s ease-in-out;
  }
`;

const TopTexts = styled.div`

  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-size: 20px;
  margin: 0px 10px;
`;
const RemoveIcon = styled.img`
    width: 15px;
    margin: 0px 40px;
    cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:1rem;

  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
  padding: 0px 20px;
  
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 20px 0;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  
`;

const Image = styled.img`
  width: 200px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  cursor: pointer;
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    background-color: #fe5f00; // Màu của văn bản khi hover
    border-color:#fe5f00;
    transition: 0.3s ease-in-out;
  }
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

`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    background-color: #fe5f00; // Màu của văn bản khi hover
    border-color:#fe5f00;
    transition: 0.3s ease-in-out;
  }
`;

const Cart = () => {
  const navigate = useNavigate();
  const cart= useSelector(state=>state.order)
  const dispatch = useDispatch()

  const handleRemoveAllOrder = () => {
    // if(listChecked?.length > 1){
      dispatch(removeAllOrderProduct())
    // }
  }
  const handleChangeCount = (type, idProduct, limited) => {
    if(type === 'increase') {
      if(!limited) {
        dispatch(increaseAmount({idProduct}))
      }
    }else {
      if(!limited) {
        dispatch(decreaseAmount({idProduct}))
      }
    }
  }
  const handleDelete = (idProduct) => {
    dispatch(removeOrderProduct({idProduct}))
  }
  const handleCheckout=()=>{
    if(cart.orderItems){
      navigate('/payment')
    }else{
      console.log('mt')
      alert('Your Cart is Empty!')
    }
  }
  return (
    <Container>
      
      {/* <Announcement /> */}
      <Navbarnoscroll />
      <Wrapper>
        
        <Top>
          {/* <TopButton>CONTINUE SHOPPING</TopButton> */}
          
          <TopTexts>
            
            <RemoveButton onClick={handleRemoveAllOrder}>REMOVE ALL</RemoveButton>
          </TopTexts>
          <TopButton type="filled" onClick={() => navigate('/products')}>CONTINUE SHOPPING</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.orderItems.map((product)=>(
              <Product>
              <ProductDetail>
                <Image src={product.image} onClick={(event) => {navigate(`/product/${product.product}` )}}/>
                <Details>
                  <ProductName onClick={(event) => {navigate(`/product/${product.product}` )}}>
                    <b>Product:</b> {product.tittle}
                  </ProductName>
                  <ProductId>
                    <b>Unit Price:</b> {product.price}
                  </ProductId>
                  <ProductId>
                     <b>Size: {product.size.map((s)=>(s+" "))}</b>
                  </ProductId>
                  <RemoveButton onClick={() => handleDelete(product.product,product.size)}>Remove</RemoveButton>
                  {/* onClick={() => handleRemoveProduct(product._id)} */}
                  {/* <ProductColor color={normal[0].color} /> */}
                  {/* <ProductSize>
                    <b>Size:</b> {normal[0].size}
                  </ProductSize> */}
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <MyAdd onClick={() => handleChangeCount('increase', product.product,product?.amount === 100)}/>
                  <ProductAmount>{product.amount}</ProductAmount>
                  <MyRemove onClick={() => handleChangeCount('decrease', product.product,product?.amount === 1)}/>
                </ProductAmountContainer>
                <ProductPrice>
                  $ {(product.price * product.amount).toFixed(2)}
                </ProductPrice>
                
              </PriceDetail>
              <hr />
            </Product>
            
            ))}
              
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ 5</SummaryItemPrice>
            </SummaryItem>
           
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.itemsPrice.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY} */}
            {/* > */}
              <Button onClick={handleCheckout}>CHECKOUT NOW</Button>
            {/* </StripeCheckout> */}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart