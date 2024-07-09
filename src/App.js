
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckOutPage';
import Navbar2 from './components/Navbar2';
import prdt1 from './images/prdt1.png';
import prdt2 from './images/prdt2.png';
import prdt3 from './images/prdt3.png';
import prdt4 from './images/prdt4.png';
import prdt5 from './images/prdt5.png';
import prdt6 from './images/prdt6.png';
import prdt7 from './images/prdt7.png';
import prdt8 from './images/prdt8.png';
import prdt9 from './images/prdt9.png';
import prdt10 from './images/prdt10.png';
import prdt11 from './images/prdt11.png';
import prdt12 from './images/prdt12.png';
import Footer from './components/Footer';


const App = () => {
  const [products] = useState([

 // { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },

    {
      id: 1,
      image: prdt1,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 2,
      image: prdt2,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 3,
      image: prdt3,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 4,
      image: prdt4,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 5,
      image: prdt5,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 6,
      image: prdt6,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 7,
      image: prdt7,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {id: 8,
      image: prdt8,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 9,
      image: prdt9,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 10,
      image: prdt10,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 11,
      image: prdt11,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    },
    {
      id: 12,
      image: prdt12,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable '
    }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const handleCheckout = (customerInfo) => {
    console.log('Customer Info:', customerInfo);
    console.log('Cart Items:', cartItems);
    setCartItems([]);
    alert('Order placed successfully!');
  };

  return (
    <Router>
      <div className="App">
        <Navbar2 />
        <Routes>
          <Route path="/" element={<HomePage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} handleCheckout={handleCheckout} />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
};

export default App;
