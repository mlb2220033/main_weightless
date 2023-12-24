import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { decreaseAmount, increaseAmount, removeAllOrderProduct, removeOrderProduct, selectedOrder } from '../redux/slides/orderSlice';
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  // const order = useSelector((state) => state.order)
  const dispatch = useDispatch()
useEffect(()=>{
  dispatch(removeAllOrderProduct())
})

  const handleFinish=()=>{
    
    navigate('/')
  }
    
    



  return (
    <Container>
      <h2>Checkout Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>Check your order status at your profile after about 10mins.</p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>support@onlineshop.com</strong>
      </p>
      <Button onClick={handleFinish}>Finish and Return Homepage</Button>
    </Container>
  );
};

export default CheckoutSuccess;

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;
