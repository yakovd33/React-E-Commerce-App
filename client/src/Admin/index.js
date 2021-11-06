import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

import { Header, Footer, Sidebar } from './components';
import { Dashboard, Account, Products, Orders, Settings } from './components/tabs';

function index() {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href={ `${process.env.PUBLIC_URL}/stylesheets/Admin.css` } />
            </Helmet>
           <Header/>

            <div id="admin-wrap">
                <div id="admin-sidebar-wrap">
                    <Sidebar/>
                </div>

                <div id="admin-main-wrap">
                    <Switch>
                        <Route exact path="/admin/account" component={ Account }/>
                        <Route exact path="/admin/products" component={ Products }/>
                        <Route exact path="/admin/orders" component={ Orders }/>
                        <Route exact path="/admin/settings" component={ Settings }/>
                        <Route exact path="/admin" component={ Dashboard }/>
                    </Switch>
                </div>
            </div>

           <Footer/>
        </div>
    )
}

export default index
