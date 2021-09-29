import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { addToCart } from '../../helpers/CartHelper';

function Slider() {
    const [ cart, setCart ] = useContext(CartContext);

    const [ slides, setSlides ] = useState([
        {
            id: 1,
            image: 'images/slides/1.png',
            title: 'GET THE NEW IPHONE 13 PRO',
            desc: 'A transformative triple‑camera system that adds tons of capability without complexity',
            price: 100
        }, {
            id: 2,
            image: 'images/slides/2.jpeg',
            title: 'GET THE NEW APPLE WATCH 7 SERIES',
            desc: 'A transformative triple‑camera system that adds tons of capability without complexity',
            price: 200
        }, {
            id: 3,
            image: 'images/slides/2.jpeg',
            title: 'SLIDE 3',
            desc: 'A transformative triple‑camera system that adds tons of capability without complexity',
            price: 300
        }
    ]);

    const [ current, setCurrent ] = useState(0);

    const handleAddToCart = (item) => {
        addToCart(item, cart, setCart, 1);
    }

    return (
        <div id="slider-wrap">
            <div id="slider-arrows">
                <div className="slider-arrow left" onClick={() => setCurrent((current - 1) % slides.length)}>
                    <i className="fas fa-arrow-circle-left"></i>
                </div>

                <div className="slider-arrow right" onClick={() => setCurrent((current + 1) % slides.length)}>
                    <i className="fas fa-arrow-circle-right"></i>
                </div>
            </div>

            <div id="slider-items">
                { slides && slides.map(item =>
                    <div className="slider-item" style={{ background: `url('${process.env.PUBLIC_URL}/${item.image}')`, transform: `translateX(-${current * 100}vw)` }}>
                        <div className="slider-bg"></div>
                        <div className="slider-content">
                            <h1 className="slider-title">{ item.title }</h1>
                            <p className="slider-desc">{ item.desc }</p>

                            <Link to={ `product/${ item.id }` }>
                                <button className="cute-btn"><i className="fas fa-shopping-bag"></i> Buy Now</button>
                            </Link>

                            <button className="slider-add-to-cart" onClick={ () => handleAddToCart(item) }><i className="fas fa-shopping-cart"></i> Add to cart</button>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Slider
