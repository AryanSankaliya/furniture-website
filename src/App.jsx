import React from 'react';
import { BrowserRouter, Routes, Route, Router, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import ProductDescription from './pages/ProductDescription/ProductDescription';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDescription />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </>

  );
}

export default App;
