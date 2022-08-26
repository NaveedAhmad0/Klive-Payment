import React, { useState } from "react";
import Logo from "../../assets/logo_login.png";
import google from "./google.png";
import face from "./facebook.png";
import twitter from "./twitter.png";
import "./user-login.css";
import { Link } from "react-router-dom";
const UserLogin = () => {
	const [passwordShown, setPasswordShown] = useState("false");

	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};

	return (
		<div className="user-body">
			<div className="user-container">
				<h6 className="login-heading">
					Online <br />
					<span> payment</span>
				</h6>
				<div
					className="card-body user-card-body shadow-lg p-3 bg-white rounded"
					style={{ minWidth: "max-Content" }}>
					<div className="image">
						<img src={Logo} alt="profile"></img>
						<h6>signup</h6>
					</div>
					<form>
						<div className="mb-3">
							<input
								type="email"
								className="form-control user-form-control"
								placeholder="email"
							/>
						</div>
						<div className="mb-3">
							<input
								type={passwordShown ? "password" : "text"}
								className="form-control form-control"
								placeholder="password"
							/>
							<button onClick={togglePassword}> show password</button>
						</div>
						<div className="forgot-password">
							<a href="/forgotpassword">Forgot password?</a>
						</div>
						<div className="button mt-4">
							<Link to="/user/user-dashboard">
								<button type="button" className="btn user-login-btn">
									Login
								</button>
							</Link>

							<div className="signup mt-3">
								<a href="/registration">Don't have an account signup</a>
							</div>
						</div>
					</form>
				</div>

				<div
					className="card-body user-card-body shadow-lg p-3 bg-white rounded mt-5"
					style={{ minWidth: "max-Content" }}>
					<div className="body">
						<div className="d-flex bd-highlight">
							<div className="p-2 flex-grow-1 bd-highlight user-signin">
								Sign in with
							</div>
							<div className="p-2 bd-highlight user-signin">
								<img src={google} alt="google" />
							</div>
							<div className="p-2 bd-highlight user-signin">
								<img src={face} alt="google" />
							</div>
							<div className="p-2 bd-highlight user-signin">
								<img src={twitter} alt="google" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserLogin;
