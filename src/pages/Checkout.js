import React, { useState } from 'react'
import { CheckoutPaymentForm, CheckoutBillingForm } from '../components';

function Checkout() {
    const [ isInPayment, setIsInPayment ] = useState(false);

    return (
        <div id="checkout-wrap">
            { !isInPayment && <CheckoutBillingForm setIsInPayment={ setIsInPayment }/> }
            { isInPayment && <CheckoutPaymentForm setIsInPayment={ setIsInPayment }/> }
        </div>
    )
}

export default Checkout;