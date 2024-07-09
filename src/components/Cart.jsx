import React from 'react'
import './cart.css'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className='cart'>
            <div className='heading'>My Shopping Cart</div>

            {cartItems.length === 0 ? (
                <div>Your Cart is Empty</div>
            ) : (
                cartItems.map(item => (
                    <Table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Color</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                ))
            )}

            <div className='w-75 my-3 d-flex justify-content-between align-items-center gap-5'>
                <InputGroup className='inputG'>
                    <InputGroup.Text className="input-text" id="basic-addon1">Items</InputGroup.Text>
                    <Form.Control className='input'
                        placeholder="1"
                        aria-label="1"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className='inputG'>
                    <InputGroup.Text className="input-text" id="basic-addon1">Discount</InputGroup.Text>
                    <Form.Control
                        placeholder="$0.00"
                        aria-label="$0.00"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className='inputG'>
                    <InputGroup.Text className="input-text" id="basic-addon1">Subtotal</InputGroup.Text>
                    <Form.Control
                        placeholder="$318"
                        aria-label="$318"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className='inputG'>
                    <InputGroup.Text className="input-text" id="basic-addon1">Total</InputGroup.Text>
                    <Form.Control
                        placeholder="$318"
                        aria-label="$318"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <div className='promotion mt-5 w-75'>
                <div className='pb-3'>If you have a promotion code, please enter it here</div>
                <div className='d-flex align-items-center gap-5'>
                    <InputGroup className="mb-3 w-50">
                        <Form.Control
                            placeholder="Please enter promo code"
                            aria-label="Please enter promo code"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text className='discountBtn' id="basic-addon2">Apply Discount</InputGroup.Text>
                    </InputGroup>
                    <div className='w-25 d-flex align-items-center justify-content-space-between gap-1'>
                        <div className="checkout">
                            Checkout
                        </div>
                        <div className='checkout'>
                            cart
                        </div>
                    </div>
                </div>
            </div>

        </div>

        // colSpan={2}
        // <div className="cart">
        //     <h2>Your Cart</h2>
        //     {cartItems.length === 0 ? (
        //         <p>Your cart is empty</p>
        //     ) : (
        //         cartItems.map(item => (
        //             <div key={item.id} className="cart-item">
        //                 <h3>{item.name}</h3>
        //                 <p>${item.price}</p>
        //                 <button onClick={() => removeFromCart(item)}>Remove</button>
        //             </div>
        //         ))
        //     )}
        //     <Link to="/checkout"><button>Proceed to Checkout</button></Link>
        // </div>
    )
}

export default Cart
