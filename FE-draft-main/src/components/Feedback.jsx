import React from 'react'

import styled from 'styled-components';
import u1 from'../assets/images/user-1.png'
import u2 from'../assets/images/user-2.png'
import u3 from'../assets/images/user-3.png'


const TestimonialContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  background: 
  url("https://wallpaperaccess.com/full/1562622.jpg")
    center;
`;
const Smallcontainer = styled.div`
    max-width: 100%;
    margin: auto;
    padding: 0 25px;
`;
const Title = styled.h1`
    text-align: center;
    margin: auto;
    position: relative;
    line-height: 60px;
    color: #555;
    margin-bottom: 10px;
    &::after {
        content: '';
        background: #ff6d1a;
        width: 80px;
        height: 5px;
        border-radius: 5px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Col = styled.div`
max-width: 210px;
  text-align: center;
  padding: 40px 20px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.5s;
  background-color: #EBDDDD;
  &:hover {
    transform: translateY(-10px);
  }
`;
const Row = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const QuoteIcon = styled.i`
  font-size: 34px;
  color: #ff6d1a;
`;

const TestimonialText = styled.p`
  font-size: 12px;
  margin: 12px 0;
  color: #323232;
`;
const Date = styled.p`
  font-size: 12px;
  margin: 12px 0;
  color: #a6a6a6;
`;

const Rating = styled.div`
  /* Define styles for your rating component */
`;

const UserImage = styled.img`
  width: 50px;
  margin-top: 20px;
  border-radius: 50%;
`;

const UserName = styled.h3`
  font-weight: 600;
  color: #555;
  font-size: 16px;
`;

const Feedback = () => {
  return (
    <TestimonialContainer>
      <Smallcontainer>
        <Title>Feedback</Title>
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
            <UserName>Sean parker</UserName>
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
            <UserName>Sean parker</UserName>
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
            <UserName>Sean parker</UserName>
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
            <UserName>Sean parker</UserName>
          </Col>
          
        </Row>
      </Smallcontainer>
      
    </TestimonialContainer>
  )
}

export default Feedback