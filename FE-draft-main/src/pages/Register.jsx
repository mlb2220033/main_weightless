import React, { useEffect } from 'react'
import styled from "styled-components";
import { Col, Row } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from "react-router-dom"
import {mobile} from "../responsive";
import gg from '../assets/images/google.png'
import fb from '../assets/images/Facebook.png'
import { useState } from 'react';
import InputForm from 'components/InputForm/InputForm';
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import * as UserService from '.././services/UserService'
import { useMutationHooks } from 'hooks/userMutationHook';
import Loading from 'components/LoadingComponent/Loading';
// import { useMutation } from '@tanstack/react-query';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import * as message from '.././components/Message/Message'


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
    width: 525px;
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
    margin-top: 10px;
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
justify-content: center;
`
;
const CheckBox = styled.div`
    
    padding-top: 11px;
    
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

//   grid-template-columns: 1fr max-content;
//   column-gap: 12px;
//   align-items: center;
    padding-inline: 10px;
    border-radius: 10px;
    border: 2px solid hsla(0, 0%, 100%, 0.7);
    margin: 4px;
    font-size: 16px;
    flex: 1;
    text-align: center;
    padding-block: 10px;
 
  ${mobile} {
    width: 100%; // Make the columns take full width on smaller screens
  }
`;
const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// const LoginButton = styled.button`
//     width: 80%;
    
//     margin-left: 50px;
//     margin-right: 50px;
//     padding: 16px;
    
//     margin-top: 16px;
    
//     border-radius: 10px;
//     background-color: #ff6d1a;
//     color: #fff;
//     font-weight: 500;
//     cursor: pointer;
//     border: 2px solid hsla(0, 0%, 100%, .7);
//     ${mobile} {
//         margin-left: 0;
//         margin-right: 0;
//       }
// `;
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
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isloading, setLoading] = useState(false);
    
    const mutation = useMutationHooks(
        data => UserService.signupUser(data),
        {
          onSuccess: () => {
            setLoading(false);
          },
          onError: () => {
            setLoading(false);
          },
        }
      );
    const{data, isLoading, isSuccess, isError} = mutation
    console.log('mutation',mutation)
    
    useEffect(() => {
        if (isSuccess) {
          message.success()
          handleNavigateSignIn()
        } else if (isError) {
          message.error()
        }
      }, [isSuccess, isError])

    const handleOnchangeFirstname = (value) => {
        setFirstname(value)
    }
    const handleOnchangeLastname = (value) => {
        setLastname(value)
    }
    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }
    
    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }
    const handleSignUp = () => {
        setLoading(true);
        mutation.mutate({
            email, 
            password, 
            confirmPassword
        });
        console.log('sign-up', email, password, confirmPassword )
      };
    
        return (
        <Container>
            <Form>
            <Wrapper>
                
                <Title>CREATE ACCOUNT HERE</Title>
                        <MyRow> 
                            <MyCol><InputForm placeholder="First Name" type="text" value={Firstname} onChange={handleOnchangeFirstname} required/></MyCol>
                            <MyCol><InputForm placeholder="Last Name" type="text" value={Lastname} onChange={handleOnchangeLastname} required/></MyCol>
                        </MyRow>
                        <MyRow>
                            <MyCol><InputForm placeholder="Email" type="email" value={email} onChange={handleOnchangeEmail} required/></MyCol>
                        </MyRow>
                        <MyRow>
                            <MyCol><InputForm placeholder="Password" type="password" value={password} onChange={handleOnchangePassword} required/></MyCol>
                        </MyRow>
                        <MyRow>
                            <MyCol><InputForm placeholder="Confirm Password" type="password" value={confirmPassword} onChange={handleOnchangeConfirmPassword} required/></MyCol>
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
                         {mutation.data?.status === 'ERR' && (<span style={{ color: 'red' }}>{mutation.data?.message}</span>)}
                         <ButtonComponent 
                            disabled={!email.length || !password.length || !confirmPassword.length}
                            onClick={handleSignUp}
                            size={40}
                            type="submit"
                            styleButton={{
                              background: 'rgb(255, 57, 69)',
                              height: '48px',
                              width: '100%',
                              border: 'none',
                              borderRadius: '4px',
                              margin: '26px 0 10px',
                             
                            }}
                            textbutton={'Register'}
                            styleTextButton={{ color: '#fff', fontSize: '20px', fontWeight: '700' }}
                            ></ButtonComponent>
                            {isloading && (
                            <LoadingWrapper>
                                <Loading isLoading={isloading} />
                            </LoadingWrapper>)}
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