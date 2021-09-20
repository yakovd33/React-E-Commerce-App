import Home from "./pages/Home";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import { Header, Footer } from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
				<Switch>
					<Route exact path="/categories/" component={ Categories }/>
					<Route exact path="/category/:cat" component={ Category }/>
					<Route exact path="/" component={ Home }/>
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;