import React from 'react'
import ProductListing from '../components/ProductListing';

const HomePage = ({ products, addToCart }) => {
    return (
        <div>
            <div>
                <ProductListing products={products} addToCart={addToCart} />
            </div>
        </div>
    )
}

export default HomePage
