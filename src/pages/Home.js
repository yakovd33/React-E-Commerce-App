import React, { useState } from 'react';
import { Slider, Recommended, Banner, Collection } from '../components';

function Home() {
    const [ collectionProducts, setCollectionProducts ] = useState([
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

    const [ collectionBigProduct, setCollectionBigProduct ] = useState({
        id: 5,
        title: "Apple Watch Series 4",
        image: "images/products/watch2.png",
        price: "250",
    });

    return (
        <div>
            <Slider/>
            <Recommended/>
            <Banner image="images/banners/sneaker-banner.png" text="Sneakers Never Run Out Of Style Get 50% Off Sitewide" linkText="Start Shopping" link=""/>
            <Collection title="NEW COLLECTION" subtitle="Straight From Nike" bigproduct={ collectionBigProduct } products={ collectionProducts }/>
        </div>
    )
}

export default Home
