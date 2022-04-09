import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
import CountryDetail from "./pages/countryDetail/CountryDetail";
import CreateActivity from "./pages/createActivity/CreateActivity";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path={"/"} component={LandingPage} />
					<Route path={"/home"} component={Home} />
					<Route path={"/country/:id"} component={CountryDetail} />
					<Route path={"/newactivity"} component={CreateActivity} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
