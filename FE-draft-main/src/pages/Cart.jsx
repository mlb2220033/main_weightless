import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import { normal } from "../data";
import { useNavigate } from 'react-router-dom';

import remove_icon from '../assets/images/cart_cross_icon.png';
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
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
`;
const RemoveButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
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
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

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
`;
const Cart = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      
      <Announcement />
      <Navbar />
      <Wrapper>
        
        <Top>
          {/* <TopButton>CONTINUE SHOPPING</TopButton> */}
          
          <TopTexts>
            <TopText>Your Bag</TopText>
            
          </TopTexts>
          <TopButton type="filled">CONTINUE SHOPPING</TopButton>
        </Top>
        <Bottom>
          <Info>
          
              <Product>
                <ProductDetail>
                  <Image src={normal[0].img[0]} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {normal[0].name}
                    </ProductName>
                    <ProductId>
                      <b>Unit Price:</b> {normal[0].price}
                    </ProductId>
                    <RemoveButton>Remove</RemoveButton>
                    {/* <ProductColor color={normal[0].color} /> */}
                    {/* <ProductSize>
                      <b>Size:</b> {normal[0].size}
                    </ProductSize> */}
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {normal[0].price }
                  </ProductPrice>
                </PriceDetail>
              </Product>

              <Product>
                <ProductDetail>
                  <Image src={normal[4].img[0]} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {normal[4].name}
                    </ProductName>
                    <ProductId>
                      <b>Unit Price:</b> {normal[4].price}
                    </ProductId>
                    <RemoveButton>Remove</RemoveButton>
                    {/* <ProductColor color={normal[0].color} /> */}
                    {/* <ProductSize>
                      <b>Size:</b> {normal[0].size}
                    </ProductSize> */}
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {normal[4].price }
                  </ProductPrice>
                </PriceDetail>
              </Product>

              <Product>
                <ProductDetail>
                  <Image src={normal[7].img[0]} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {normal[7].name}
                    </ProductName>
                    
                    <ProductId>
                      <b>Unit Price:</b> {normal[7].price}
                    </ProductId>
                    <RemoveButton>Remove</RemoveButton>
                    {/* <ProductColor color={normal[0].color} /> */}
                    {/* <ProductSize>
                      <b>Size:</b> {normal[0].size}
                    </ProductSize> */}
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {normal[7].price *2}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ 5</SummaryItemPrice>
            </SummaryItem>
           
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 70</SummaryItemPrice>
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
              <Button onClick={() => navigate('/payment')}>CHECKOUT NOW</Button>
            {/* </StripeCheckout> */}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart