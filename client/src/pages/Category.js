import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductRows } from '../components';
import ApiHelper from '../helpers/ApiHelper';

function Category() {
    const { id } = useParams();

    const [ products, setTopProductsList ] = useState([]);
	const [ category, setCategory ] = useState(null);

	useEffect(() => {
		ApiHelper.get('categories/' + id, (res) => {
			setCategory(res);
		});

		ApiHelper.get('categories/cat_products/' + id, (res) => {
			setTopProductsList(res);
		});
	}, []);

    return (
        <section className="category-products-section page-wrap-grey">
            <div className="container">
                <div className="container-content">
                    <div className="section-title">
                        <div className="section-title-sup">PRODUCT CATEGORY</div>
                        <h1 className="section-title-main">{ category && category.title }</h1>
                    </div>

                    <div className="category-products">
                        {( products.map(item => (
                            <ProductRows product={ item }/>
                        )) )}
                    </div>

                    { !products.length && <h4>There are no items to show in this category.</h4> }
                </div>
            </div>
        </section>
    )
}

export default Category
