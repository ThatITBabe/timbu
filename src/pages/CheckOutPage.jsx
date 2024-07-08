import React from 'react'
import Checkout from '../components/Checkout';

const CheckOutPage = ({ cartItems, handleCheckout }) => {
  return (
    <div>
      <Checkout cartItems={cartItems} handleCheckout={handleCheckout} />
    </div>
  )
}

export default CheckOutPage
