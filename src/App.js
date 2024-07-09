
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
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
// import Footer from './components/Footer';
import CheckOutPage from './pages/CheckOutPage';


const App = () => {
  const [products] = useState([

    // { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },

    {
      id: 1,
      image: prdt1,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,

    },
    {
      id: 2,
      image: prdt2,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 3,
      image: prdt3,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 4,
      image: prdt4,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 5,
      image: prdt5,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 6,
      image: prdt6,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 7,
      image: prdt7,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 8,
      image: prdt8,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 9,
      image: prdt9,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 10,
      image: prdt10,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 11,
      image: prdt11,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 12,
      image: prdt12,
      title: 'Blue Office  Chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    }
  ]);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // const addToCart = (product) => {
  //   const existingItem = cartItems.find(item => item.id === product.id);
  //   if (existingItem) {
  //     setCartItems(cartItems.map(item =>
  //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //     ));
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const increaseQuantity = (id) => {
    console.log(`Increasing quantity for product id: ${id}`);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    console.log(`Decreasing quantity for product id: ${id}`);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleCheckout = (customerInfo) => {
    console.log('Customer Info:', customerInfo);
    console.log('Cart Items:', cartItems);
    setCartItems([]);
    localStorage.removeItem('cartItems');
    alert('Order placed successfully!');
  };


  return (
    <Router>
      <div className="App">
        <Navbar2 cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<HomePage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={
            <CartPage
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          } />
          <Route path="/checkout" element={<CheckOutPage cartItems={cartItems} handleCheckout={handleCheckout} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
