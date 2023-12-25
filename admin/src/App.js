import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminHomePage from './pages/AdminHomePage';
import ProductList from './pages/AdminProductList';

import Product from './pages/AdminProduct';
import AdminCreate from './pages/AdminCreate';
import AdminUpdate from './pages/AdminUpdate';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AdminHomePage />}></Route>
        <Route path="/products/" element={<ProductList />} />
        <Route path="/create/" element={<AdminCreate></AdminCreate>} />
        <Route path="/update/:id" element={<AdminUpdate />} />
        <Route path="/product/:id" element={<Product></Product>} />
      </Routes>
    </Router>
  );
}

export default App;
