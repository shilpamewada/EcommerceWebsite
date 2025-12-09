import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Products from './Component/Products';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import AboutUs from './Component/AboutUs';
// import Table from './Component/Table';
import Help from './Component/Help';
import Cart from './Component/Cart';
import Payment from './Component/Payment';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert ("Added To Cart Successfully")
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <BrowserRouter>
        <div className="sticky-top"> {/* Add a div with class "sticky-top" */}
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} />} />
          <Route path='/Home' element={<Home addToCart={addToCart} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products addToCart={addToCart} />} />
          <Route path='/aboutus' element={<AboutUs addToCart={addToCart} />} />
          <Route path='/cartt' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          {/* <Route path='/tables' element={<Table />} /> */}
          <Route path='/Help' element={<Help />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
