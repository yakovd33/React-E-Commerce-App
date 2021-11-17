import React, { useState, useEffect } from 'react';
import ApiHelper from '../../../helpers/ApiHelper';

function NewCategory() {
    const [ title, setTitle ] = useState('');
    const [ feedback, setFeedback ] = useState('');
    const [ isSuccess, setIsSuccess ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
            ApiHelper.post('categories/', { title: title }, (res) => {
                if (res.newCatId) {
                    setIsSuccess(true);
                    setFeedback('Category created successfuly.');
                    setTitle('');
                }
            })
        if (title.length) {
        } else {
            setIsSuccess(false);
            setFeedback('Title needs to be entered.')
        }
    }

    return (
        <div>
            <form action="" id="new-category-form" onSubmit={ (e) => handleSubmit(e) }>
                <label htmlFor="">Category name</label>
                <input type="text" value={ title } onChange={ (e) => setTitle(e.target.value) } className="input-box" placeholder="Category name" />

                { feedback && <div id="new-category-feedback" className={ `${isSuccess ? 'success' : ''}` }>{ feedback }</div> }

                <input type="submit" className="cute-btn" value="Create" />
            </form>
        </div>
    )
}

export default NewCategory
