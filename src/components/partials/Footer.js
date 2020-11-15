import React from "react"

const Footer = ()=>{
	return (
		<footer className="footer">
			<div className="copy">
				<p>E: jwambua307@gmail.com</p>
				<p>T: +254 70266 3063</p>
			</div>
			<div className="soc-box">
				<div className="follow-label">Follow Me</div>
				<div className="soc">
					<a target="_blank" href="https://www.github.com/John-Wambua">
						<span className="icon fab fa-github"></span>
					</a>
					<a target="_blank" href="https://dev.to/Nyamador">
						<span className="icon fab fa-dev"></span>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/john-wambua-509735197/">
						<span className="icon fab fa-linkedin"></span>
					</a>
				</div>
			</div>
			<div className="clear"></div>
		</footer>
	)
}
export default Footer