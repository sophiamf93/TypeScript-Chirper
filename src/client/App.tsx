import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from "./components/Home";

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

	// useEffect(() => {
	// 	async function getGreeting() {
	// 		try {
	// 			const res = await fetch('/api/hello');
	// 			const greeting = await res.json();
	// 			setGreeting(greeting);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// 	getGreeting();
	// }, []);

	return (
		<Router>
			<nav>
				chirper

				<Link to={"/create"}>Create Chirp</Link>
			</nav>

			<Switch>
				<Route exact path="/" component={Home}/>
			</Switch>
		</Router>
	);
};

interface AppProps { }

export default App;
 
