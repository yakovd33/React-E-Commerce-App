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
            <div class="container">
                <div class="form__name">Shipping and Billing</div>
                <div class="form__container">
                    <section class="form__personal">
                        <div class="personal--form">
                            <form class="form--name" action="">
                                <div class="first">
                                    <label for="firstname">First Name</label>
                                    <input placeholder="e.g. Richard" value={ firstname } onChange={ (e) => setFirstname(e.target.value) } className={ `${ error && !firstname.length ? 'missing' : '' }` } id="firstname" type="text" />
                                </div>
                                <div class="last">
                                    <label for="firstname">Last Name</label>
                                    <input placeholder="e.g. Bovell" value={ lastname } onChange={ (e) => setLastname(e.target.value) } id="firstname" type="text" className={ `${ error && !lastname.length ? 'missing' : '' }` } />
                                </div>
                                <div class="email">
                                    <label for="firstname">Email</label>
                                    <input placeholder="e.g. rb@apple.com" value={ email } onChange={ (e) => setEmail(e.target.value) } id="firstname" type="email" className={ `${ error && !email.length ? 'missing' : '' }` } />
                                </div>
                            </form>
                        </div>
                    </section>
                    
                    <section class="form__shipping">
                        <div class="shipping--form">
                            <form class="form--shipping" action="">
                                <div class="row one">
                                    <div class="address">
                                        <label for="address-one">Address</label>
                                        <input placeholder="" value={ address } onChange={ (e) => setAddress(e.target.value) } id="address-one" type="text" className={ `${ error && !address.length ? 'missing' : '' }` }/>
                                    </div>

                                    <div class="city">
                                        <label for="city">City</label>
                                        <input placeholder="" value={ city } onChange={ (e) => setCity(e.target.value) } id="city" type="text" className={ `${ error && !city.length ? 'missing' : '' }` }/>
                                    </div>
                                </div>

                                <div class="row three">
                                    <div class="zip">
                                        <label for="zip">Zip / Postal Code (Optional)</label>
                                        <input placeholder="" value={ zip } onChange={ (e) => setZip(e.target.value) } id="zip" type="text" />
                                    </div>
                                    <div class="country">
                                        <label for="country">Country</label>
                                        <input placeholder="" value={ country } onChange={ (e) => setCountry(e.target.value) } id="country" type="text" className={ `${ error && !country.length ? 'missing' : '' }` } />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    
                    { error && <div id="shipping-form-error">{ error }</div> }
                    <div class="form__confirmation">
                        <button onClick={ handleContinue }>Continue to payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutBillingForm
