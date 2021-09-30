import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

function CartTotals() {
    const [ cart, setCart ] = useContext(CartContext);
    const [ total, setTotal ] = useState(0);
    const [ shipping, setShipping ] = useState(20);

    useEffect(() => {
        if (cart.length) {
            cart.map(item => {
                setTotal(total + (item.price * item.quantity))
            })
        } else {
            setTotal(0)
        }
    }, [ cart ])

    return (
        <div id="cart-totals" className={ `${ !cart.length ? 'no-items' : '' }` }>
            <h2>CART TOTALS</h2>

            <table id="cart-totals-table">
                <tr>
                    <td>Subtotal:</td>
                    <td>{ total }$</td>
                </tr>

                <tr>
                    <td>Shipping:</td>
                    <td>{ shipping }$</td>
                </tr>

                <tr>
                    <td>Total:</td>
                    <td>{ total + shipping }$</td>
                </tr>
            </table>

            <Link to="/checkout/" id="cart-checkout-btn"><i className="fa fa-check"/> PROCEED TO CHECKOUT</Link>
        </div>
    )
}

export default CartTotals
