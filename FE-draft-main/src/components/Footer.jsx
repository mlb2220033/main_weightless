import React from 'react';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube
} from "@material-ui/icons";
import logo from '../assets/images/footer-logo.png';
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  // height:25vh;
  flex-wrap: wrap;

  padding-right:10%;
  padding-left:10%;
  background: linear-gradient(rgba(27, 31, 30, 0.9), rgba(27, 31, 30, 0.9)),
  url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/4b2e6d135446867.61e806cc3eeac.jpg") center;
  ${mobile({ flexDirection: "column" })}
`;

const Column = styled.div`
  flex: 1;
  margin: 10px;
  // text-align: center;
  width:50px;
  padding-bottom: 2%;
  padding-top:2%;
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;

`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h3`
margin-block-start: 1em;
margin-block-end: 0.5em;
color:#d9d9d9

`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: #d9d9d9;
  &:hover {
    color: #fe5f00; // Màu của văn bản khi hover
    transition: 0.3s ease-in-out;
  }
`;
const MyUl = styled.ul`
  list-style: none;
  // padding-top: 3px;
  padding-inline-start: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  color:#d9d9d9
  
`;
const MyLi = styled.li`
  padding:5px;
  color:#d9d9d9
  
`;

const Footer = () => {
  return (
    <Container>
      <Column> 
        <Logo src={logo}></Logo>
        
        <SocialContainer>
          <SocialIcon >
            <Facebook style={{ fontSize: 20 }}/>
          </SocialIcon>
          <SocialIcon >
            <Instagram style={{ fontSize: 20}}/>
          </SocialIcon>
          <SocialIcon >
            <Twitter style={{ fontSize: 20}}/>
          </SocialIcon>
          <SocialIcon >
            <YouTube style={{ fontSize: 20}}/>
          </SocialIcon>
        </SocialContainer>
        <MyUl>
          <MyLi>© 2023 Weightless Calisthenics Vietnam. All rights reserved.</MyLi>
        </MyUl>

      </Column>
      <Column>
        <Title>Quick Links</Title>
        <MyUl>
        <MyLi><MyLink to='/'>Home</MyLink></MyLi>
        <MyLi><MyLink to='/products'>Products</MyLink></MyLi>
        <MyLi><MyLink to='/aboutus'>Introduction</MyLink></MyLi>
        </MyUl>
      </Column>
      <Column>
        <Title>More Info</Title>
        <MyUl>
          <MyLi><MyLink to='/customer-service'>Customer Services</MyLink></MyLi>
          <MyLi><MyLink to='/terms-and-policies'>Terms and Policies</MyLink></MyLi>
        </MyUl>
        
        
        
      </Column>
      <Column>
        <Title>Contact</Title>
        <MyUl>
        <MyLi><Room/> 16, Quang Trung, Hiep Phu, Thu Duc City</MyLi>
        <MyLi><Phone/> +1 234 56 78</MyLi>
        <MyLi><MailOutline /> weightless@gmail.com</MyLi>
        </MyUl>
      </Column>
 
      {/* <Column>
        <Link to='/products'>Products</Link>
      </Column>
      <Column>
        <MyLink to='/terms-and-policies'>Terms and Policies</MyLink>
      </Column>
      <Column>
        © 2023 Weightless Calisthenics Vietnam. All rights reserved.
      </Column>
      <Column>
        <Link to='/aboutus'>Introduction</Link>
      </Column>
      <Column>
        <MailOutline style={{marginRight:"10px"}} /> weightless@gmail.com
      </Column> */}
    </Container>
  );
}

export default Footer;
