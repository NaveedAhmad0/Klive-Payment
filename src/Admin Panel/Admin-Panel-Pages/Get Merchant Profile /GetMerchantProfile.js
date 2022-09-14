import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from "./GetMercahntProfile.css";

const GetMerchantProfile = () => {
	const location = useLocation();
	const [fetchData, setFetchData] = useState({
		id: 0,
		name: "",
		mobile: "",
		email: "",
		merchantName: "",
		personType: "",
		InitialShop: "",
		firstName: "",
		surName: "",
		yearOfBirth: "",
		monthOfBirth: "",
		dayOfBirth: "",
		address: "",
		province: "",
		district: "",
		subDivision: "",
		pincode: 0,
		shopType: "",
		creditCard: "",
		weChat: "",
		livePayment: "",
		mobileBanking: "",
		trueWallet: "",
		shopeePay: "",
		alone: "",
		website: "",
		facebook: "",
		linkedin: "",
		instagram: "",
		other: "",
		company: "",
		bank: "",
		bankAccount: 0,
		rnfCode: "",
		domestic: "",
		inter: "",
		rateQrCode: "",
		rateBarCode: "",
		copyOfId: "",
		logo: "",
		bankBook: "",
		otherDocument: "",
	});
	const {
		id,
		name,
		mobile,
		email,
		merchant,
		merchantName,
		personType,
		InitialShop,
		firstName,
		surName,
		yearOfBirth,
		monthOfBirth,
		dayOfBirth,
		address,
		province,
		district,
		subDivision,
		pincode,
		shopType,
		creditCard,
		weChat,
		livePayment,
		mobileBanking,
		trueWallet,
		shopeePay,
		alone,
		website,
		facebook,
		linkedin,
		instagram,
		other,
		company,
		bank,
		bankAccount,
		rnfCode,
		domestic,
		inter,
		rateQrCode,
		rateBarCode,
		copyOfId,
		logo,
		bankBook,
		otherDocument,
	} = fetchData;

	useEffect(() => {
		// const loginemail = localStorage.getItem("email");
		const merchantDataEmail = location.state.merchantdataEmail;
		console.log("Email issss", location.state.merchantdataEmail);
		axios
			.get(
				`https://backend.klivepay.com/api/merchant/get-profile?email=${merchantDataEmail}`
			)
			.then((res) => {
				setFetchData({
					id: res.data.merchant.id,
					name: res.data.merchant.name,
					mobile: res.data.merchant.mobile,
					email: res.data.merchant.email,
					merchantName: res.data.merchant.merchantName,
					personType: res.data.merchant.personType,
					InitialShop: res.data.merchant.InitialShop,
					firstName: res.data.merchant.firstName,
					surName: res.data.merchant.surName,
					yearOfBirth: res.data.merchant.yearOfBirth,
					monthOfBirth: res.data.merchant.monthOfBirth,
					dayOfBirth: res.data.merchant.dayOfBirth,
					address: res.data.merchant.address,
					province: res.data.merchant.province,
					district: res.data.merchant.district,
					subDivision: res.data.merchant.subDivision,
					pincode: res.data.merchant.pincode,
					shopType: res.data.merchant.shopType,
					creditCard: res.data.merchant.creditCard,
					weChat: res.data.merchant.weChat,
					livePayment: res.data.merchant.livePayment,
					mobileBanking: res.data.merchant.mobileBanking,
					trueWallet: res.data.merchant.trueWallet,
					shopeePay: res.data.merchant.shopeePay,
					alone: res.data.merchant.alone,
					website: res.data.merchant.website,
					facebook: res.data.merchant.facebook,
					linkedin: res.data.merchant.linkedin,
					instagram: res.data.merchant.instagram,
					other: res.data.merchant.other,
					company: res.data.merchant.company,
					bank: res.data.merchant.bank,
					bankAccount: res.data.merchant.bankAccount,
					rnfCode: res.data.merchant.rnfCode,
					domestic: res.data.merchant.domestic,
					inter: res.data.merchant.inter,
					rateQrCode: res.data.merchant.rateQrCode,
					rateBarCode: res.data.merchant.rateBarCode,
					copyOfId: res.data.merchant.copyOfId,
					logo: res.data.merchant.logo,
					bankBook: res.data.merchant.bankBook,
					otherDocument: res.data.merchant.otherDocument,
				});

				console.log("merchant DATA IS ", res.data.merchant);
			});
	}, []);

	return (
		<div className="col-12 grid-margin">
			<h4 className="card-title">Personal admin Information</h4>

			<div className="card">
				<div className="row flex-column mt-5 mx-auto">
					<img
						className="img-lg mx-auto rounded-circle"
						src={require("../../../assets/images/faces/face8.jpg")}
						alt="Profile"
					/>
					<div className="mt-2 mx-auto">
						<p>
							Merchant Code: <span className="text-primary">M010303</span>
						</p>
						<p className="mx-auto">
							Email: <span className="text-primary">{email}</span>
						</p>
					</div>
				</div>

				<div className="col-12 grid-margin">
					<h4 className="card-title">merchant Personal Information</h4>

					<div className="card">
						<div className={`card-body ${styles.usercardbody}`}>
							<div className="form-sample">
								{/* <h4 className={`text-center ${styles.userHeading}`}>Profile</h4> */}
								<div className="row mt-5">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Merchant ID :-
													</h5>
													<h6 className="ms-2">{id}</h6>
												</Form.Group>
											</div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Merchant Name :-
													</h5>
													<h6 className="ms-2">{merchantName}</h6>
												</Form.Group>
											</div>
										</div>
									</div>

									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Merchant Name English:-
													</h5>
													<h6 className="ms-2">{name}</h6>
												</Form.Group>
											</div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Email Address :-
													</h5>
													<h6 className="ms-2">{email}</h6>
												</Form.Group>
											</div>
										</div>
									</div>
								</div>

								<div className="form-group">
									<Form.Group className=" d-flex">
										<h5
											htmlFor="exampleInputUsername1"
											className="text-primary">
											Initial Shop :-
										</h5>
										<h6 className="ms-2">{InitialShop}</h6>
									</Form.Group>
								</div>

								<div className="row">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<Form.Group className=" d-flex">
												<h5
													htmlFor="exampleInputUsername1"
													className="text-primary">
													First Name :-
												</h5>
												<h6 className="ms-2">{firstName}</h6>
											</Form.Group>
										</div>
									</div>

									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<Form.Group className=" d-flex">
												<h5
													htmlFor="exampleInputUsername1"
													className="text-primary">
													Email :-
												</h5>
												<h6 className="ms-2">{email}</h6>
											</Form.Group>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
										<div className="form-group">
											<Form.Group className=" d-flex">
												<h5
													htmlFor="exampleInputUsername1"
													className="text-primary">
													Year of Birth :-
												</h5>
												<h6 className="ms-2">{yearOfBirth}</h6>
											</Form.Group>
										</div>
									</div>

									<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
										<div className="form-group">
											<Form.Group className=" d-flex">
												<h5
													htmlFor="exampleInputUsername1"
													className="text-primary">
													Month Of Birth :-
												</h5>
												<h6 className="ms-2">{monthOfBirth}</h6>
											</Form.Group>
										</div>
									</div>

									<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
										<div className="form-group">
											<Form.Group className=" d-flex">
												<h5
													htmlFor="exampleInputUsername1"
													className="text-primary">
													Day Of Birth:-
												</h5>
												<h6 className="ms-2">{dayOfBirth}</h6>
											</Form.Group>
										</div>
									</div>
								</div>

								<div class="form-group">
									<Form.Group className=" d-flex">
										<h5
											htmlFor="exampleInputUsername1"
											className="text-primary">
											Contact Number :-
										</h5>
										<h6 className="ms-2">{mobile}</h6>
									</Form.Group>
								</div>

								<div class="form-group">
									<Form.Group className=" d-flex">
										<h5
											htmlFor="exampleInputUsername1"
											className="text-primary">
											Address :-
										</h5>
										<h6 className="ms-2">{address}</h6>
									</Form.Group>
								</div>

								<div className="row mt-5">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div>
											<Form.Group className=" d-flex">
												<h5
													htmlFor="exampleInputUsername1"
													className="text-primary">
													Provience :-
												</h5>
												<h6 className="ms-2">{province}</h6>
											</Form.Group>

											<Form.Group className=" d-flex">
												<h5
													htmlFor="exampleInputUsername1"
													className="text-primary">
													Sub Division :-
												</h5>
												<h6 className="ms-2">{subDivision}</h6>
											</Form.Group>
										</div>
									</div>

									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														District :-
													</h5>
													<h6 className="ms-2">{district}</h6>
												</Form.Group>
											</div>

											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Mobile no :-
													</h5>
													<h6 className="ms-2">{mobile}</h6>
												</Form.Group>
											</div>
										</div>
									</div>
								</div>

								<div className="row mt-5">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Web Site :-
													</h5>
													<h6 className="ms-2">{website}</h6>
												</Form.Group>
											</div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Linked in :-
													</h5>
													<h6 className="ms-2">{linkedin}</h6>
												</Form.Group>
											</div>

											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Other :-
													</h5>
													<h6 className="ms-2">{other}</h6>
												</Form.Group>
											</div>
										</div>
									</div>

									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Facebook :-
													</h5>
													<h6 className="ms-2">{facebook}</h6>
												</Form.Group>
											</div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Instagram :-
													</h5>
													<h6 className="ms-2">{instagram}</h6>
												</Form.Group>
											</div>
										</div>
									</div>
								</div>

								<div className="row mt-5">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Copy Of id Card (Up to 5mb):-
													</h5>
													<h6 className="ms-2">file</h6>
												</Form.Group>
											</div>

											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Book Bank
													</h5>
													<h6 className="ms-2">file</h6>
												</Form.Group>
											</div>

											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														company:-
													</h5>
													<h6 className="ms-2">company</h6>
												</Form.Group>
											</div>

											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Bank Account:-
													</h5>
													<h6 className="ms-2">bank Account</h6>
												</Form.Group>
											</div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Domestic:-
													</h5>
													<h6 className="ms-2">domestic</h6>
												</Form.Group>
											</div>

											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Rate of QR Code:-
													</h5>
													<h6 className="ms-2">Qr Code</h6>
												</Form.Group>
											</div>
										</div>
									</div>

									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Logo :-
													</h5>
													<h6 className="ms-2">file</h6>
												</Form.Group>
											</div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Other document:-
													</h5>
													<h6 className="ms-2">file</h6>
												</Form.Group>
											</div>

											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Bank :-
													</h5>
													<h6 className="ms-2">bank</h6>
												</Form.Group>
											</div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Rnf Code :-
													</h5>
													<h6 className="ms-2">Rnf Code</h6>
												</Form.Group>
											</div>

											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														inter :-
													</h5>
													<h6 className="ms-2">inter </h6>
												</Form.Group>
											</div>
											<div className="form-group">
												<Form.Group className=" d-flex">
													<h5
														htmlFor="exampleInputUsername1"
														className="text-primary">
														Rate Of Bar Code :-
													</h5>
													<h6 className="ms-2">Bar Code</h6>
												</Form.Group>
											</div>
										</div>
									</div>
								</div>
								{/* <button type="button" className={`btn ${styles.userBtn}`}>Finish</button> */}
								{/* <button type="button" className={`btn ${styles.userBtn}`}>
									Finish
								</button> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetMerchantProfile;
