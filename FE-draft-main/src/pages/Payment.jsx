
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar2 from 'components/Navbar2';
import { Radio } from 'antd'; // Import Radio from Ant Design
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  WrapperInfo,
  WrapperLeft,
  WrapperRadio,
  WrapperRight,
  WrapperTotal,
} from './style'; // Assuming these are correctly defined in your style file
import { Label } from './style';
import { PayPalButton } from "react-paypal-button-v2";
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

import i_money from '../assets/images/icon_money.png'
import i_paypal from '../assets/images/icon_paypal.png'



const PaymentPage = () => {
  const navigate = useNavigate();
  

  const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    /* Assuming mobile is a media query function */
    ${({ mobile }) => mobile && `flex-direction: column;`}
  `;

  const handleChangeAddress = () => {
    // Assuming setIsOpenModalUpdateInfo is a state setter function
    // Make sure to define it using useState if not already defined
    setIsOpenModalUpdateInfo(true);
  };

  const handleDelivery = (e) => {
    setDelivery(e.target.value);
  };

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const handleAddOrder = () => {
    console.log('Selected payment method:', payment);
    // Redirect to CheckoutSuccess page
    navigate('/checkout-success');
  };
  
  const onSuccessCOD = (details, data) => {
    // You can put any additional logic for COD success here if needed
    console.log('COD payment successful:', details);

    // Call handleAddOrder when COD payment is successful
    handleAddOrder();
  };

  const onErrorCOD = (err) => {
    // Implement any error handling logic for COD payment here
    console.error('COD payment error:', err);
  };

  const onSuccessPaypal = (details, data) => {
    // Implement PayPal success logic here
    console.log('PayPal payment successful:', details);
  };

  const onErrorPaypal = (err) => {
    // Implement PayPal error logic here
    console.error('PayPal payment error:', err);
  };


  const [delivery, setDelivery] = useState('fast');
  const [payment, setPayment] = useState('paypal');
  const [isOpenModalUpdateInfo, setIsOpenModalUpdateInfo] = useState(false); // Assuming this state is used for modal visibility

  return (
    <>
    <Navbar2/>
    <div style={{ background: '#f5f5fa', width: '100%', height: '100vh' }}>
      <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
        <h3>Thanh toán</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WrapperLeft>
            <WrapperInfo>
              <div>
                <Label>Chọn phương thức giao hàng</Label>
                <WrapperRadio onChange={handleDelivery} value={delivery}>
                  <Radio value="slow">
                    <span style={{ color: '#ea8500', fontWeight: 'bold' }}>GHTK</span> Giao hàng tiết kiệm
                  </Radio>
                  <Radio value="fast">
                    <span style={{ color: '#ea8500', fontWeight: 'bold' }}>WEL_express</span> Giao hàng nhanh
                  </Radio>
                </WrapperRadio>
              </div>
            </WrapperInfo>
            <WrapperInfo>
              <div>
                <Label>Chọn phương thức thanh toán</Label>
                <WrapperRadio onChange={handlePayment} value={payment}>
                  <Radio value="COD"><img src={i_money} alt="COD Icon" style={{ marginRight: '8px', width: '24px', height: '24px' }} />
                    Thanh toán tiền mặt khi nhận hàng COD</Radio>
                  <Radio value="paypal"><img src={i_paypal} alt="Paypal Icon" style={{ marginRight: '8px', width: '24px', height: '24px' }} />
                    Thanh toán tiền bằng Paypal</Radio>
                </WrapperRadio>
              </div>
            </WrapperInfo>
          </WrapperLeft>
          <WrapperRight>
            <div style={{ width: '100%' }}>
              <WrapperInfo>
                <div>
                  <span>Địa chỉ: </span>
                  <span style={{ fontWeight: 'bold' }}> </span>
                  <span onClick={handleChangeAddress} style={{ color: '#9255FD', cursor: 'pointer' }}>
                    Thay đổi
                  </span>
                </div>
              </WrapperInfo>
              <WrapperInfo>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span>Tạm tính: </span>
                    <span style={{color: '#000', fontSize: '14px', fontWeight: 'bold'}}></span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span>Giảm giá: </span>
                    <span style={{color: '#000', fontSize: '14px', fontWeight: 'bold'}}></span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span>Phí giao hàng: </span>
                    <span style={{color: '#000', fontSize: '14px', fontWeight: 'bold'}}></span>
                  </div>
                </WrapperInfo>
              <WrapperTotal>
                <span>Tổng tiền: </span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'rgb(254, 56, 52)', fontSize: '24px', fontWeight: 'bold' }}></span>
                  <span style={{ color: '#000', fontSize: '11px' }}>(Đã bao gồm VAT 10%)</span>
                </span>
              </WrapperTotal>
              {payment === 'COD' ? (
                <ButtonComponent
                onClick={() => handleAddOrder()}
                size={40}
                styleButton={{
                  background: 'rgb(255, 57, 69)',
                  height: '48px',
                  width: '320px',
                  border: 'none',
                  borderRadius: '4px',
                }}
                onSuccess={onSuccessCOD}  
                onError={onErrorCOD}
                textbutton={'Đặt hàng và trả tiền mặt'}
                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
              ></ButtonComponent>
              
            
            ) : (
              <div style={{ width: '320px' }}>
                <PayPalButton
                  amount={0.01}
                  onSuccess={onSuccessPaypal}
                  onError={onErrorPaypal}
                />
            
              </div>
            )}
            </div>
          </WrapperRight>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentPage;


/*import React, { useState } from 'react';
import { Radio as AntdRadio } from 'antd';
import styled from 'styled-components'; // Assuming you are using styled-components

import {
  Lable,
  WrapperInfo,
  WrapperLeft,
  WrapperRadio,
  WrapperRight,
  WrapperTotal,
} from './style';
import "antd/dist/antd.css";

const PaymentPage = () => {
  const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
  `;

  const handleChangeAddress = () => {
    setIsOpenModalUpdateInfo(true);
  };

  const handleDilivery = (e) => {
    setDelivery(e.target.value);
  };

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const [delivery, setDelivery] = useState('fast');
  const [payment, setPayment] = useState('later_money');

  return (
    <div style={{ background: '#f5f5fa', width: '100%', height: '100vh' }}>
      <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
        <h3>Thanh toán</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WrapperLeft>
            <WrapperInfo>
              <div>
                <Lable>Chọn phương thức giao hàng</Lable>
                <WrapperRadio onChange={handleDilivery} value={delivery}>
                  <Radio value="fast">
                    <span style={{ color: '#ea8500', fontWeight: 'bold' }}>FAST</span> Giao hàng tiết kiệm
                  </Radio>
                  <Radio value="gojek">
                    <span style={{ color: '#ea8500', fontWeight: 'bold' }}>GO_JEK</span> Giao hàng tiết kiệm
                  </Radio>
                </WrapperRadio>
              </div>
            </WrapperInfo>
            <WrapperInfo>
              <div>
                <Lable>Chọn phương thức thanh toán</Lable>
                <WrapperRadio onChange={handlePayment} value={payment}>
                  <Radio value="later_money"> Thanh toán tiền mặt khi nhận hàng</Radio>
                  <Radio value="paypal"> Thanh toán tiền bằng paypal</Radio>
                </WrapperRadio>
              </div>
            </WrapperInfo>
          </WrapperLeft>
          <WrapperRight>
            <div style={{ width: '100%' }}>
              <WrapperInfo>
                <div>
                  <span>Địa chỉ: </span>
                  <span style={{ fontWeight: 'bold' }}> </span>
                  <span onClick={handleChangeAddress} style={{ color: '#9255FD', cursor: 'pointer' }}>
                    Thay đổi
                  </span>
                </div>
              </WrapperInfo>
              <WrapperInfo>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Tạm tính</span>
                  <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Giảm giá</span>
                  <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Phí giao hàng</span>
                  <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}></span>
                </div>
              </WrapperInfo>
              <WrapperTotal>
                <span>Tổng tiền</span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'rgb(254, 56, 52)', fontSize: '24px', fontWeight: 'bold' }}></span>
                  <span style={{ color: '#000', fontSize: '11px' }}>(Đã bao gồm VAT nếu có)</span>
                </span>
              </WrapperTotal>
              {payment === 'paypal' ? (
                <div style={{ width: '320px' }}>
                  <Bottom>Pay</Bottom>
                </div>
              ) : (
                <Bottom
                  onClick={() => handleAddOrder()}
                  size={40}
                  styleButton={{
                    background: 'rgb(255, 57, 69)',
                    height: '48px',
                    width: '320px',
                    border: 'none',
                    borderRadius: '4px',
                  }}
                  textbutton={'Đặt hàng'}
                  styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                />
              )}
            </div>
          </WrapperRight>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;*/
