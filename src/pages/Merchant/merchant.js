import React from "react";
import Logo from "../../assets/user_profile.png";
import Sidebar from "../../components/SideBar/Sidebar";
import "./Merchant.css";

function merchant() {
	return (
		<>
			<div className="row">
				<div className="col-2" style={{ width: "100%" }}>
					<Sidebar />
				</div>
				<div
					className="col-10"
					style={{
						position: "absolute",
						marginLeft: "19rem",
						marginTop: "7rem",
					}}>
					<h1 className="merchanth1">Merchant Profile</h1>

					<div className="card shadow-lg" style={{ width: "80%" }}>
						<div
							className="card-body"
							style={{ minWidth: "-webkit-fill-available" }}>
							<div className="row">
								<h6 className="merchanth6 d-flex">
									Shop Type:
									<button type="button" class="btn btn-light">
										Legal Entity
									</button>
									<button type="button" class="btn btn-outline-primary">
										Natural Person
									</button>
								</h6>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="payment-inputs">
										<p className="merchantp">
											<b>NameRegisterdAccordingToTheCertification:</b>
										</p>
										<input
											type="text"
											className="form-control payment-inputs-design"
											placeholder="info@gmail.com"
										/>
									</div>
									<div className="payment-inputs">
										<b>TradeName:</b>
										<input
											type="text"
											className="form-control payment-inputs-design"
											placeholder="Name"
										/>
									</div>
									<div className="payment-inputs">
										<b>TaxIdentificationNumber:</b>
										<input
											type="text"
											className="form-control payment-inputs-design"
											placeholder="TaxIdentificationNumber"
										/>
									</div>
									<div className="user-profile">
										<h6 className="merchanth6">
											TaxIdentificationNumber
											<img
												src={Logo}
												alt="user-profile"
												className="user-profile-pic"></img>
										</h6>
									</div>
								</div>
								<button className="btn btn-agree">Leangene</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default merchant;
