import React, { useState } from 'react';
import { ProductRows, CollectionProductBig } from '../../components';

function Collection() {
    const [ products, setCollectionProducts ] = useState([
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
		}
    ]);

    const [ bigproduct, setCollectionBigProduct ] = useState({
        id: 5,
        title: "Apple Watch Series 4",
        image: `${process.env.PUBLIC_URL}/images/products/nike.png`,
        price: "250",
    });

    return (
        <section className="collection-section page-wrap-grey">
            <div className="container">
                <div className="container-content">
                    <div class="section-title">
                        <div class="section-title-sup">Straight From Nike</div>
                        <h1 class="section-title-main">New Collection</h1>
                    </div>

                    <div className="collection-products">
                        <div className="collection-products-left">
                            {( products.map(item => (
                                <ProductRows product={ item }/>
                            )) )}
                        </div>

                        <div className="collection-products-right">
                            <CollectionProductBig product={ bigproduct }/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection
