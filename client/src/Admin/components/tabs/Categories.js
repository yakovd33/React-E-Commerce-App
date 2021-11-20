import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import ApiHelper from '../../../helpers/ApiHelper';

function Categories() {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        ApiHelper.get('categories/get_all/', (res) => {
            setCategories(res)
        })
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        if (window.confirm("Are you sure you want to delete this category?")) {
            ApiHelper.delete(`categories/${id}/`, (res) => {
                setCategories(categories.filter((category) => category.cat_id !== id))
            })
        }
    }

    return (
        <div className="card">
            <Link to="/admin/categories/new/" id="new-category-trigger"><AiOutlinePlus/></Link>

            <h3>Website Categories</h3>
            <table id="category-list" className="product-table">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>

                { categories.map((category) => (
                    <tr>
                        <td>{ category.cat_id }</td>
                        <td className="cat-title-col">{ category.title }</td>
                        <td>
                            <Link to="/admin/edit/1"><span className="product-action-trigger edit"><FaPencilAlt/></span></Link>
                            <span className="product-action-trigger delete" onClick={ () => handleDelete(category.cat_id) }><FaTrash/></span>
                        </td>
                    </tr>
                )) }
            </table>
        </div>
    )
}

export default Categories
