import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

function Header() {
    return (
        <div id="admin-header">
            <Link to="/">
                <div id="admin-header-logo">
                    <img src={ logo } alt=""/>
                </div>
            </Link>
        </div>
    )
}

export default Header
