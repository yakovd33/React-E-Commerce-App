import React, { useState } from "react";
import { ProductRows } from "../../components";

function Recommended() {
	const [products, setProducts] = useState([
		{
			id: 1,
			title: "Apple Watch Series 7",
			image: "images/products/watch1.png",
			price: "550",
		}, {
			id: 2,
			title: "Apple Watch Series 6",
			image: "images/products/watch2.png",
			price: "450",
		}, {
			id: 3,
			title: "Apple Watch Series 5",
			image: "images/products/watch1.png",
			price: "350",
		}, {
			id: 4,
			title: "Apple Watch Series 4",
			image: "images/products/watch2.png",
			price: "250",
		}
	]);

	return (
		<section id="recommended-section">
			<div className="container">
                <div className="container-content">
                    <div className="section-title">
                        <div className="section-title-sup">
                            Explore Awesome Products
                        </div>
                        <h1 className="section-title-main">Recommended For You</h1>
                    </div>

                    <div id="recommended-products-wrap">
                        {( products.map(item => (
                            <ProductRows product={ item }/>
                        )) )}
                    </div>

                    <a href="#" className="show-more-btn">
                        Explore Other Products
                    </a>
                </div>
			</div>
		</section>
	);
}

export default Recommended;
