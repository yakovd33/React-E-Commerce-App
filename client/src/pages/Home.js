import React, { useState } from 'react';
import { Slider, Recommended, Banner, Collection, TopProducts } from '../components';

function Home() {
    return (
        <div>
            <Slider/>
            <Recommended/>
            <Banner image={ `${process.env.PUBLIC_URL}/images/banners/sneaker-banner.png` } text="Sneakers Never Run Out Of Style Get 50% Off Sitewide" linkText="Start Shopping" link=""/>
            <Collection title="NEW COLLECTION" subtitle="Straight From Nike"/>
            <Banner image={ `${process.env.PUBLIC_URL}/images/banners/sneaker-banner.png` } text="Sneakers Never Run Out Of Style Get 50% Off Sitewide" linkText="Start Shopping" link=""/>
			<TopProducts/>
            <Banner image={ `${process.env.PUBLIC_URL}/images/banners/sneaker-banner.png` } text="Sneakers Never Run Out Of Style Get 50% Off Sitewide" linkText="Start Shopping" link=""/>
		</div>
    )
}

export default Home
