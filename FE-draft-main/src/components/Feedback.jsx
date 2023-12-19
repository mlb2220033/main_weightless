import React from 'react'

import styled from 'styled-components';
import u1 from'../assets/images/user-1.png'
import u2 from'../assets/images/user-2.png'
import u3 from'../assets/images/user-3.png'


const TestimonialContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  // background: 
  // url("https://wallpaperaccess.com/full/1562622.jpg")
  //   center;
  background-color: #fe5f00
`;
const Smallcontainer = styled.div`
    max-width: 100%;
    margin: auto;
    padding: 0 25px;
`;
const Title = styled.h1`

    text-align: center;
    padding-top:10px;
    padding-bottom:1vw;
    margin: auto;
    position: relative;
    line-height: 60px;
    color: #f2f2f2;
    font-size: 40px;
    letter-spacing: 0.05em;
    text-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5); 
    font-family: 'Fjalla One', sans-serif;
    margin-bottom:20px;
//     -webkit-text-stroke: 0.5px #d2d2d2; /* Viền đen với độ rộng 2px */
// text-stroke: 0.5px #d2d2d2;

    &::after {
        content: '';
        background: #f2f2f2;
        width:  140px;
        height: 5px;
        border-radius: none;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        
    }
`;

const Col = styled.div`
max-width: 15vw;
  text-align: center;
  padding: 20px 20px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3); 
  cursor: pointer;
  transition: transform 0.5s;
  background-color: #d9d9d9;
  &:hover {
    transform: translateY(-10px);
  }
  
`;
const Row = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom:30px;
`;
const QuoteIcon = styled.i`
  font-size: 34px;
  color: #000000;
`;

const TestimonialText = styled.p`
  font-size: 20px;
  margin: 12px 0;
  color: #000000;
`;
const Date = styled.p`
  font-size: 16px;
  margin: 12px 0;
  color: #000000;
`;

const Rating = styled.div`
  /* Define styles for your rating component */
`;

const UserImage = styled.img`
  width: 70px;
  margin-top: 20px;
  border-radius: 50%;
`;

const UserName = styled.h3`
  font-weight: 600;
  color: #000000;
  font-size: 25px;
`;

const Feedback = () => {
  return (
    <TestimonialContainer>
      <Smallcontainer>
        <Title>FEEDBACK</Title>
        <Row>
          <Col>
            <QuoteIcon className="fa fa-quote-left"></QuoteIcon>
            <TestimonialText>
            Exceptional performance, sleek design. Highly satisfied, a great investment in quality.
            </TestimonialText>
            <Date>
              07/12/2023
            </Date>
            <UserImage src={u1} alt="User 1" />
            <UserName>Sean Parker</UserName>
          </Col>
          
          <Col>
            <QuoteIcon className="fa fa-quote-left"></QuoteIcon>
            <TestimonialText>
            Efficient and durable. Great value, exceeded expectations. Highly recommended purchase.
            </TestimonialText>
            <Date>
            07/12/2023
            </Date>
            <UserImage src={u2} alt="User 1" />
            <UserName>Minh Le</UserName>
          </Col>
          <Col>
            <QuoteIcon className="fa fa-quote-left"></QuoteIcon>
            <TestimonialText>
            Durable, stylish, and reliable. Exceeded expectations, highly recommended purchase.
            </TestimonialText>
            <Date>
            07/12/2023
            </Date>
            <UserImage src={u1} alt="User 1" />
            <UserName>Thao Van</UserName>
          </Col>
          <Col>
            <QuoteIcon className="fa fa-quote-left"></QuoteIcon>
            <TestimonialText>
            Impressive quality, sleek design. A top-notch product, worth every penny spent.
            </TestimonialText>
            <Date>
            07/12/2023
            </Date>
            <UserImage src={u3} alt="User 1" />
            <UserName>Thanh Thao</UserName>
          </Col>
          
        </Row>
      </Smallcontainer>
      
    </TestimonialContainer>
  )
}

export default Feedback