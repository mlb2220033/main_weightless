import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminHomePage from './pages/AdminHomePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AdminHomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
