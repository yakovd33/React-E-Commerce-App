import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

function CartList() {
    const [ cart, setCart ] = useContext(CartContext);

    const handleRemove = (cart_item_id) => {
        const newCart = cart.filter((item) => item.id !== cart_item_id);
        setCart(newCart);
    }

    return (
        <div id="cart-list">
            <h2>YOUR CART ITEMS</h2>

            <table id="cart-list-table" className="table">
                <tr className="table-header">
                    <th className="header__item">Product</th>
                    <th className="header__item">Price</th>
                    <th className="header__item">Quantity</th>
                    <th className="header__item">Total</th>
                    <th className="header__item">Actions</th>
                </tr>

                {( cart.map(item => (
                    <tr className="table-row">
                        <td className="table-data cart-table-title"><Link to={ `/product/${item.id}` }>{ item.title }</Link></td>
                        <td className="table-data">{ item.price }$</td>
                        <td className="table-data">{ item.quantity }</td>
                        <td className="table-data">{ item.price * item.quantity }$</td>
                        <td className="table-data">
                            <div className="cart-option cart-delete-option" onClick={() => handleRemove(item.id)}>
                                <i className="fa fa-times"/>
                            </div>
                        </td>
                    </tr>
                )) )}
            </table>
        </div>
    )
}

export default CartList
