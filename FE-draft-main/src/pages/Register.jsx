import React from 'react'
import styled from "styled-components";
import { Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import {mobile} from "../responsive";
import gg from '../assets/images/google.png'
import fb from '../assets/images/Facebook.png'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://c4.wallpaperflare.com/wallpaper/446/73/103/lake-athletes-handstand-calisthenics-wallpaper-preview.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
    justify-content: center;
    width: 500px;
    margin-inline: 24px;
    background-color: hsla(#ff6d1a, .01);
    border: 2px solid hsla(0, 0%, 100%, .7);
    padding: 10px 16px 20px;
    color: var(--white-color);
    border-radius: 15px;
    backdrop-filter: blur(14px);
    ${mobile} {
        width: 90%; // Adjust the width for smaller screens
      }
    
`;
const Title = styled.h1`
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
`;
const Form = styled.form`
    font-size: 16px;
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;
const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    background: none;
    color: var(--white-color);
    padding-block: 10px;


`;
const Separator = styled.div`
    width: calc(100% - 20px);
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    gap: 10px;
    margin: 0 10px;
    margin-top: 5px;
    margin-bottom: 16px;

    > p {
        display: block;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        margin: auto;
    }

    .line {
        display: inline-block;
        width: 100%;
        height: 1px;
        margin: auto;
    }
`;
const Login = styled.div`
    font-size: 14px;
    text-align: center;
    margin-top: 20px;

    a {
        color: var(--white-color);
        font-weight: 600;

        &:hover {
            text-decoration: underline;
        }
    }
`;
const MyRow = styled(Row)`
display: flex;
flex-wrap: wrap;

`
;
const CheckBox = styled.div`
    padding-top: 20px;
    
    align-items: center;
`;
const CheckInput = styled.input`
    width: 13px;
    height: 13px;
    margin-left:5%;
    margin-right:1px;


    
`;
const Title1 = styled.div`

margin-right: 10px;
margin-top: 16px;
text-align: center;
font-size: 14px;
a {
    color: var(--white-color);
    font-weight: 600;

    &:hover {
        text-decoration: underline;
    }
}
`;

const MyCol = styled(Col)`

  grid-template-columns: 1fr max-content;
  column-gap: 12px;
  align-items: center;
  padding-inline: 20px;
  border-radius: 10px;
  border: 2px solid hsla(0, 0%, 100%, 0.7); /* Updated border color opacity */
  margin: 5px;
  font-size: 14px;
  flex: 1;
  ${mobile} {
    width: 100%; // Make the columns take full width on smaller screens
  }
`;
const LoginButton = styled.button`
    width: 80%;
    
    margin-left: 50px;
    margin-right: 50px;
    padding: 16px;
    
    margin-top: 16px;
    
    border-radius: 10px;
    background-color: #ff6d1a;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    border: 2px solid hsla(0, 0%, 100%, .7);
    ${mobile} {
        margin-left: 0;
        margin-right: 0;
      }
`;
const GoogleImage = styled.img`
    width: 30px;
`;
const FacebookImage = styled.img`
    width: 35px;
`;
const GoogleText = styled.p`
  
    font-size: 16px;
    width: 90%;
`;
const SignIn = styled.div`
    display: flex;
    gap: 15px;
`;
const FacebookButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    cursor: pointer;
    width: 90%;
    height: 60px;
    padding: 0 30px;
    background: #1877F2;
    color: white;
    border: 1px solid #ccc;
`;
const GoogleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    cursor: pointer;
    width: 90%;
    height: 60px;
    padding: 0 30px;
    background: #fff;
    border: 1px solid #ccc;
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
  ${mobile({ fontSize: "24px" })}
`;
function Register() {
    return (
        <Container>
            <Form>
            <Wrapper>
                
                <Title>CREATE ACCOUNT HERE</Title>
                        <MyRow> 
                            <MyCol><Input placeholder="First Name" type="text" required/></MyCol>
                            <MyCol><Input placeholder="Last Name" type="text" required/></MyCol>
                        </MyRow>
                        <MyRow>
                            <MyCol><Input placeholder="Email" type="email" required/></MyCol>
                        </MyRow>
                        <MyRow>
                            <MyCol><Input placeholder="Password" type="password" required/></MyCol>
                        </MyRow>
                        <MyRow>
                            <MyCol><Input placeholder="Confirm Password" type="password" required/></MyCol>
                        </MyRow>

                        <MyRow xs="auto">
                            <MyCol>
                                <Input placeholder="" type="date" required/>
                            </MyCol>
                            <MyCol>
                                <CheckBox>
                                Female
                                <CheckInput type="radio" name="gender" id="female-option" /></CheckBox>
                            </MyCol>
                            <MyCol>
                                <CheckBox>
                                Male
                                <CheckInput type="radio" name="gender" id="male-option"/></CheckBox>
                            </MyCol>
                            <MyCol>
                                <CheckBox>
                                Custom
                                <CheckInput type="radio" name="gender" id="custome-option"/></CheckBox>
                            </MyCol>
                        </MyRow>
                        <Title1>By Clicking Sign-up, you agree to our  <MyLink to='/terms-and-policies'>Terms and Policies</MyLink>
                         . You may receive SMS notifications from us and can opt out at any time.
                         </Title1>
                         <LoginButton type="submit">Register</LoginButton>
                         <Separator>
                        <hr className="line" />
                        <p>or</p>
                        <hr className="line" />
                    </Separator>
                    <SignIn>
                        <GoogleButton >
                            <GoogleImage src={gg} alt="" />
                            <GoogleText>Sign up with Google</GoogleText>
                        </GoogleButton>
                        <FacebookButton >
                            <FacebookImage src={fb} alt="" />
                            <GoogleText>Sign up with Facebook</GoogleText>
                        </FacebookButton>
                    </SignIn>
                    <Login>
                        Already have an account? <MyLink to='/login'>Log in</MyLink>
                    </Login>
            </Wrapper>
            </Form>
        </Container>
    )
}

export default Register