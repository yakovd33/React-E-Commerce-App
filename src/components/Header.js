import React from 'react'

function Header() {
    return (
        <header>
            <div id="header-top">
                <div className="container" id="header-top-wrap">
                    <div id="header-top-left">
                        <img src="public/images/logo.png" alt="" id="header-logo" />
                    </div>

                    <div id="header-top-center">
                        <form action="" id="header-search-form">
                            <input type="text" placeholder="Search For Products, Brands & Categories" />
                        </form>
                    </div>

                    <div id="header-top-right">
                        <div id="header-actions">
                            <div className="header-action" id="heart-action"><img src="images/icons/heart.png" alt="" /></div>
                            <div className="header-action" id="account-action"><img src="images/icons/account.png" alt="" /></div>
                            <div className="header-action" id="cart-action"><img src="images/icons/cart.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="header-bottom">
                <div className="container" id="header-bottom-wrap">
                    <div id="header-bottom-right">
                        <div id="header-cat-sort">
                            <div id="header-cat-sort-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div id="header-cat-sort-text">All Categories</div>
                        </div>
                    </div>

                    <div id="header-bottom-left">
                        <div id="header-bottom-links">
                            <a href="#" className="header-bottom-link active">Home</a>
                            <a href="#" className="header-bottom-link">New Arrivals</a>
                            <a href="#" className="header-bottom-link">Trending</a>
                            <a href="#" className="header-bottom-link">Deals For You</a>
                            <a href="#" className="header-bottom-link">Discounts</a>
                            <a href="#" className="header-bottom-link">Weekly Offers</a>
                            <a href="#" className="header-bottom-link">Become A Vendor</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header