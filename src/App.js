import Home from "./pages/Home";
import { Header, Footer } from "./components";

import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header/>

			<Switch>
				<Route exact path="/">
					<Home/>
				</Route>
			</Switch>

			<Footer/>
		</div>
	);
}

export default App;
