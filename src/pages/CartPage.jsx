import React from 'react'
import Cart from '../components/Cart';
import { Container } from 'react-bootstrap';

const CartPage = ({ cartItems, removeFromCart }) => {
    return (
        <Container>
        <div>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
        </Container>
    )
}

export default CartPage
