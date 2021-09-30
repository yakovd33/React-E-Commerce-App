import React from 'react';
import { Link } from 'react-router-dom';

function ProductRows({ product }) {
    return (
        <Link to={ `/product/${ product.id }` } className="product-link">
            <div className="product-card">
                <img src={ product.image } alt="" className="product-img" />

                <div className="product-dets">
                    <div className="product-title">{ product.title }</div>
                    <span className="product-price">{ product.price }$</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductRows
