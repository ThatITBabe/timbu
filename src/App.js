
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Route, Routes, useLocation } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';
// import Navbar2 from './components/Navbar2';
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
// import CheckOutPage from './pages/CheckOutPage';
// import Successful from './pages/Successful';
import AppWrapper from './pages/AppWrapper';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {

  const [products] = useState([
    {
      id: 1,
      image: prdt1,
      title: 'Office  Chair',
      description: 'Classy and comfortable',
      price: 80,
      qty: 1,

    },
    {
      id: 2,
      image: prdt2,
      title: 'Office desk and chair set',
      description: 'Futuristic',
      price: 250,
      qty: 1,
    },
    {
      id: 3,
      image: prdt3,
      title: 'Office  chair',
      description: 'Classy and comfortable ',
      price: 90,
      qty: 1,
    },
    {
      id: 4,
      image: prdt4,
      title: 'Leather office chair',
      description: 'Classy and comfortable',
      price: 80,
      qty: 1,
    },
    {
      id: 5,
      image: prdt5,
      title: 'Office Chair',
      description: 'Modern and Unique',
      price: 90,
      qty: 1,
    },
    {
      id: 6,
      image: prdt6,
      title: 'Coffee table and chairs',
      description: 'Classy and comfortable',
      price: 120,
      qty: 1,
    },
    {
      id: 7,
      image: prdt7,
      title: 'Blue office  chair',
      description: 'Classy and comfortable ',
      price: 80,
      qty: 1,
    },
    {
      id: 8,
      image: prdt8,
      title: 'Desk and chairs set',
      description: 'Unique and modern',
      price: 120,
      qty: 1,
    },
    {
      id: 9,
      image: prdt9,
      title: 'Desk chairs set',
      description: 'Futuristic vibes ',
      price: 240,
      qty: 1,
    },
    {
      id: 10,
      image: prdt10,
      title: 'Office non swivel chair',
      description: 'Easy to move around',
      price: 100,
      qty: 1,
    },
    {
      id: 11,
      image: prdt11,
      title: 'Cube cusion set',
      description: 'Modern and comfy',
      price: 140,
      qty: 1,
    },
    {
      id: 12,
      image: prdt12,
      title: 'Office couch set',
      description: 'Classy and comfortable ',
      price: 200,
      qty: 1,
    }
  ]);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setNotification('Item is already in cart, you can increase the quantity.');
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      setNotification('Item added to cart.');
    }
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // const addToCart = (product) => {
  //   const existingProduct = cartItems.find((item) => item.id === product.id);

  //   if (existingProduct) {
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //     setNotification('Item is already in cart, you can increase the quantity.');
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //     setNotification('');
  //   }

  //   // Clear the notification after a few seconds
  //   setTimeout(() => {
  //     setNotification('');
  //   }, 2000);
  // };

  const openImage = (product) => {
    window.open(product.image, '_blank');
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
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
    console.log('Cart length after checkout:', cartItems.length);
  };


  return (
    <Router>
      <AppWrapper
        cartItems={cartItems}
        products={products}
        addToCart={addToCart}
        openImage={openImage}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />
    </Router>
  );
};

export default App;
