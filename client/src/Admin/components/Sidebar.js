import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBox } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';

import UserHelper from '../../helpers/UserHelper';

function Sidebar({ user, setUser }) {
    const handleLogout = () => {
        UserHelper.logout(user, setUser);
    }

    return (
        <div id="admin-sidebar">
            <div id="sidebar-links">
                <NavLink exact={true} to="/admin" activeClassName="active" className="sidebar-link">
                    <span className="icon"><MdOutlineSpaceDashboard /></span>
                    <span className="text">Dashboard</span>
                </NavLink>

                <NavLink to="/admin/account" activeClassName="active" className="sidebar-link">
                    <span className="icon"><AiOutlineUser /></span>
                    <span className="text">Account</span>
                </NavLink>

                <NavLink to="/admin/products" activeClassName="active" className="sidebar-link">
                    <span className="icon"><BsBox /></span>
                    <span className="text">Products</span>
                </NavLink>

                <NavLink to="/admin/categories" activeClassName="active" className="sidebar-link">
                    <span className="icon"><BiCategory /></span>
                    <span className="text">Categories</span>
                </NavLink>

                <NavLink to="/admin/orders" activeClassName="active" className="sidebar-link">
                    <span className="icon"><AiOutlineShoppingCart /></span>
                    <span className="text">Orders</span>
                </NavLink>

                <NavLink to="/admin/settings" activeClassName="active" className="sidebar-link">
                    <span className="icon"><FiSettings /></span>
                    <span className="text">Settings</span>
                </NavLink>

                <div class="sidebar-link" onClick={ handleLogout } id="admin-sidebar-logout-btn">
                    <span className="icon"><FiLogOut/></span>
                    <span className="text">Log Out</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
