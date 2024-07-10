import React from 'react'
import { Container } from 'react-bootstrap';
import Checkout from '../components/Checkout';

const CheckOutPage = ({ cartItems, handleCheckout }) => {
  return (
    <Container>
      <Checkout cartItems={cartItems} handleCheckout={handleCheckout} />
    </Container>
  )
}

export default CheckOutPage
