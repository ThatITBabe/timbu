import React from 'react';
import './cart.css'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';


const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {

    const navigate = useNavigate();

    const handleClick3 = () => {
        navigate('/checkout');
    };

    const isCartEmpty = cartItems.length === 0;

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className='cart'>
            <div className='heading'>My Shopping Cart</div>

            {isCartEmpty ? (
                <div>Your Cart is Empty</div>
            ) : (
                <Table responsive>
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
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <div className='desff'>
                                        <div className="img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div>
                                            <div className="title">{item.title}</div>
                                            <div className="desc">{item.description}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Form.Control
                                        type="color"
                                        id="exampleColorInput"
                                        defaultValue="#563d7c"
                                        title="Choose your color"
                                    />
                                </td>
                                <td>
                                    <div className="quantity-selector">
                                        <button className="button1" onClick={() => increaseQuantity(item.id)}>+</button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button className="button2" onClick={() => decreaseQuantity(item.id)}>-</button>
                                    </div>
                                </td>
                                <td>$ {item.price * item.quantity}</td>
                                <td onClick={() => removeFromCart(item)}>
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.2" y="1.1375" width="39.6" height="39.6" rx="4.8" stroke="#333333" strokeWidth="0.4" />
                                        <path d="M16.0685 24.8699L20.0007 20.9376L23.933 24.8699M23.933 17.0054L20 20.9376L16.0685 17.0054" stroke="#333333" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            {!isCartEmpty && (
                <div className='w-75 my-3 d-flex justify-content-between align-items-center gap-5'>
                    <InputGroup className='inputG'>
                        <InputGroup.Text className="input-text" id="basic-addon1">Items</InputGroup.Text>
                        <Form.Control className='input'
                            placeholder={cartItems.length}
                            aria-label={cartItems.length}
                            aria-describedby="basic-addon1"
                            readOnly
                        />
                    </InputGroup>
                    <InputGroup className='inputG'>
                        <InputGroup.Text className="input-text" id="basic-addon1">Discount</InputGroup.Text>
                        <Form.Control
                            placeholder="$0.00"
                            aria-label="$0.00"
                            aria-describedby="basic-addon1"
                            readOnly
                        />
                    </InputGroup>
                    <InputGroup className='inputG'>
                        <InputGroup.Text className="input-text" id="basic-addon1">Subtotal</InputGroup.Text>
                        <Form.Control
                            placeholder={`$${calculateSubtotal()}`}
                            aria-label={`$${calculateSubtotal()}`}
                            aria-describedby="basic-addon1"
                            readOnly
                        />
                    </InputGroup>
                    <InputGroup className='inputG'>
                        <InputGroup.Text className="input-text" id="basic-addon1">Total</InputGroup.Text>
                        <Form.Control
                            placeholder={`$${calculateSubtotal()}`}
                            aria-label={`$${calculateSubtotal()}`}
                            aria-describedby="basic-addon1"
                            readOnly
                        />
                    </InputGroup>
                </div>
            )}

            {!isCartEmpty && (
                <div className='promotion mt-5 w-75'>
                    <div className='pb-3'>If you have a promotion code, please enter it here</div>
                    <div className='gap-5 jjjj'>
                        <InputGroup className="mb-3 w-75 immmm">
                            <Form.Control
                                placeholder="Please enter promo code"
                                aria-label="Please enter promo code"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text className='discountBtn' id="basic-addon2">Apply Discount</InputGroup.Text>
                        </InputGroup>
                        <div className='w-25 d-flex align-items-center justify-content-space-between gap-1 btnzz'>
                            <div className="checkout" onClick={handleClick3}>
                                Checkout
                            </div>
                            <div className='checkout' onClick={() => navigate('/cart')}>
                                cart
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
