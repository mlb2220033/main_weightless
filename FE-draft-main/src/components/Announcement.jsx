import React from 'react'
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,Google,
  Twitter,YouTube
} from "@material-ui/icons";
const Container = styled.div`
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SocialContainer = styled.div`
display: flex;
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
cursor: pointer;
margin-left: 20px;

`;
const Title = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size:20px;
`;
  const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;
const Announcement = () => {
  return (
    
    <Container>
      <Left>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook style={{ fontSize: 21}}/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram style={{ fontSize: 21}}/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter style={{ fontSize: 21}}/>
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube style={{ fontSize: 21}}/>
          </SocialIcon>
        </SocialContainer>
        <Title>
          Telephone:  +1 234 56 78
        </Title>
        </Left>
        <Center>
          
        Free Shipping on Orders Over $50 
        
        </Center>
        
      
      <Right>
        <Title>$USD</Title>
      </Right>


    </Container>

  )
}

export default Announcement