import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import AppWrapper from './pages/AppWrapper';
import reportWebVitals from './reportWebVitals';

const cartItems = [];
const products = [];
const addToCart = () => { };
const increaseQuantity = () => { };
const decreaseQuantity = () => { };
const removeFromCart = () => { };
const handleCheckout = () => { };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppWrapper
      cartItems={cartItems}
      products={products}
      addToCart={addToCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      removeFromCart={removeFromCart}
      handleCheckout={handleCheckout}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
