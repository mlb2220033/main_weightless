import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Logi from './pages/Logi';
import Cart from './pages/Cart';
import BlogHome from './pages/Blog/Blog';
import Aboutus from './pages/Aboutus';
import TermsandPolicies from './pages/Tnp';
import CustomerServices from './pages/Cs';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import CartItems from './pages/Newcart';
import PaymentPage from './pages/Payment';
import CheckoutSuccess from './components/CheckoutSuccess';
import Register from 'pages/Register';

const queryClient = new QueryClient();

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log('Navigating to Checkout Success');

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;




                