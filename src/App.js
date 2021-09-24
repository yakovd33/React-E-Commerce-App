import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer } from "./components";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import { CartContext } from './contexts/CartContext';

import "./App.css";

function App() {
	const [ cart, setCart ] = useState([{
		id: 1,
		title: 'Lemons',
		price: 10,
		quantity: 3
	}, {
		id: 2,
		title: 'Potatos',
		price: 7,
		quantity: 8
	}]);

	return (
		<CartContext.Provider value={ [ cart, setCart ] }>
			<div className="App">
				<Router>
					<Header/>
					<Switch>
						<Route exact path="/categories/" component={ Categories }/>
						<Route exact path="/category/:id/" component={ Category }/>
						<Route exact path="/product/:id/" component={ Product }/>
						<Route exact path="/cart/" component={ Cart }/>
						<Route exact path="/" component={ Home }/>
					</Switch>
					<Footer/>
				</Router>
			</div>
		</CartContext.Provider>
	);
}

export default App;