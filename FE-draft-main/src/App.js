import './App.css';

import Home from './pages/Home';
import 'antd/dist/reset.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Regi from './pages/Regi';
import Logi from './pages/Logi';
import Cart from './pages/Cart';
import BlogHome from 'pages/Blog/Blog';
import About_Us from 'pages/Aboutus';
import Introduction from 'pages/Introduction';
import CustomerServices from 'pages/CustomerServices';
import TermsandPolicies from 'pages/TermsandPolicies';

import {
  BrowserRouter as Router,
  Routes ,
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




function App() {
  const user =  useSelector((state) => state.user.currentUser);
  console.log('Navigating to Checkout Success');
  
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
        <Route path="/introduction" element={<Introduction/>}>
        <Route path="customer-service" element={<CustomerServices/>}/>
        <Route path="terms-and-policies" element={<TermsandPolicies/>}/>
        <Route path="aboutus" element={<About_Us/>}/>
      </Route>
        
        <Route path="/login" element={user ? <Navigate to="/" /> : <Logi />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/payment" element={<PaymentPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
