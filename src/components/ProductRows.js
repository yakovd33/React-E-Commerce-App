import React from 'react'

function ProductRows({ product }) {
    return (
        <div className="product-card">
            <img src={ product.image } alt="" className="product-img" />
            <div className="product-title">{ product.title }</div>
            <span className="product-price">{ product.price }$</span>
        </div>
    )
}

export default ProductRows
