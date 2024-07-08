import React from 'react'
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))
            )}
            <Link to="/checkout"><button>Proceed to Checkout</button></Link>
        </div>
    )
}

export default Cart
