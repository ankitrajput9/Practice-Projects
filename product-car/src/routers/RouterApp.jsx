import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

const RouterApp = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='*' element={<NotFound/>} />

    </Routes>
  );
}

export default RouterApp;
