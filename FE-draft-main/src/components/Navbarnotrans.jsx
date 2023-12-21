import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap';
import styled from "styled-components"
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import logo from '../assets/images/footer-logo.png'
import { mobile } from "../responsive";
import { Col, Row } from 'react-bootstrap';
import Dropdown  from './Dropdown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dropdownintro from './Dropdownintro';
import Dropdownblog from './Dropdownblog';
import '../styles/Video.css';
const Container = styled.div`
position: fixed;
  width: 100%;
  z-index: 1000;
//   transition: background-color 0.3s ease
  height: 80px;
  background: rgba(27,31,35,.9);
  // padding: 10px 10px;
  top:0;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  // margin-right:10%;
  // margin-top:10px;
  // margin-bottom:10px;
  // margin-left:10%;
  // background-color: #ffffff;
  padding-right:10%;
  padding-left:10%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height:40px;

`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Title = styled.div`
font-size: 20px;
font-weight: 600;
text-transform: uppercase;
cursor: pointer;
color: #f2f2f2;
/* margin-left: 25px; */
/* margin-right: 25px; */
// margin: 10px;
padding: 10px;
letter-spacing: .05em;
line-height: 1.2;

  
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  // margin-left: 25px;
  padding: 5px;
  margin-right: 10px; /* Thêm margin bên phải */
`;
const Input = styled.input`
  border: none;
  background: #f2f2f2;
  // padding-right:10px;
  margin-right: 10px; /* Thêm margin bên phải */
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  display: flex;  
  flex: 1;
  text-align: center;
  height:40px;
  margin-left: 10%;
  margin-right: 10%;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height:40px;

  
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
const MyLink = styled(Link)`
  text-decoration: none;
  color: #ffffff; /* Màu văn bản mặc định */
  position: relative;
  display: inline-block;
  width:max-content;
  

  &:hover {
    color: #fe5f00; // Màu của văn bản khi hover
    transition: 0.3s ease-in-out;
    .dropdown {
      display: block; /* Hiển thị dropdown khi hover */
    }
  }

  &:after {
    content: "";
    width: 60%; /* Độ dài của dấu gạch dưới */
    height: 2px;
    position: absolute;
    background: #fe5f00; /* Màu của dấu gạch dưới */
    bottom: 0px;
    left:15%;
    
    transform: scaleX(0); /* Bắt đầu với chiều rộng là 0 */
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1); /* Khi hover, chiều rộng là 1 (toàn bộ chiều rộng) */
  }
  ${mobile({ fontSize: "24px" })}
`;
const MyLinkcart = styled(Link)`
  text-decoration: none;
  color: #ffffff; /* Màu văn bản mặc định */
  position: relative;
  display: inline-block;
  width:max-content;
  

  &:hover {
    color: #fe5f00; // Màu của văn bản khi hover
    transition: 0.3s ease-in-out;
    .dropdown {
      display: block; /* Hiển thị dropdown khi hover */
    }
  }
  ${mobile({ fontSize: "24px" })}
`;

const Navbarnotrans = () => {
  const quantity = useSelector(state=>state.order.totalQuantity)
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [introDropdown, setIntroDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);

  const [navbar, setNavbar] = useState(false);

  // const handleProductEnter = () => setProductDropdown(true);
  // const handleProductLeave = () => setProductDropdown(false);

  // const handleIntroEnter = () => setIntroDropdown(true);
  // const handleIntroLeave = () => setIntroDropdown(false);

  // const handleClick= () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () =>{
    if(window.innerWidth < 960){
      setProductDropdown(false)
  }else{
    setProductDropdown(true)
  }
  };
  const onMouseLeave = () =>{
    if(window.innerWidth < 960){
      setProductDropdown(false)
  }else{
    setProductDropdown(false)
  }
  };
// Onmouse cho trang Intro
  const onMouseEnterIntro = () => {
    if (window.innerWidth < 960) {
      setIntroDropdown(false);
    } else {
      setIntroDropdown(true);
    }
  };

  const onMouseLeaveIntro = () => {
    if (window.innerWidth < 960) {
      setIntroDropdown(false);
    } else {
      setIntroDropdown(false);
    }
  };

  // Onmouse cho trang Blogs
  const onMouseEnterBlog = () => {
    if (window.innerWidth < 960) {
      setBlogDropdown(false);
    } else {
      setBlogDropdown(true);
    }
  };

  const onMouseLeaveBlog = () => {
    if (window.innerWidth < 960) {
      setBlogDropdown(false);
    } else {
      setBlogDropdown(false);
    }
  };

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    } else{
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    // Xóa event listener khi component unmount
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  
  return (
    <Container>
        <Wrapper className={navbar ? 'navbar navbar-scroll' : 'navbar'}>
            <Left>
            <Link to='/'><Logo src={logo}></Logo></Link>
                
            </Left>

            <Center>
              
              <MyLink to='/products' onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                
                <Title>Products <i className='icon ri-arrow-down-s-line'/></Title>
                {productDropdown && <Dropdown/>}
              </MyLink>
              

              <MyLink to='/aboutus' onMouseEnter={onMouseEnterIntro}
                onMouseLeave={onMouseLeaveIntro}>
                <Title>Introduction <i className='icon ri-arrow-down-s-line'/></Title>
                {introDropdown && <Dropdownintro/>}
              </MyLink> 

              <MyLink to='/blog' onMouseEnter={onMouseEnterBlog}
                onMouseLeave={onMouseLeaveBlog}>
                <Title>Blogs <i className='icon ri-arrow-down-s-line'/></Title>
                {blogDropdown && <Dropdownblog/>}
              </MyLink> 

              <MyLink to='/register'>
                <Title>Register</Title>
              </MyLink>
              
              <MyLink to='/login'>
                <Title>Log In</Title>
              </MyLink>
              
              
            </Center>

            <Right>
            <SearchContainer>
                  <Input/>
                  <Search style={{color:'gray',fontSize:'16px'}}/>
              </SearchContainer>
            <MyLinkcart to="/cart">
                <Badge badgeContent={quantity} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </MyLinkcart>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbarnotrans