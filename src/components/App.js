import React from "react"
import Home from "./Home";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom"
import Projects from "./Projects";

const App=()=>{
	return(
		<div>
			<Router>
				<Switch>
					<Route path={"/"} exact component={Home}/>
					<Route path={"/my-work"} exact component={Projects}/>
				</Switch>
			</Router>
		</div>
	)
}
export default App