import './App.css';

import Home from './pages/Home';
import 'antd/dist/reset.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Regi from './pages/Regi';
import Logi from './pages/Logi';
import Cart from './pages/Cart';
import BlogHome from 'pages/Blog/Blog';
import Aboutus from './pages/Aboutus';

import TermsandPolicies from './pages/Tnp';
import CustomerServices from './pages/Cs';

import {
  BrowserRouter as Router,
  Routes ,Switch,
  Route,
  Navigate ,
} from "react-router-dom"
import Navbar from './components/Navbar'
import Announcement from './components/Announcement'



import { useSelector } from "react-redux"
import CartItems from './pages/Newcart';
import PaymentPage from './pages/Payment';
import CheckoutSuccess from './components/CheckoutSuccess';
import Register from 'pages/Register';
import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';




function App() {
  const user =  useSelector((state) => state.user.currentUser);
  console.log('Navigating to Checkout Success');
  // useEffect(()=>{
  //   fetchapi()
  // },[]
  // )
  const fetchapi= async()=>{
    const res=await axios.get(`http://localhost:3001/api/product/get-all`)
    // console.log(res)
    return res.data
  }
  const query = useQuery('todos', fetchapi)
  console.log('query',query)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/newcart" element={<CartItems />} />
        <Route path="/blogs" element={<BlogHome/>} />
        <Route path="/customer-service" element={<CustomerServices/>}></Route>
        <Route path="/terms-and-policies" element={<TermsandPolicies/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Logi />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/payment" element={<PaymentPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
