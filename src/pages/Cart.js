import React from 'react';
import { CartTotals, CartList } from '../components';

function Cart() {
    return (
        <div className="page-wrap-grey">
            <div className="container">
                <div id="cart-content-wrap">
                    <div id="cart-left">
                        <CartList/>
                    </div>

                    <div id="cart-right">
                        <CartTotals/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
