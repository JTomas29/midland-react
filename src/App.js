import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ElClub from './pages/ElClub.jsx';
import './App.css';



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/el-club' element={<ElClub />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
