import React from 'react'
import PaymentS from '../components/PaymentS'
import Container from 'react-bootstrap/Container';


const Successful = () => {
    return (

        <Container className='d-flex justify-content-center align-items-center py-5' style={{ height: '100vh' }}>
            <PaymentS />
        </Container>

    )
}

export default Successful
