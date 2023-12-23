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
import b3 from  '../assets/images/b3.png';


const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:auto;
  ${mobile({ flexDirection: "column" })}
`;
const Wrapper = styled.div`
// padding: 0px 0px 0px 0px;
  ${mobile({ padding: "10px" })}
`;

const ImgContainer = styled.div`

  flex: 1;
  box-sizing: border-box
`;

const Image = styled.img`
max-width: 100%;
object-fit:contain;
height: auto;
`;

const Container1 = styled.div`
display: flex;
flex-wrap: wrap;
height: 70vh;
padding-top: 3rem;
padding-bottom: 3rem;
@media (max-width: 768px) {
  height: auto;
}

`;

const Container2 = styled.div`
  display: flex;
  // height: 70vh;
  // flex-wrap: wrap;
  // box-sizing: border-box
  
  // background: linear-gradient(to top right, #1b1f23 10%, #000000 100%);
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7); /* Điều chỉnh giá trị box shadow tại đây */
  margin-bottom: 5px;
  margin-right:10vw;
  margin-left:10vw;
  // max-width: 1200px; /* Kích thước tối đa của container */
  margin: 0 auto; /* Căn giữa container */
  

  ${mobile({ flexDirection: "row" })}
`;

const Column = styled.div`
  display: flex;
  
  flex: 1;
  position: relative; /* Cần để position: absolute; trong Imgbg hoạt động đúng */
  min-width: 0;
  padding-right: 3rem;
  
  
`;
const Columnleft = styled.div`
  display: flex;
  
  padding-left: 10rem;
  flex: 1;
  position: relative; /* Cần để position: absolute; trong Imgbg hoạt động đúng */
  min-width: 0;
  
  
`;

const Column1 = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  min-width: 0;
  background:rgba(27,31,35,1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  margin: 20px;
  transition: transform 0.5s;
  position: relative; 
  &:hover {
    transform: translateY(-10px);
  }
  
`;

const Imgbg = styled.div`
  width: 25vw;
  height: 55vh;
  background: #f3702a;
  position: absolute;
  @media (max-width: 100px) {
    height: auto;
  }
  padding-left:1rem;
  padding-top: 1rem;

`;


const Image1 = styled.img`
  position: absolute;
    width: 30vw;
    height: 60vh;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
    z-index: 1;
    @media (max-width: 100px) {
      height: auto;
    }
`;

const Textcontain = styled.div`
width: 35vw;
  text-align:justify;
  position: absolute;
  font-size: 20px;
  
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
width: 450px;

text-align:justify;
position: absolute;
font-size: 20px;

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
  width: 25vw;
  height: 55vh;
  background: #f3702a;
  position: absolute;
  @media (max-width: 100px) {
    height: auto;
  }
  padding-right:6rem;
  padding-bottom: 4rem;
`;


const Image2 = styled.img`
position: absolute;
width: 30vw;
height: 60vh;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
z-index: 1;
@media (max-width: 100px) {
  height: auto;
}
`;


const Aboutus = () => {
  
  return (
    <Container>
      <Navbar/>
      
      <ImgContainer>
        <Image src={b3}/>
      </ImgContainer>
      
        <Container1>
          <Columnleft>
            <Imgbg>
              <Image1 src={Fitness}/>
            </Imgbg>
          </Columnleft>

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
          <Columnleft>
          <Textcontain>
            <Title>WHY CHOOSING WEIGHTLESS</Title>
            Calisthenics is a workout style that focuses on using body weight to train strength, flexibility, and balance. With the name Weightless, we believe that practicing calisthenics will bring a sense of lightness, freedom, and no limitation by gravity.            <br/><br/>
            The brand's goal is to create conditions for people to train their bodies independently and flexibly. By focusing on calisthenics, Weightless allows you to perform exercises without the need for complex workout equipment or going to the gym. Calisthenics training helps you develop muscle strength, body control, and improve flexibility.          
            </Textcontain>
          </Columnleft>

          <Column>
            <Imgbg>
              <Image2 src={Vision}/>
            </Imgbg>
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