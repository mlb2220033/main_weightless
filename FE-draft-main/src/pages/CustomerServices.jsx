import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from "react-router";
import styled from 'styled-components';
import Menubar from 'components/Menubar';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black; /* Added background color */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50%;
`;

const Question = ({ question, answer }) => {
  return (
    <div className="question">
      <h4>{question}</h4>
      <p>{answer}</p>
    </div>
  );
};

const CustomerServices = () => {
  return (

    
      <div className="customer-services" style={{marginBottom: '80px'}} >
        
        <h1 style={{textAlign: 'center'}}>Customer Services</h1>
        <div style={{marginLeft: '30%', marginRight: '30%',textAlign:'justify'}}>
        <p>
          We are committed to providing our customers with the best possible support. We offer a variety of support channels, including phone, email, and live chat. Our team of experienced customer service representatives is available to help you with any questions or concerns you may have.
        </p>
        <h3>Contact Us</h3>
        <ul>
          <li>Phone: 0915694779</li>
          <li>Email: weightless@gmail.com</li>
          <li><a href="#">Chat with us now</a></li>
        </ul>
        <h3>FAQ</h3>
        <div className="faq">
          <Question question="What are your business hours?" answer="Our business hours are Monday-Friday, 9:00 AM to 5:00 PM PST." />
          <Question question="How can I return a product?" answer="To return a product, please contact us within 14 days of purchase. You will need to provide us with your order number and the reason for your return." />
          <Question question="How can I track my order?" answer="To track your order, please visit our website and enter your order number." />
          <Question question="How can I cancel my order?" 
          answer="You can cancel your order by contacting customer service." />


<Question question="Can I contact customer service in Vietnamese?" 
          answer="Yes, we provide customer service in Vietnamese. You can choose the language when contacting customer service." />

<Question question="How can I contact customer service via live chat?" 
          answer="You can chat directly with customer service on the company's website." />

<Question question="How can I contact customer service through social media?" 
          answer="You can contact customer service through Facebook, Twitter, or Instagram. You can find contact information for customer service on the company's website." />

<Question question="What can I contact customer service to resolve?" 
          answer="You can contact customer service to resolve any issues related to your product, service, or account." />

<Question question="What can I contact customer service to ask?" 
          answer="You can contact customer service to ask any questions related to our product, service, or company." />

<Question question="What can I contact customer service to receive feedback on?" 
          answer="You can contact customer service to receive feedback on our product, service, or company." />

<Question question="What can I contact customer service to request?" 
          answer="You can contact customer service to request anything related to your product, service, or account." />


        </div>
        </div>
      </div>
      
    
  );
};





export default CustomerServices;
