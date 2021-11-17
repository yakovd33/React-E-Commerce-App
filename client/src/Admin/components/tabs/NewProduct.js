import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import ApiHelper from '../../../helpers/ApiHelper';

function NewProduct() {
    const [ categoryOptions, setCategoryOptions ] = useState([]);

    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ insertedFeedback, setInsertedFeedback ] = useState('');
    const [ newProductId, setNewProductId ] = useState(0);

    useEffect(() => {
        ApiHelper.get('categories/get_all/', (res) => {
            setCategoryOptions(res)
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        var selected = new Array();

        // Reference all the CheckBoxes in Table.
        var chks = document.getElementsByClassName("category-checkbox");
 
        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selected.push(chks[i].value);
            }
        }
 
        // Seperate the values by a comma
        var categories = selected.join(",");

        ApiHelper.post('products/', {
            title: name,
            description: description,
            price: price,
            categories: categories
        }, (res) => {
            console.log(res);

            if (res.newProductId) {
                setNewProductId(res.newProductId);
                setInsertedFeedback('Product created successfuly.');
            }
        })
    }

    return (
        <div>
            <Link to="/admin/products/" className="back-link"><BiArrowBack/> Go back to products.</Link>

            <form action="" id="new-product-form" className="card" onSubmit={ (e) => handleSubmit(e) }>
                <label htmlFor=""><strong>Product name</strong></label>
                <input type="text" onChange={ (e) => setName(e.target.value) } placeholder="Product name" className="input-box"/>

                <label htmlFor=""><strong>Product price ($)</strong></label>
                <input type="number" onChange={ (e) => setPrice(e.target.value) } placeholder="Product price" className="input-box"/>

                <label htmlFor=""><strong>Product description</strong></label>
                <textarea onChange={ (e) => setDescription(e.target.value) } placeholder="Product description" className="input-box"></textarea>

                <label htmlFor=""><strong>Categories</strong></label>
                <div className="form-group" id="new-product-cats-wrap">
                    { categoryOptions.map((cat) => (
                        <label><input className="category-checkbox" type="checkbox" value={ cat.cat_id }/> { cat.title }</label>
                    )) }
                </div>

                { insertedFeedback && <div id="new-product-feedback">{ insertedFeedback } <Link to={ `/product/${ newProductId }` }>Want to see it?</Link></div> }

                <input type="submit" className="cute-btn" value="Create" />
            </form>
        </div>
    )
}

export default NewProduct
