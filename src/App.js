import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer } from "./components";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import Product from "./pages/Product";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
				<Switch>
					<Route exact path="/categories/" component={ Categories }/>
					<Route exact path="/category/:id/" component={ Category }/>
					<Route exact path="/product/:id/" component={ Product }/>
					<Route exact path="/" component={ Home }/>
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;