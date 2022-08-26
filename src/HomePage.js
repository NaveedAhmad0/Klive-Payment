import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
const HomePage = () => {
	return (
		<>
			<div className=" home ">
				<Link to="/admin">
					<button className="btn btn-primary">Admin</button>
				</Link>
				<Link to="/user/user-login">
					<button className="btn btn-secondary">User</button>
				</Link>
				<Link to="/merchant/merchant-login">
					<button className="btn btn-info">Merchant</button>
				</Link>
			</div>
		</>
	);
};

export default HomePage;
