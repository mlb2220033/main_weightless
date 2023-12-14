import React , { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import camLogo from '../assets/images/logo_cam_nobg.png'
import caliLogo from '../assets/images/Calis.jpg'
import fitnessLogo from '../assets/images/Fitness.jpg'
import vision from '../assets/images/Vision.jpg'
import mission from '../assets/images/Mission.jpg'
import corevalue from '../assets/images/CoreValue.jpg'
import styled from "styled-components"
import { mobile } from "../responsive";
import {Link} from 'react-router-dom'
import Menubar from 'components/Menubar';

const Container=styled.div`
`

const Logo = styled.img`
  width:50%;
  height:50%;
  ${mobile({ fontSize: "24px" })}
`;

const CamLogo1 = styled.img`
  width: 100%; /* Thay đổi width để ảnh chiếm toàn bộ khối chứa */
  height: 1; /* Đảm bảo chiều cao tự động điều chỉnh theo tỷ lệ */
  ${mobile({ fontSize: '24px' })}
`;

const CaliLogo1 = styled.img`
  width: 100%; /* Thay đổi width để ảnh chiếm toàn bộ khối chứa */
  height: 1; /* Đảm bảo chiều cao tự động điều chỉnh theo tỷ lệ */
  ${mobile({ fontSize: '24px' })}
`;

const FitnessLogo1 = styled.img`
  width: 100%; /* Thay đổi width để ảnh chiếm toàn bộ khối chứa */
  height: 1; /* Đảm bảo chiều cao tự động điều chỉnh theo tỷ lệ */
  ${mobile({ fontSize: '24px' })}
`;

const Vision1 = styled.img`
  width: 350px; /* Thay đổi width để ảnh chiếm toàn bộ khối chứa */
  height: 500px; /* Đảm bảo chiều cao tự động điều chỉnh theo tỷ lệ */
  text-align: center;
  ${mobile({ fontSize: '24px' })}
`;

const Mission1 = styled.img`
  width: 350px; /* Thay đổi width để ảnh chiếm toàn bộ khối chứa */
  height: 500px; /* Đảm bảo chiều cao tự động điều chỉnh theo tỷ lệ */
  text-align: center;
  ${mobile({ fontSize: '24px' })}
`;

const Corevalue1 = styled.img`
  width: 350px; /* Thay đổi width để ảnh chiếm toàn bộ khối chứa */
  height: 500px; /* Đảm bảo chiều cao tự động điều chỉnh theo tỷ lệ */
  text-align: center;
  ${mobile({ fontSize: '24px' })}
`;

const LeftContent = styled.div`
  flex: 1;
  text-align: left;
  ${mobile({ padding: '10px' })}
`;

const RightContent = styled.div`
  flex: 1;
  text-align: right;
  ${mobile({ padding: '10px' })}
`;

const MiddleContent = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;

const Container1 = styled.div`
  display: flex;
  justify-content: center; /* Canh giữa nội dung trong Container */
  align-items: center; /* Canh giữa nội dung trong Container */
  background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.8)
  ),
  url("https://i.pinimg.com/564x/ad/69/be/ad69bed17e3394848dddbb468f9eafdf.jpg")
    center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 10px;
  ${mobile({ flexDirection: 'column' })}
  position: relative;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3702a; /* Màu nền của Container2 */
  color: white; /* Màu chữ của Container2 */
  position: relative;
  text-align: center;
`;

const Container3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2; /* Màu nền của Container3 */
  color: black; /* Màu chữ của Container3 */
  position: relative;
  text-align: center;
`;

const Container4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3702a; /* Màu nền của Container4 */
  color: #f2f2f2;; /* Màu chữ của Container4 */
  position: relative;
  text-align: center;
`;

const Container5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2; /* Màu nền của Container3 */
  color: #f3702a; /* Màu chữ của Container3 */
  position: relative;
  text-align: center;
`;

const Underline = styled.div`
  height: 2px;
  width: 25rem;
  background-color: #f2f2f2;
  margin-top: 0rem;
  margin-bottom: 1rem;
`;

const Underline1 = styled.div`
  height: 2px;
  width: 25rem;
  background-color: #0D0D0D;
  margin-top: 0rem;
  margin-bottom: 1rem;
`;

const Underline2 = styled.div`
  height: 4px;
  width: 36rem;
  background-color: #f2f2f2;
  margin-top: 0rem;
  margin-bottom: 1rem;
`;

const TextContainer = styled.div`
  text-align: justify;
`;

const TextContainer2 = styled.div`
  text-align: center;
`;

const TextContainer3 = styled.div`
  text-align: center;
  max-width: 350px; // Thêm max-width ở đây
  margin: 0 auto; // Đưa văn bản về giữa
`;

const TitleContainer = styled.div`
  position: relative;
`;

const ContentContainer = styled.div`
  display: flex;
  background: #f3702a;
  justify-content: space-between; // Thay đổi thành space-between để tạo ra khoảng trắng giữa các cột
  align-items: stretch; // Sử dụng stretch để đảm bảo các cột có chiều cao bằng nhau
  padding: 2px; // Khoảng cách giữa nội dung
  flex-wrap: wrap; // Cho phép các cột xuống dòng khi không đủ không gian
`;

const ColumnContainer = styled.div`
  flex: 0 1 calc(33.33% - 20px);
  margin: 0 10px -40px; // Thêm margin-bottom để giảm khoảng cách giữa các cột và hàng bên dưới
  box-sizing: border-box;
  text-align: center;
`;

const Final = styled.div`
  text-align: center;
  font-style: bold;
  font-size: 50px;
  margin: 10px 0px;
`;

const Final1 = styled.div`
  text-align: center;
  font-style: italic;
  font-size: 25px;
  margin: 10px 0px;
`;

const About_Us = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      
      {/*About Us*/}
      <Container1>
        <section style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <LeftContent>
            <div className="left-half">
              <h1 className='sec1'>
                ABOUT<br/>
                WEIGHTLESS
              </h1>
            </div>
          </LeftContent>
          <RightContent>
            <div className='right-half'>
            <CamLogo1 src={camLogo} alt="Cam Logo" />
            </div>
          </RightContent>
        </section>
      </Container1>

    {/*What is Weightless?*/}
    <Container2>
        <section style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <LeftContent className="left-half">
            <TextContainer >
            <TitleContainer>
                <h1 className='sec2'>
                  <div>
                    WHAT IS WEIGHTLESS?
                  </div>
                </h1>
                <Underline />
            </TitleContainer>
            <TextContainer>
                Weightless is a Vietnamese brand that is the first to provide professional calisthenics training equipment, creating conditions for individuals to independently and flexibly train their bodies.<br/>
                <br/>
                Weightless believes that training is not just a task but a personal journey full of inspiration and discovery. Weightless wants you to become the master of your body, unrestricted by anything, free to exercise anytime, anywhere, and in the way you want.
            </TextContainer>
            </TextContainer>
          </LeftContent>
          <RightContent>
            <CaliLogo1 src={caliLogo} alt="Cali Logo" />
          </RightContent>
        </section>
      </Container2>

      {/*Why Weightless?*/}
      <Container3>
        <section style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <LeftContent>
            <div className="left-half">
              <FitnessLogo1 src={fitnessLogo} alt="Fitness Logo" />
            </div>
          </LeftContent>
          <RightContent>
            <div className='right-half'>
              <h1 className='sec3'>
                <div className='underline'>
                    WHY IS WEIGHTLESS?
                </div>
              </h1>
              <Underline1/>
              <TextContainer>
                <li><b><i>As light as air: </i></b>Calisthenics is a workout style that focuses on using body weight to train strength, flexibility, and balance. With the name Weightless, we believe that practicing calisthenics will bring a sense of lightness, freedom, and no limitation by gravity.</li><br/>
                <li><b><i>Independent flexibility: </i></b>The brand's goal is to create conditions for people to train their bodies independently and flexibly. By focusing on calisthenics, Weightless allows you to perform exercises without the need for complex workout equipment or going to the gym. Calisthenics training helps you develop muscle strength, body control, and improve flexibility.</li>
              </TextContainer>
            </div>
          </RightContent>
        </section>
      </Container3>

      {/*Mission - Vision - Core Values*/}
      <Container4>
        <section className='sec4'>
          Mission - Vision - Core Values
          <Underline2></Underline2>
        </section>
      </Container4>
      
      <ContentContainer>
        <ColumnContainer className="col-sm-4">
          <TextContainer2>
            <h2>Our Vision:</h2>
          </TextContainer2>
        </ColumnContainer>
        <ColumnContainer className="col-sm-4">
          <TextContainer2>
            <h2>Our Core Value:</h2>
          </TextContainer2>
        </ColumnContainer>
        <ColumnContainer className="col-sm-4">
          <TextContainer2>
            <h2>Our Mission:</h2>
          </TextContainer2>
        </ColumnContainer>
      </ContentContainer>

      <ContentContainer>
        <ColumnContainer className="col-sm-4 left-half">
          <div>
            <div>
              <p>The vision of Weightless is to become a reliable and reputable resource for the calisthenics community, offering customers high-quality products and services to help them develop strength, flexibility, and body balance.</p>
              <Vision1 src={vision} alt="Vision Logo" />
            </div>
          </div>
        </ColumnContainer>
        <ColumnContainer className="col-sm-4">
          <div>
            <div>
              <p className='middle-half1'>
                <li>Quality: Weightless is committed to providing high-quality calisthenics training equipment, carefully manufactured and selected to meet the needs and expectations of customers.</li>
                <li>Reputation: Weightless is committed to providing reliable products and services. Customers can trust the quality and effectiveness of the calisthenics training equipment they purchase from Weightless.</li>
                <li>Dedication: Weightless prioritizes customers and is committed to providing dedicated and professional support. The Weightless support team will accompany customers throughout the shopping and product usage process, ensuring the best experience.</li>
              </p>
              <Corevalue1 src={corevalue} alt="Core Value Logo" className= 'middle-half'/>
            </div>
          </div>
        </ColumnContainer>
        <ColumnContainer className="col-sm-4 right-half">
          <div>
            <div>
              <p>Weightless's mission is to provide professional calisthenics training equipment through an e-commerce platform, creating conditions for people to train their bodies independently and flexibly.</p>
              <Mission1 src={mission} alt="Mission Logo" />
            </div>
          </div>
        </ColumnContainer>
      </ContentContainer>

      <Container5>
        <div className='middle-half'>
          <Final>WEIGHTLESS</Final>
          <Final1>Lift your body, lift your spirit!</Final1>
          <Link to="https://www.facebook.com/profile.php?id=100091788379177">Contact</Link>
        </div>
      </Container5>
    
  </div>
  );
};


export default About_Us;