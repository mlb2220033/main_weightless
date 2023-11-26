import './App.css';

import Home from './pages/Home';
import 'antd/dist/reset.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Regi from './pages/Regi';
import Logi from './pages/Logi';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import {
  Navigate 
} from "react-router-dom"


import { useSelector } from "react-redux"
import CartItems from './pages/Newcart';
import PaymentPage from './pages/Payment';
import CheckoutSuccess from './components/CheckoutSuccess';

import BlogHome from 'pages/Blog/Blog';


function App() {
  const user =  useSelector((state) => state.user.currentUser);
  console.log('Navigating to Checkout Success');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/newcart" element={<CartItems />} />
        <Route path="/blogs" element={<BlogHome/>} />
        
        <Route path="/login" element={user ? <Navigate to="/" /> : <Logi />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Regi />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
