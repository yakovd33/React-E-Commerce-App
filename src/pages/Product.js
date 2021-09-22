import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const { product, setProduct } = useState({
        title: 'Apple Watch Series 7',
        price: 450
    });

    return (
        <div>
            
        </div>
    )
}

export default Product
