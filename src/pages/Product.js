import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const { product, setProduct } = useState({
        title: 'Apple Watch Series 7',
        price: 450
    });

    const [ amountValue, setAmountValue ] = useState(1);
    const [ size, setSize ] = useState('S');

    const handlePlus = (e) => {
        e.preventDefault();
        setAmountValue(amountValue + 1)
    }

    const handleMinus = (e) => {
        e.preventDefault();

        if (amountValue > 1) {
            setAmountValue(amountValue - 1)
        }
    }

    const [ tab, setTab ] = useState(1);

    return (
        <div id="product-page-wrap" className="page-wrap-grey">
            <div className="container">
                <div id="single-product-wrap">
                    <div id="product-left">
                        <div id="product-gallery">
                            <div id="product-gallery-cur-pic-wrap">
                                <div id="product-sale-badge">SALE</div>
                                <div id="gallery-main-pic" style={{ background: `url('${process.env.PUBLIC_URL}/images/products/test2.jpg')` }} alt="" />
                            </div>
                        </div>
                    </div>

                    <div id="product-right">
                        <div id="single-product-category">CLOTHING</div>
                        <div id="single-product-title">Apple Watch Series 7</div>
                        <p id="single-product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, officiis! Consequuntur laboriosam, incidunt similique debitis dolorem reprehenderit tempora quae aspernatur veniam explicabo neque fugiat. Facere voluptates possimus suscipit deserunt laborum!</p>

                        <div id="single-product-price">
                            <div id="single-product-price-cur">69.9$</div>
                        </div>

                        <div id="single-product-var-select">
                            <div id="single-product-size-select">
                                <label htmlFor="" id="single-product-size-select-title">Size:</label>
                                <div id="single-product-size-select-options">
                                    <div className={ `single-product-size-select-option ${ size === 'XS' ? 'active' : '' }` } onClick={ () => setSize('XS') }>XS</div>
                                    <div className={ `single-product-size-select-option ${ size === 'S' ? 'active' : '' }` } onClick={ () => setSize('S') }>S</div>
                                    <div className={ `single-product-size-select-option ${ size === 'M' ? 'active' : '' }` } onClick={ () => setSize('M') }>M</div>
                                    <div className={ `single-product-size-select-option ${ size === 'L' ? 'active' : '' }` } onClick={ () => setSize('L') }>L</div>
                                    <div className={ `single-product-size-select-option ${ size === 'XL' ? 'active' : '' }` } onClick={ () => setSize('XL') }>XL</div>
                                </div>
                            </div>
                        </div>

                        <form action="" id="single-product-add-to-cart-form">
                            <div id="single-product-add-to-cart-form-amount">
                                <button id="single-product-add-to-cart-form-plus" onClick={ handleMinus }>-</button>
                                <input type="number" value={ amountValue } onChange={ (e) => setAmountValue(e.target.value) } id="single-product-add-to-cart-form-amount-field" />
                                <button id="single-product-add-to-cart-form-minus" onClick={ handlePlus }>+</button>
                            </div>

                            <button id="single-product-add-to-cart-btn">ADD TO CART</button>
                        </form>

                        <table id="single-product-actions">
                            <tr className="single-product-action-item">
                                <td className="single-product-actions-title">TAGS:</td>
                                <td>
                                    <Link to="/category/1" className="single-product-tag-link">T-Shirt</Link>
                                    <Link to="/category/1" className="single-product-tag-link">Watches</Link>
                                    <Link to="/category/1" className="single-product-tag-link">Smartphones</Link>
                                    <Link to="/category/1" className="single-product-tag-link">Sneakers</Link>
                                </td>
                            </tr>

                            <tr>
                                <td className="single-product-actions-title">SHARE:</td>
                                <td>
                                    <a href="#" className="single-product-share-option"><i className="fab fa-whatsapp"></i></a>
                                    <a href="#" className="single-product-share-option"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="single-product-share-option"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="single-product-share-option"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="single-product-share-option"><i className="fab fa-linkedin"></i></a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="single-product-bottom-wrap">
                    <div id="single-product-tab-triggers">
                        <div className={ `single-product-tab-trigger ${ tab === 1 ? 'active' : '' }` } onClick={ () => setTab(1) }>Description</div>
                        <div className={ `single-product-tab-trigger ${ tab === 2 ? 'active' : '' }` } onClick={ () => setTab(2) }>Additional Information</div>
                        <div className={ `single-product-tab-trigger ${ tab === 3 ? 'active' : '' }` } onClick={ () => setTab(3) }>Reviews (5)</div>
                    </div>

                    <div id="single-product-tabs">
                        <div className={ `single-product-tab ${ tab === 1 ? 'active' : '' }` }>
                            <div id="desc-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam rerum, autem quia deserunt saepe illum temporibus reprehenderit incidunt dignissimos, voluptate, sunt pariatur error aperiam? Beatae pariatur ducimus nisi modi provident!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam dignissimos ut obcaecati mollitia facilis enim quas. Incidunt veritatis, enim obcaecati accusantium deleniti vitae repudiandae hic quod eius temporibus sed.
                            </div>
                        </div>

                        <div className={ `single-product-tab ${ tab === 2 ? 'active' : '' }` }>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum odio dignissimos sed, iusto quia asperiores esse quam tempore voluptas, doloremque voluptatum amet laboriosam reiciendis quisquam ipsum placeat quas? Officia.
                        </div>

                        <div className={ `single-product-tab ${ tab === 3 ? 'active' : '' }` }>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum odio dignissimos sed, iusto quia asperiores esse quam tempore voluptas, doloremque voluptatum amet laboriosam reiciendis quisquam ipsum placeat quas? Officia.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
