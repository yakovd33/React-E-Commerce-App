import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Products() {
    const handleDelete = (id) => {
        console.log('delete: ' + id);
    }

    return (
        <div>
            <div className="card">
                <table id="main-products-table" className="product-table">
                    <tr>
                            <th>No.</th>
                            <th>Product Name</th>
                            <th>Sale</th>
                            <th>Earning</th>
                            <th>Product Availability</th>
                            <th>Actions</th>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td className="product-table-name-col">
                                <img src={ `${process.env.PUBLIC_URL}/images/products/test5.jpg` } alt="" className="product-table-img"/>
                                6 Color Candy
                            </td>
                            <td>2471</td>
                            <td>23,588$</td>
                            <td><span className="stock-badge in-stock">In Stock</span></td>
                            <td>
                                <Link to="/admin/edit/1"><span className="product-action-trigger edit"><FaPencilAlt/></span></Link>
                                <span className="product-action-trigger delete" onClick={ () => handleDelete(1) }><FaTrash/></span>
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td className="product-table-name-col">
                                <img src={ `${process.env.PUBLIC_URL}/images/products/test5.jpg` } alt="" className="product-table-img"/>
                                6 Color Candy
                            </td>
                            <td>2471</td>
                            <td>23,588$</td>
                            <td><span className="stock-badge out-stock">Out Of Stock</span></td>
                            <td>
                            <Link to="/admin/edit/1"><span className="product-action-trigger edit"><FaPencilAlt/></span></Link>
                                <span className="product-action-trigger delete" onClick={ () => handleDelete(1) }><FaTrash/></span>
                            </td>
                        </tr>
                </table>
            </div>
        </div>
    )
}

export default Products
