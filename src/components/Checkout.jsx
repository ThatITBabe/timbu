import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import React, { useState } from 'react';

const Checkout = ({ cartItems, handleCheckout }) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const customerInfo = { name, address };
        handleCheckout(customerInfo);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    return (
        <div className="check-out">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <div className="title">Order Summary</div>
                            {cartItems.map(item => (
                                <div className="itemx" key={item.id}>
                                    <div className="namesss">
                                        <div className="img">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="ttt">
                                            <div className="tit">{item.title}</div>
                                            <div className="qty">Qty: {item.quantity}</div>
                                        </div>
                                    </div>
                                    <div className="prive">${item.price * item.quantity}</div>
                                </div>
                            ))}
                            <div className="total">Total: ${calculateTotal()}</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="title">Customer Information</div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3">
                                Place Order
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>



            {/* <h2>Checkout</h2>
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
            </form> */}
        </div>
    )
}

export default Checkout
