import React from "react"
import {Link} from "react-router-dom";

const Header = ()=>{
	return(
		<header className="header">
			<div className="head-top">

				{/*menu button */}
				<Link to={"/"} className="menu-btn"><span></span></Link>

				{/*logo */}
				<div className="logo hover-masks-logo">
					<Link to={"/"}>
						<span className="mask-lnk">John <strong></strong></span>
						<span className="mask-lnk mask-lnk-hover"><strong>Wambua</strong></span>
					</Link>
				</div>

				{/*top menu*/}
				<div className="top-menu hover-masks">
					<div className="top-menu-nav">
						<div className="menu-topmenu-container">
							<ul className="menu">
								<li className="menu-item menu-item-has-children current-menu-item">
									<Link to="/">Home</Link>

								</li>
								<li className="menu-item menu-item-has-children">
									<Link to="/my-work">Resume</Link>

								</li>

							</ul>
						</div>
					</div>
				</div>

			</div>
		</header>
	)
}
export default Header