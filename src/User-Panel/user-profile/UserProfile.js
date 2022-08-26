import React from "react";
import Logo from "../../assets/user_profile.png";
import Navbar from "../User-Navbar/Navbar";
import Sidebar from "../NewSideBar/UserSideBar";
import "./user-profile.css";
const UserProfile = () => {
	return (
		<>
			<div className="row bg-secondary bg-opacity-10">
				<div className="col-xl-3 col-xxl-2 col-2" style={{ width: "100%" }}>
					<Sidebar />
				</div>

				<div
					className="col-xl-9 col-xxl-10 col-10"
					style={{
						position: "absolute",
						marginLeft: "19rem",
						marginTop: "7rem",
					}}>
					{/* <Navbar className="navbarside mb-5" /> */}
					{/* <div className="container "> */}
					<h2 className="my-5 text-primary fw-bold">
						User Personal Information
					</h2>
					<div className="container-fluid pe-5">
						<div
							className="card border-light rounded-3 shadow"
							style={{ width: "90%" }}>
							<div
								className="card-body px-4"
								style={{ minWidth: "-webkit-fill-available" }}>
								<div className="user-profile-design">
									<img
										src={Logo}
										alt="user-profile"
										className="user-profile-pic"></img>
									<h4>
										Merchant Code:<span className="user-id">M010303</span>
									</h4>
									<h4>
										Email:<span className="user-id">info@gmail.com</span>
									</h4>
								</div>
								<div className="row">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="user-profile-inputs">
											<label className="user-profile-label">
												System Username:
											</label>
											<input
												type="email"
												className="form-control user-profile-inputs-design"
												placeholder="info@gmail.com"
											/>
										</div>
										<div className="user-profile-inputs">
											<label className="user-profile-label">
												Contact phone number:
											</label>
											<input
												type="email"
												className="form-control user-profile-inputs-design"
												placeholder="info@gmail.com"
											/>
										</div>
										<div className="user-profile-inputs">
											<label className="user-profile-label">Province</label>
											<select className="form-select user-profile-inputs-design">
												<option selected>select Province</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
										</div>
										<div className="user-profile-inputs">
											<label className="user-profile-label">Sub-district</label>
											<select className="form-select user-profile-inputs-design">
												<option selected>select Sub-district</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
										</div>
									</div>

									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="user-profile-inputs">
											<label className="user-profile-label">Subname</label>
											<select className="form-select user-profile-inputs-design">
												<option selected>select Surname</option>
												<option value="1">Mr.</option>
												<option value="2">Mrs.</option>
											</select>
										</div>
										<div className="user-profile-inputs">
											<label className="user-profile-label">Email</label>
											<input
												type="email"
												class="form-control user-profile-inputs-design"
												placeholder="info@gmail.com"
											/>
										</div>
										<div className="user-profile-inputs">
											<label className="user-profile-label">
												District/District
											</label>
											<select className="form-select user-profile-inputs-design">
												<option selected>select District</option>
												<option value="1">Madurai</option>
												<option value="2">Covai</option>
											</select>
										</div>
										<div className="user-profile-inputs">
											<label className="user-profile-label">Zip code</label>
											<select className="form-select user-profile-inputs-design">
												<option selected>Zip code</option>
												<option value="1">626112</option>
												<option value="2">78678678</option>
											</select>
										</div>
									</div>
								</div>
								<button className="btn btn-agree">Agree</button>
							</div>
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
		</>
	);
};

export default UserProfile;
