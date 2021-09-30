import React from 'react';
import { Router, Link } from 'react-router-dom';

function CategoryItem({ cat }) {
    return (
        <Link to={ `/category/${cat.id}` } className="category-card">
            <img src={ `${process.env.PUBLIC_URL}/${cat.image}` } alt="" className="cat-item-img" />

            <span className="category-card-num-products">{ cat.num_products } Products</span>
            <h2 className="category-card-title">{ cat.title }</h2>
        </Link>
    )
}

export default CategoryItem
