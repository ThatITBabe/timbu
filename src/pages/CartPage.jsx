import React from 'react'
import Cart from '../components/Cart';
import { Container } from 'react-bootstrap';

const CartPage = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
    return (
        <Container>
            <div>
                <Cart cartItems={cartItems}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart} />
            </div>
        </Container>
    )
}

export default CartPage
