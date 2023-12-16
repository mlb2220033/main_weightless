import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mobile } from '../responsive';
import styled from 'styled-components';
import banner1 from '../assets/images/banner1.JPG'
import b2 from '../assets/images/b2.png'
import { Nav } from 'react-bootstrap';
import Mission from '../assets/images/Mission.jpg'
import Vision from '../assets/images/Vision.jpg';
import Wallpaper from '../assets/images/Wallpaper.jpg';
import Fitness from '../assets/images/Fitness.jpg';


const Container = styled.div`
`;
const Wrapper = styled.div`
// padding: 0px 0px 0px 0px;
  ${mobile({ padding: "10px" })}
`;

const ImgContainer = styled.div`
  width:100%;
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 70vh;
  width:100vw;
`;

const Container1 = styled.div`
  display: flex;
  height: 70vh;
  flex-wrap: wrap;
  // background: linear-gradient(to top right, #1b1f23 10%, #000000 100%);
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7); /* Điều chỉnh giá trị box shadow tại đây */
  margin-bottom: 5px;
  margin-right:10vw;
  margin-left:10vw;
  max-width: 1200px; /* Kích thước tối đa của container */
  margin: 0 auto; /* Căn giữa container */
  
  ${mobile({ flexDirection: "column" })}
`;

const Container2 = styled.div`
  display: flex;
  height: 50vh;
  flex-wrap: wrap;
  // background: linear-gradient(to top right, #1b1f23 10%, #000000 100%);
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7); /* Điều chỉnh giá trị box shadow tại đây */
  margin-bottom: 5px;
  margin-right:10vw;
  margin-left:10vw;
  max-width: 1200px; /* Kích thước tối đa của container */
  margin: 0 auto; /* Căn giữa container */
  
  ${mobile({ flexDirection: "column" })}
`;

const Column = styled.div`
  flex: 1;
  // margin: 10px;
  display: flex; /* Đặt thành flexbox để sử dụng align-items và justify-content */
  // align-items: center; /* Căn giữa theo chiều dọc */
  // justify-content: center; /* Căn giữa theo chiều ngang */
  width: 50%;
  height: 100%;
  
  position: relative; /* Cần để position: absolute; trong Imgbg hoạt động đúng */
  
`;

const Column1 = styled.div`
  flex: 1;
  // margin: 10px;
  display: flex; /* Đặt thành flexbox để sử dụng align-items và justify-content */
  // align-items: center; /* Căn giữa theo chiều dọc */
  // justify-content: center; /* Căn giữa theo chiều ngang */
  width: 50%;
  height: 90%;
  background:rgba(27,31,35,1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  margin: 20px;
  transition: transform 0.5s;
  position: relative; /* Cần để position: absolute; trong Imgbg hoạt động đúng */
  &:hover {
    transform: translateY(-10px);
  }
  
`;

const Imgbg = styled.div`
  width: 400px;
  height: 430px;
  background: #f3702a;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-60%, -50%);
`;


const Image1 = styled.img`
position: absolute;
    top: 10;
    bottom: 20px;
    left: 20px;
    width: 450px;
    height: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
    z-index: 1;
`;

const Textcontain = styled.div`
  width: 500px;
  height: 500px;
  // background: #f3702a;
  align-items: center;
  text-align:justify;
  position: absolute;
  bottom:70px;
  left: 0;
  font-size: 20px;
  // transform: translate(-80%, -10%);
`;
const Title = styled.h1`
position: relative;
font-family: 'Fjalla One', sans-serif;
letter-spacing: 0.05em;
margin-block-start: 0em;
`;
const Title1 = styled.h1`
position: relative;
font-family: 'Fjalla One', sans-serif;
letter-spacing: 0.05em;
margin-block-start: 0em;
color:#f3702a;
`;
const Textcontain1 = styled.div`
  width: 500px;
  height: 500px;
  // background: #f3702a;
  align-items: center;
  text-align:justify;
  position: absolute;
  top:10%;
  right: 6%;
  font-size: 20px;
  // transform: translate(-80%, -10%);
`;

const Textcontain2 = styled.div`
width: 300px;
height: 500px;
// background: #f3702a;
align-items: center;
text-align: justify;
display: flex;
flex-direction: column;
// justify-content: center;
position: relative;
color: #ffffff;
margin: 33px 20px 10px 29px;

`;

const Imgbg1 = styled.div`
width: 400px;
    height: 430px;
    background: #f3702a;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 70%;
    left: 70%;
    transform: translate(-70%, -70%);
`;


const Image2 = styled.img`
position: absolute;
top: 10;
bottom: 20px;
left: -70px;
width: 450px;
height: 500px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
z-index: 1;
`;


const Aboutus = () => {
  
  return (
    <Container>
      <Navbar/>
      
      <ImgContainer>
        <Image src={banner1}/>
      </ImgContainer>
      
        <Container1>
          <Column>
            <Imgbg>
              <Image1 src={Fitness}/>
            </Imgbg>
          </Column>

          <Column>
          <Textcontain>
            <Title>ABOUT WEIGHTLESS</Title>
            Weightless is a Vietnamese brand that is the first to provide professional calisthenics training equipment, creating conditions for individuals to independently and flexibly train their bodies.<br/>
            <br/>
                Weightless believes that training is not just a task but a personal journey full of inspiration and discovery. Weightless wants you to become the master of your body, unrestricted by anything, free to exercise anytime, anywhere, and in the way you want.
          </Textcontain>
          </Column>
        </Container1>

        <Container1>
          <Column>
          <Textcontain1>
            <Title>WHY CHOOSING WEIGHTLESS</Title>
            Calisthenics is a workout style that focuses on using body weight to train strength, flexibility, and balance. With the name Weightless, we believe that practicing calisthenics will bring a sense of lightness, freedom, and no limitation by gravity.            <br/><br/>
            The brand's goal is to create conditions for people to train their bodies independently and flexibly. By focusing on calisthenics, Weightless allows you to perform exercises without the need for complex workout equipment or going to the gym. Calisthenics training helps you develop muscle strength, body control, and improve flexibility.          </Textcontain1>
          </Column>

          <Column>
            <Imgbg1>
              <Image2 src={Vision}/>
            </Imgbg1>
          </Column>
        </Container1>

        <Container2>
          <Column1>
          <Textcontain2>
          <Title1>MISSION</Title1>
          Weightless's mission is to provide professional calisthenics training equipment through an e-commerce platform, creating conditions for people to train their bodies independently and flexibly.

          </Textcontain2>
          </Column1>
          <Column1>
          <Textcontain2>
          <Title1>VISION</Title1>
          The vision of Weightless is to become a reliable and reputable resource for the calisthenics community, offering customers high-quality products and services to help them develop strength, flexibility, and body balance.
          </Textcontain2>

          </Column1>
          <Column1>
          <Textcontain2>
          <Title1>CORE VALUES</Title1>
            Weightless is committed to providing high-quality calisthenics training equipment, carefully manufactured and selected to meet the needs and expectations of customers
          </Textcontain2>


          </Column1>
        </Container2>
        
        
        
      
      <Footer/>

    </Container>
    );
  };
  
  
  export default Aboutus;