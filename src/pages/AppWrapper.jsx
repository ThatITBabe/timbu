import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar2 from './../components/Navbar2';
import Footer from './../components/Footer';
import Successful from './Successful';
import CheckOutPage from './CheckOutPage';
import CartPage from './CartPage';
import HomePage from './HomePage';


const AppWrapper = ({
    cartItems,
    products,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    handleCheckout,
    openImage
}) => {
    const location = useLocation();
    const hideNavbarAndFooter = location.pathname === '/payment';

    return (
        <div className="App">
            {!hideNavbarAndFooter && <Navbar2 cartItems={cartItems} />}
            <Routes>
                <Route path="/" element={<HomePage products={products} addToCart={addToCart} openImage={openImage} />} />
                <Route path="/cart" element={
                    <CartPage
                        cartItems={cartItems}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        removeFromCart={removeFromCart}
                        openImage={openImage}
                    />
                } />
                <Route path="/checkout" element={<CheckOutPage cartItems={cartItems} handleCheckout={handleCheckout} />} />
                <Route path='/payment' element={<Successful />} />
            </Routes>
            {!hideNavbarAndFooter && <Footer />}
        </div>
    );
};

export default AppWrapper
