import React from 'react'

function CollectionProductBig({ product }) {
    return (
        <div className="collection-product-big">
            <span className="collection-product-big-price">{ product.price }$</span>
            <img src={ product.image } alt="" className="collection-product-big-img" />
            <h1 className="collection-product-big-title">{ product.title }</h1>
        </div>
    )
}

export default CollectionProductBig
