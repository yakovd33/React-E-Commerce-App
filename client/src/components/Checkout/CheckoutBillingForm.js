import React, { useState } from 'react';

function CheckoutBillingForm({ setIsInPayment }) {
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');
    const [ zip, setZip ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ error, setError ] = useState(null);

    const handleContinue = () => {
        if (!firstname.length || !lastname.length || !email.length || !city.length || !country.length) {
            setError('There seems to be some missing fields.');
        } else {
            setIsInPayment(true);
            setError(null);
        }
    }

    return (
        <div id="checkout-billing-form">
            <div className="container">
                <div className="form__name">Shipping and Billing</div>
                <div className="form__container">
                    <section className="form__personal">
                        <div className="personal--form">
                            <form className="form--name" action="">
                                <div className="first">
                                    <label for="firstname">First Name</label>
                                    <input placeholder="e.g. Richard" value={ firstname } onChange={ (e) => setFirstname(e.target.value) } className={ `${ error && !firstname.length ? 'missing' : '' }` } id="firstname" type="text" />
                                </div>
                                <div className="last">
                                    <label for="firstname">Last Name</label>
                                    <input placeholder="e.g. Bovell" value={ lastname } onChange={ (e) => setLastname(e.target.value) } id="firstname" type="text" className={ `${ error && !lastname.length ? 'missing' : '' }` } />
                                </div>
                                <div className="email">
                                    <label for="firstname">Email</label>
                                    <input placeholder="e.g. rb@apple.com" value={ email } onChange={ (e) => setEmail(e.target.value) } id="firstname" type="email" className={ `${ error && !email.length ? 'missing' : '' }` } />
                                </div>
                            </form>
                        </div>
                    </section>
                    
                    <section className="form__shipping">
                        <div className="shipping--form">
                            <form className="form--shipping" action="">
                                <div className="row one">
                                    <div className="address">
                                        <label for="address-one">Address</label>
                                        <input placeholder="" value={ address } onChange={ (e) => setAddress(e.target.value) } id="address-one" type="text" className={ `${ error && !address.length ? 'missing' : '' }` }/>
                                    </div>

                                    <div className="city">
                                        <label for="city">City</label>
                                        <input placeholder="" value={ city } onChange={ (e) => setCity(e.target.value) } id="city" type="text" className={ `${ error && !city.length ? 'missing' : '' }` }/>
                                    </div>
                                </div>

                                <div className="row three">
                                    <div className="zip">
                                        <label for="zip">Zip / Postal Code (Optional)</label>
                                        <input placeholder="" value={ zip } onChange={ (e) => setZip(e.target.value) } id="zip" type="text" />
                                    </div>
                                    <div className="country">
                                        <label for="country">Country</label>
                                        <input placeholder="" value={ country } onChange={ (e) => setCountry(e.target.value) } id="country" type="text" className={ `${ error && !country.length ? 'missing' : '' }` } />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    
                    { error && <div id="shipping-form-error">{ error }</div> }
                    <div className="form__confirmation">
                        <button onClick={ handleContinue }>Continue to payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutBillingForm
