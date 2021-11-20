import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer } from "./components";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Admin from "./Admin";
import ApiHelper from './helpers/ApiHelper';

import { CartContext } from './contexts/CartContext';
import { UserContext } from './contexts/UserContext';

import "./App.css";

function App() {
	const [ cart, setCart ] = useState([]);
	
	// const [ user, setUser ] = useState({
	// 	login_token: '1234',
	// 	isAdmin: false
	// });
	
	const [ user, setUser ] = useState(null);

	useEffect(() => {
		if (localStorage.getItem('user')) {
			setUser(JSON.parse(localStorage.getItem('user')));
        }

		if (localStorage.getItem('cart')) {
			setCart(JSON.parse(localStorage.getItem('cart')));
		}
	}, []);

	return (
		<CartContext.Provider value={ [ cart, setCart ] }>
			<UserContext.Provider value={ [ user, setUser ] }>
				<div className="App">
					<Router>
						<Header/>
						<Switch>
							<Route exact path="/categories/" component={ Categories }/>
							<Route exact path="/category/:id/" component={ Category }/>
							<Route exact path="/product/:id/" component={ Product }/>
							<Route exact path="/cart/" component={ Cart }/>
							<Route exact path="/checkout/" component={ Checkout }/>
							<Route exact path="/login/" component={ Login } user={ user }/>
							<Route path="/admin/" component={ Admin } />
							<Route exact path="/" component={ Home }/>
						</Switch>
						<Footer/>
					</Router>
				</div>
			</UserContext.Provider>
		</CartContext.Provider>
	);
}

export default App;