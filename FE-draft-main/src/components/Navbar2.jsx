import React from 'react'
import styled from "styled-components"
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import logo from '../assets/images/footer-logo.png'
import { mobile } from "../responsive";


const Container = styled.div`
  height: 70px;
  margin-bottom:0px;
  background-color: #f2f2f2;
  padding-bottom: 30px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  margin-right:20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  background: #f2f2f2;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Logo = styled.img`
  margin-top:10px;
  width:150px;
  height:50px;
  ${mobile({ fontSize: "24px" })}
`;
const Navbar2 = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
              
            </Left>

            <Center>
              <Link to='/'><Logo src={logo}></Logo></Link>
              
            </Center>

            <Right>
              <Link to='/register' style={{ textDecoration: 'none' }}>
                <Title>Register</Title>
              </Link>
              
              <Link to='/login' style={{ textDecoration: 'none' }}>
                <Title>Log In</Title>
              </Link>
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                <Badge badgeContent={quantity} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar2