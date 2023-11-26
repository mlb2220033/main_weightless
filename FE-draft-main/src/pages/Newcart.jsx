import React, { useContext } from 'react';
import styled from 'styled-components';

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import remove_icon from '../assets/images/cart_cross_icon.png';
import { normal } from "../data";
const Container = styled.div``;
const CartItemsContainer = styled.div`
    margin: 100px 170px;
    
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Divider = styled.hr`
    height: 30px;
    background: #e2e2e2;
    border: 0;
`;

const CartItemsFormatMain = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 75px;
    padding: 20px 0px;
    color: #454545;
    font-size: 18px;
    font-weight: 600;
`;

const CartItemsFormat = styled.div`
    font-size: 17px;
    font-weight: 500;
`;

const CartIcon = styled.img`
    height: 62px;
`;

const RemoveIcon = styled.img`
    width: 15px;
    margin: 0px 40px;
    cursor: pointer;
`;

const CartItemsQuantity = styled.button`
    width: 64px;
    height: 50px;
    border: 2px solid #ebebeb;
    background-color: #fff;
`;

const CartItemsDown = styled.div`
    display: flex;
    margin: 100px 0px;
`;

const CartItemsTotal = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 200px;
    gap: 40px;
`;

const CartItemsTotalItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
`;

const CheckoutButton = styled.button`
    width: 262px;
    height: 58px;
    outline: none;
    border: none;
    background: #ff5a5a;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;

const PromoCodeContainer = styled.div`
    flex: 1;
    font-size: 16px;
    font-weight: 500;
`;

const PromoCodeText = styled.p`
    color: #555;
`;

const PromoCodeBox = styled.div`
    width: 504px;
    margin-top: 15px;
    padding-left: 20px;
    height: 58px;
    background: #eaeaea;
`;

const PromoCodeInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    width: 330px;
    height: 50px;
`;

const SubmitButton = styled.button`
    width: 170px;
    height: 58px;
    font-size: 16px;
    background: black;
    color: white;
    cursor: pointer;
`;

const CartItems = () => {
    

    return (
        <Container>
            <Announcement></Announcement>
            <Navbar></Navbar>
        <Left>
        
            <CartItemsFormatMain>
                <p>Products</p>
                <p>Title</p>
                <p>Prices</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </CartItemsFormatMain>
            <Divider />
            <CartItemsFormatMain>
                
                    <CartIcon src={normal[0].img[0]} alt="12" className="carticon_product_icon" />
                    <p>{normal[0].name}</p>
                    <p>${normal[0].price}</p>
                    <CartItemsQuantity className='cartitems_quantity'>2</CartItemsQuantity>
                    <p>${normal[0].price }</p>
                    <RemoveIcon className='cartitems_remove_icon' src={remove_icon} alt="" />
                </CartItemsFormatMain>
                <Divider />
                        
            </Left>       
               
            <Center>
            <CartItemsDown>
                <CartItemsTotal>
                    <h1>TOTAL</h1>
                    <div>
                        <CartItemsTotalItem>
                            <p>Subtotal</p>
                            <p>$</p>
                        </CartItemsTotalItem>
                        <Divider />
                        <CartItemsTotalItem>
                            <p>Shipping fees</p>
                            <p>Free</p>
                        </CartItemsTotalItem>
                        <Divider />
                        <CartItemsTotalItem>
                            <h3>Total</h3>
                            <h3>$</h3>
                        </CartItemsTotalItem>
                    </div>
                    <CheckoutButton>Proceed to check out</CheckoutButton>
                </CartItemsTotal>
                <PromoCodeContainer>
                    <PromoCodeText>enter</PromoCodeText>
                    <PromoCodeBox>
                        <PromoCodeInput type="text" placeholder='promo code' />
                        <SubmitButton>SUBMIT</SubmitButton>
                    </PromoCodeBox>
                </PromoCodeContainer>
            </CartItemsDown>
        </Center>
        <Footer></Footer>
        </Container>
    );
}

export default CartItems;
