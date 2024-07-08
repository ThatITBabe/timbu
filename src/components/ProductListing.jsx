import React from 'react'
import ProductCard from './ProductCard';
import { Container } from 'react-bootstrap';

const ProductListing = ({ products, addToCart }) => {
  return (
    <Container>

    <div className="product-listing">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
    
    </Container>
  )
}

export default ProductListing
