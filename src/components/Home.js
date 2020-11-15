import React from "react"
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Landing from "./Landing";

const Home = ()=>{

	return(
		<div style={{ margin: 0, position: 'absolute', top: '50%', msTransform: 'translateY(-50%)',transform: 'translateY(-50%)' }} className={"container"}>
			<Header/>
			<Landing/>
			<Footer/>
		</div>
	)
}
export default Home