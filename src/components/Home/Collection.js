import React from 'react';
import { ProductRows, CollectionProductBig } from '../../components';

function Collection({ title, subtitle, bigproduct, products }) {
    return (
        <section className="collection-section">
            <div className="container">
                <div className="container-content">
                    <div class="section-title">
                        <div class="section-title-sup">{ subtitle }</div>
                        <h1 class="section-title-main">{ title }</h1>
                    </div>

                    <div className="collection-products">
                        <div className="collection-products-left">
                            {( products.map(item => (
                                <ProductRows product={ item }/>
                            )) )}
                        </div>

                        <div className="collection-products-right">
                            <CollectionProductBig product={ bigproduct }/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection
