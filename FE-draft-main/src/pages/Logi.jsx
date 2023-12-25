import React from 'react'
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom"
import {mobile} from "../responsive";
import gg from '../assets/images/google.png'
import fb from '../assets/images/Facebook.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputForm from 'components/InputForm/InputForm';
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import * as UserService from '../../src/services/UserService'

import { useMutation } from '@tanstack/react-query';
import { useMutationHooks } from 'hooks/userMutationHook';
import Loading from 'components/LoadingComponent/Loading';


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
const Form = styled.form`
    
    font-size: 16px;
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoginFields = styled.div`
    width: 420px;
    margin-inline: 24px;
    background-color: hsla(#ff6d1a, .01);
    border: 2px solid hsla(0, 0%, 100%, .7);
    padding: 10px 16px 20px;
    color: var(--white-color);
    border-radius: 15px;
    backdrop-filter: blur(14px);
    
`;

const Title = styled.h1`
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
`;

const LoginBox = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content;
    column-gap: 12px;
    align-items: center;
    padding-inline: 20px;
    border-radius: 10px;
    border: 2px solid hsla(0, 0%, 100%, .7);
    margin-bottom: 10px;
    
`;

// const Input = styled.input`
//     border: none;
//     outline: none;
//     width: 100%;
//     height: 40px;
//     background: none;
//     color: var(--white-color);
//     padding-block: 10px;
    
// `;

const IconButton = styled.i`
    font-size: 20px;
`;

const Check = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    font-size: 13px;
`;

const CheckBox = styled.div`
    display: flex;
    column-gap: 8px;
`;

const CheckInput = styled.input`
    width: 16px;
    height: 16px;
    accent-color: var(--white-color);
`;

const Forgot = styled.a`
    color: var(--white-color);

    &:hover {
        text-decoration: underline;
    }
`;

// const LoginButton = styled.button`
//     width: 100%;
//     padding: 16px;
//     margin-bottom: 16px;
//     border-radius: 10px;
//     background-color: #ff6d1a;
//     color: #fff;
//     font-weight: 500;
//     cursor: pointer;
//     border: 2px solid hsla(0, 0%, 100%, .7);
// `;

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
    width: 100%;
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
    width: 100%;
    height: 60px;
    padding: 0 30px;
    background: #fff;
    border: 1px solid #ccc;
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

const Register = styled.div`
    font-size: 13px;
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
const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;
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
function Logi() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    const mutation = useMutationHooks(
        data => UserService.loginUser(data),
        {
          onSuccess: () => {
            setLoading(false);
          },
          onError: () => {
            setLoading(false);
          },
        }
      );
    const {data, isLoading} = mutation
    console.log('mutation', mutation)
    console.log('mutation status:', mutation.status)
    console.log('mutation error:', mutation.error)
    console.log('mutation data:', mutation.data)


    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleSignIn = () => {
        setLoading(true);
        mutation.mutate({
          email,
          password,
        });
        console.log('login', email, password);
      };
  return (
    <Container>

              <Form>
            <LoginFields>
                <Title>Login</Title>
                <LoginBox>
                    <InputForm type="email" placeholder="Email ID" value={email} onChange={handleOnchangeEmail} required />
                    <IconButton className="ri-mail-fill"></IconButton>
                </LoginBox>
                <LoginBox>
                    <InputForm type="password" placeholder="Password" value={password} onChange={handleOnchangePassword} required />
                    <IconButton className="ri-lock-fill"></IconButton>
                </LoginBox>
                <Check>
                    <CheckBox>
                        <CheckInput type="checkbox" id="user-check" />
                        <label  className="check-label">Remember me</label>
                    </CheckBox>
                    <Forgot href="#" className="forgot">Forgot Password?</Forgot>
                </Check>
                {mutation.data?.status === 'ERR' && (<span style={{ color: 'red' }}>{mutation.data?.message}</span>)}
                
                    <ButtonComponent
                        disabled={!email.length || !password.length}
                        onClick={handleSignIn}
                    
                        size={40}
                        styleButton={{
                        background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '100%',
                        border: 'none',
                        borderRadius: '4px',
                        margin: '26px 0 10px',
                        
                        }}
                        textbutton={'Login'}
                        styleTextButton={{ color: '#fff', fontSize: '20px', fontWeight: '700' }}
                    ></ButtonComponent>
                    {loading && (
                        <LoadingWrapper>
                            <Loading isLoading={loading} />
                        </LoadingWrapper>)}
                <Separator>
                    <hr className="line" />
                    <p>or</p>
                    <hr className="line" />
                </Separator>
                <SignIn>
                    <GoogleButton >
                        <GoogleImage src={gg} alt="" />
                        <GoogleText>Login in with Google</GoogleText>
                    </GoogleButton>
                    <FacebookButton >
                        <FacebookImage src={fb} alt="" />
                        <GoogleText>Login in with Facebook</GoogleText>
                    </FacebookButton>
                </SignIn>
                <Register>
                    Don't have an account? <MyLink to='/register'> Register</MyLink>
                </Register>
            </LoginFields>
        </Form>
    </Container>
  )
}

export default Logi