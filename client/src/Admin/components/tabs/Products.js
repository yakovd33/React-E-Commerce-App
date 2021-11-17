import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ApiHelper from '../../../helpers/ApiHelper';

function Products() {
    const [ products, setProducts ] = useState([]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            ApiHelper.delete('products/' + id, (res) => {
                // Filter the deleted product from the state
                setProducts(products.filter((product) => product.id !== id));
            })
        }
    }

    useEffect(() => {
        ApiHelper.get('products/', (res) => {
            setProducts(res)
        })
    }, []);

    return (
        <div>
            <Link to="/admin/products/new/" id="new-product-trigger"><AiOutlinePlus/></Link>

            <div className="card">
                <table id="main-products-table" className="product-table">
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Sale</th>
                        <th>Earning</th>
                        <th>Product Availability</th>
                        <th>Actions</th>
                    </tr>

                    { products.map((product) => (
                        <tr>
                            <td>{ product.id }</td>
                            <td className="product-table-name-col">
                                <img src={ `${process.env.PUBLIC_URL}/images/products/test5.jpg` } alt="" className="product-table-img"/>
                                { product.title }
                            </td>
                            <td>{ product.price }$</td>
                            <td>2471</td>
                            <td>23,588$</td>
                            <td><span className="stock-badge in-stock">In Stock</span></td>
                            <td>
                                <Link to="/admin/edit/1"><span className="product-action-trigger edit"><FaPencilAlt/></span></Link>
                                <span className="product-action-trigger delete" onClick={ () => handleDelete(product.id) }><FaTrash/></span>
                            </td>
                        </tr>
                    )) }
                </table>
            </div>
        </div>
    )
}

export default Products
