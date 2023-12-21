import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Regi from './pages/Regi';
import Logi from './pages/Logi';
import Cart from './pages/Cart';
import BlogHome from './pages/Blog/Blog'; // Adjusted import path
import Aboutus from './pages/Aboutus';
import TermsandPolicies from './pages/Tnp';
import CustomerServices from './pages/Cs';
import CartItems from './pages/Newcart';
import PaymentPage from './pages/Payment';
import CheckoutSuccess from './components/CheckoutSuccess';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';

import { QueryClientProvider as ReactQueryClientProvider } from 'react-query';

function App() {
  // useEffect(() => {
  //   fetchApi();
  // }, []);

  const user = useSelector((state) => state.user.currentUser);
  console.log('Navigating to Checkout Success');

  // const fetchApi = async () => {
  //   const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/getAll`);
  //   return res.data;
  // };

  const query = new QueryClient();

  console.log('query', query);

  return (
    <ReactQueryClientProvider client={query}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/newcart" element={<CartItems />} />
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/customer-service" element={<CustomerServices />} />
          <Route path="/terms-and-policies" element={<TermsandPolicies />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Logi />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </ReactQueryClientProvider>
  );
}

export default App;
