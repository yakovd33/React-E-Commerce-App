import React, { useState } from 'react';
import { ProductRows } from '../../components';

function TopProducts() {
    const [ products, setTopProductsList ] = useState([
		{
			id: 1,
			title: "Apple Watch Series 7",
			image: `${process.env.PUBLIC_URL}/images/products/watch1.png`,
			price: "550",
		}, {
			id: 2,
			title: "Apple Watch Series 6",
			image: `${process.env.PUBLIC_URL}/images/products/watch2.png`,
			price: "450",
		}, {
			id: 3,
			title: "Apple Watch Series 5",
			image: `${process.env.PUBLIC_URL}/images/products/watch1.png`,
			price: "350",
		}, {
			id: 4,
			title: "Apple Watch Series 4",
			image: `${process.env.PUBLIC_URL}/images/products/watch2.png`,
			price: "250",
		}, {
			id: 5,
			title: "Apple Watch Series 7",
			image: `${process.env.PUBLIC_URL}/images/products/watch1.png`,
			price: "550",
		}, {
			id: 6,
			title: "Apple Watch Series 6",
			image: `${process.env.PUBLIC_URL}/images/products/watch2.png`,
			price: "450",
		}, {
			id: 7,
			title: "Apple Watch Series 5",
			image: `${process.env.PUBLIC_URL}/images/products/watch1.png`,
			price: "350",
		}, {
			id: 8,
			title: "Apple Watch Series 4",
			image: `${process.env.PUBLIC_URL}/images/products/watch2.png`,
			price: "250",
		}
	]);

    return (
        <section className="top-products-section page-wrap-grey">
            <div className="container">
                <div className="container-content">
                    <div class="section-title">
                        <div class="section-title-sup">TOP PRODUCTS</div>
                        <h1 class="section-title-main">Trending This Week</h1>
                    </div>

                    <div className="top-products-products">
                        {( products.map(item => (
                            <ProductRows product={ item }/>
                        )) )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopProducts
