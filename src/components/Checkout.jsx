import React, { useState } from 'react';

const Checkout = ({ cartItems, handleCheckout }) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCheckout({ name, address });
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    )
}

export default Checkout
