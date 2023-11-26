import React from 'react'
import {
    Facebook,
    Height,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
    YouTube
  } from "@material-ui/icons";
  import logo from '../assets/images/footer-logo.png'
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/4b2e6d135446867.61e806cc3eeac.jpg")
      center;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.img`
  width:150px;
  height:50px;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo src={logo}></Logo>
        <Desc>Lift your body, lift your spirit!</Desc>
        <Title>Socials</Title>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook style={{ fontSize: 34 }}/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram style={{ fontSize: 34}}/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter style={{ fontSize: 34}}/>
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube style={{ fontSize: 34}}/>
          </SocialIcon>
        </SocialContainer>
        </Left>

        <Center>
            <Title>Quick Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Introduction</ListItem>
                
            
            </List>
            <Title>More Infor</Title>
            <List>
                
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Customer Services</ListItem>
            </List>
        </Center>

        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 16, Quang Trung, Hiep Phu, Thu Duc City
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> weightless@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer