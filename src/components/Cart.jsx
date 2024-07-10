import React from 'react';
import './cart.css'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


const Cart = ({ cartItems = [], increaseQuantity, decreaseQuantity, removeFromCart }) => {

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
                            <InputGroup.Text className='discountBtnt' id="basic-addon2">Apply Discount</InputGroup.Text>
                        </InputGroup>
                        <div className='w-25 d-flex align-items-center justify-content-space-between gap-1 btnzz'>
                            <div className="checkout" onClick={handleClick3}>
                                Checkout
                            </div>
                            <div className='checkout' onClick={() => navigate('/cart')}>
                                <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.6973 3.14629C2.6973 3.02694 2.74471 2.91248 2.8291 2.82809C2.91349 2.7437 3.02795 2.69629 3.1473 2.69629H3.5415C4.1958 2.69629 4.572 3.12199 4.7898 3.54679C4.9383 3.83749 5.0454 4.19209 5.1345 4.49989H14.4C14.5391 4.49993 14.6762 4.5322 14.8007 4.59416C14.9252 4.65612 15.0337 4.74609 15.1176 4.857C15.2014 4.96792 15.2585 5.09677 15.2842 5.23343C15.3099 5.3701 15.3036 5.51087 15.2658 5.64469L13.9194 10.3922C13.8123 10.7688 13.5853 11.1003 13.2728 11.3363C12.9603 11.5723 12.5794 11.6999 12.1878 11.6999H7.6167C7.22184 11.7 6.8379 11.5703 6.52402 11.3308C6.21014 11.0912 5.98374 10.7551 5.8797 10.3742L5.3019 8.25469L5.2929 8.22589L4.3659 5.07769L4.2759 4.77439C4.1859 4.46299 4.1067 4.18759 3.9879 3.95629C3.8448 3.67729 3.7134 3.59629 3.5415 3.59629H3.1473C3.02795 3.59629 2.91349 3.54888 2.8291 3.46449C2.74471 3.3801 2.6973 3.26564 2.6973 3.14629ZM7.65 15.2999C8.00804 15.2999 8.35142 15.1577 8.60459 14.9045C8.85776 14.6513 9 14.3079 9 13.9499C9 13.5918 8.85776 13.2485 8.60459 12.9953C8.35142 12.7421 8.00804 12.5999 7.65 12.5999C7.29195 12.5999 6.94858 12.7421 6.6954 12.9953C6.44223 13.2485 6.3 13.5918 6.3 13.9499C6.3 14.3079 6.44223 14.6513 6.6954 14.9045C6.94858 15.1577 7.29195 15.2999 7.65 15.2999ZM12.15 15.2999C12.508 15.2999 12.8514 15.1577 13.1046 14.9045C13.3578 14.6513 13.5 14.3079 13.5 13.9499C13.5 13.5918 13.3578 13.2485 13.1046 12.9953C12.8514 12.7421 12.508 12.5999 12.15 12.5999C11.792 12.5999 11.4486 12.7421 11.1954 12.9953C10.9422 13.2485 10.8 13.5918 10.8 13.9499C10.8 14.3079 10.9422 14.6513 11.1954 14.9045C11.4486 15.1577 11.792 15.2999 12.15 15.2999Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart

Cart.propTypes = {
    cartItems: PropTypes.array,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
};
