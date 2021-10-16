import React, { useState, useEffect } from 'react';
import { CategoryItem } from '../components';
import ApiHelper, { apiCallGet } from '../helpers/ApiHelper';

function Categories() {
    const [ categories, setCategories ] = useState([{
        id: 1,
        title: 'Smartphones',
        image: 'images/products/watch1.png',
        num_products: 36
    }, {
        id: 2,
        title: 'Shoes',
        image: 'images/products/watch1.png',
        num_products: 61
    }, {
        id: 3,
        title: 'Shirts',
        image: 'images/products/watch1.png',
        num_products: 96
    }, {
        id: 4,
        title: 'Toys',
        image: 'images/products/watch1.png',
        num_products: 44
    }]);

    useEffect(() => {
        ApiHelper.get('categories/get_all', (res) => {
            setCategories(res)
        })
    }, []);

    return (
        <div id="categories-page-wrap" className="page-wrap-grey">
            <div className="container">
                <div id="categories-wrap">
                    { categories.map(item => (
                        <CategoryItem cat={ item }/>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Categories
