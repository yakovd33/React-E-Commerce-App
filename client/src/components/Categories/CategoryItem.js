import React from 'react';
import { Router, Link } from 'react-router-dom';

function CategoryItem({ cat }) {
    return (
        <Link to={ `/category/${cat.cat_id}` } className="category-card">
            <img src={ `${process.env.PUBLIC_URL}/images/products/watch1.png` } alt="" className="cat-item-img" />

            <span className="category-card-num-products">{ cat.num_products } Products</span>
            <h2 className="category-card-title">{ cat.title }</h2>
        </Link>
    )
}

export default CategoryItem
