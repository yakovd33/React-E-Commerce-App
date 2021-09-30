import React from 'react';
import logo from '../logo.png';

function Footer() {
    return (
        <footer id="main-footer">
            <div className="container">
                <div id="footer-content">
                    <div id="footer-cols">
                    <div className="footer-col" id="footer-about-col">
                        <img src={ logo } height="30px" alt="" id="footer-logo" />
                        <p id="footer-about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates natus voluptate a doloremque eius, molestiae quaerat consequatur fugit dolore ducimus.</p>
                    </div>

                    <div className="footer-col">
                        <div className="footer-links">
                            <div className="footer-col-title">Products</div>
                            <a href="#" className="footer-link">Trending</a>
                            <a href="#" className="footer-link">My Account</a>
                            <a href="#" className="footer-link">Vendors</a>
                            <a href="#" className="footer-link">Brands</a>
                            <a href="#" className="footer-link">Storefront</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <div className="footer-links">
                            <div className="footer-col-title">Legals</div>
                            <a href="#" className="footer-link">License</a>
                            <a href="#" className="footer-link">Refund Policy</a>
                            <a href="#" className="footer-link">About Us</a>
                            <a href="#" className="footer-link">Contacts</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <div className="footer-col-title">Contacts</div>
                        
                        <p id="footer-contact-para">feel free get in touch with us via phone or send us a message</p>
                        <p><a href="tel:972586194321" id="footer-phone">+972 58 619 4321</a></p>
                        <p><a href="mailto:yakovd33@gmail.com" id="footer-email">yakovd33@gmail.com</a></p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
