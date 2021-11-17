import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

import { Header, Footer, Sidebar } from './components';
import { Dashboard, Account, Products, Orders, Settings, Categories } from './components/tabs';
import NewProduct from './components/tabs/NewProduct';
import NewCategory from './components/tabs/NewCategory';

import { UserContext } from '../contexts/UserContext';
import UserHelper from '../helpers/UserHelper';

function Index() {
    const [ user, setUser ] = useState(null);
    const [ auth, setAuth ] = useState(false);

	useEffect(() => {
		if (!user && localStorage.getItem('user')) {
			setUser(JSON.parse(localStorage.getItem('user')));
        }

        if (user != null && UserHelper.isLogged(user) && UserHelper.isAdmin(user)) {
            setAuth(true);
        } else {
            setAuth(false);
        }
	}, [ user ]);

    if (auth) {
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href={ `${process.env.PUBLIC_URL}/stylesheets/Admin.css` } />
                </Helmet>
            <Header/>

                <div id="admin-wrap">
                    <div id="admin-sidebar-wrap">
                        <Sidebar user={ user } setUser={ setUser }/>
                    </div>

                    <div id="admin-main-wrap">
                        <Switch>
                            <Route exact path="/admin/account" component={ Account }/>
                            <Route exact path="/admin/products" component={ Products }/>
                            <Route exact path="/admin/products/new" component={ NewProduct }/>
                            <Route exact path="/admin/categories" component={ Categories }/>
                            <Route exact path="/admin/categories/new" component={ NewCategory }/>
                            <Route exact path="/admin/orders" component={ Orders }/>
                            <Route exact path="/admin/settings" component={ Settings }/>
                            <Route exact path="/admin" component={ Dashboard }/>
                        </Switch>
                    </div>
                </div>

            <Footer/>
            </div>
        )
    } else {
        return (<div className="container" id="no-auth-msg">You're not authenticated.</div>)
    }
}

export default Index
