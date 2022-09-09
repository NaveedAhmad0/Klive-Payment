import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./userprofile.module.css";
import { Form } from "react-bootstrap";

const UserProfile = () => {
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [surName, setSurName] = useState("");
	const [mobile, setMobile] = useState(1238192123);
	const [address, setAddress] = useState("");
	const [province, setProvince] = useState("");
	const [district, setDistrict] = useState("");
	const [subDivision, setSubDivision] = useState("");
	const [pincode, setPincode] = useState(112312);
	const [success, setSuccess] = useState(false);
	const [nullVal, setNullVal] = useState({
		personType: "null",
		InitialShop: "null",
		firstName: "null",
		yearOfBirth: "null",
		monthOfBirth: "null",
		dayOfBirth: "null",
		shopType: "null",
		creditCard: true,
		weChat: true,
		livePayment: true,
		mobileBanking: true,
		trueWallet: true,
		shopeePay: true,
		alone: true,
		website: "null",
		facebook: "null",
		linkedin: "null",
		instagram: "null",
		other: "null",
		company: "null",
		bank: "null",
		bankAccount: 0,
		rnfCode: "null",
		domestic: "null",
		inter: "null",
		rateQrCode: "null",
		rateBarCode: "null",
		copyOfId: "null",
		logo: "null",
		bankBook: "null",
		otherDocument: "null",
	});

	const {
		personType,
		InitialShop,
		firstName,
		yearOfBirth,
		monthOfBirth,
		dayOfBirth,
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
	} = nullVal;

	const handleChange = (event) => {
		setNullVal({
			...{
				personType,
				InitialShop,
				firstName,
				yearOfBirth,
				monthOfBirth,
				dayOfBirth,
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
			},
			[event.target.name]: event.target.value,
		});
	};

	async function onSubmit(event) {
		event.preventDefault();
		console.log(
			email,
			surName,
			mobile,
			address,
			province,
			district,
			subDivision,
			pincode
		);

		try {
			const response = await axios.patch(
				`https://backend.klivepay.com/api/user/update-profile?email=user%40mail.com`,
				JSON.stringify({
					userName,
					surName,
					firstName,
					mobile,
					address,
					province,
					district,
					subDivision,
					pincode,
					personType,
					InitialShop,
					yearOfBirth,
					monthOfBirth,
					dayOfBirth,
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
				}),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log("mail", email);

			console.log(JSON.stringify(response?.data));

			// const accessToken = response?.data?.accessToken;
			// localStorage.setItem("token", response?.data?.accessToken);
			// setEmail("");
			// setUserName("");
			// setSurname("");
			// setSurname("");
			// setSurname("");
			// setSurname("");
			// setMobile("");
			// setAddress("");
			// setProvince("");
			// setDistrict("");
			// setSubDivision("");
			// setZipCode("");
			setSuccess(true);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		if (success) {
			alert("Profile changed Succesfully!");
		}
	}, [success]);

	return (
		<div className="col-12 grid-margin">
			<h4 className="card-title">user Personal Information</h4>

			<div className="card">
				<div className={`card-body ${styles.usercardbody}`}>
					<h4 className={`text-center ${styles.userHeading}`}>Profile</h4>
					<div className="row mt-5">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>merchant ID</label>
									<input
										type="email"
										disabled
										className={`form-control ${styles.userInputs}`}
										placeholder="123456"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>merchant name</label>
									<input
										type="text"
										onChange={(e) => setUserName(e.target.value)}
										value={userName}
										className={`form-control ${styles.userInputs}`}
										placeholder="Email address"
									/>
								</div>
							</form>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>
										{" "}
										merchant name english
									</label>
									<input
										type="text"
										disabled
										className={`form-control ${styles.userInputs}`}
										placeholder="merchant name english"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>Email address</label>
									<input
										type="email"
										disabled
										className={`form-control ${styles.userInputs}`}
										placeholder="Email address"
									/>
								</div>
							</form>
						</div>
					</div>

					<label className={styles.userLabel}> person type</label>
					<div style={{ display: "flex" }}>
						<div class="form-check form-check-inline">
							<input
								disabled
								class="form-check-input"
								type="radio"
								name="person"
								value="individual"
								checked
							/>
							<label className={styles.userLabel}>individual</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="person"
								value="corporate"
							/>
							<label className={styles.userLabel}>corporate</label>
						</div>
					</div>
					<div class="form-group">
						<label className={styles.userLabel}>
							Intial shop(up to 10 characters)
						</label>
						<input
							type="email"
							name="InitialShop"
							onChange={(e) => handleChange(e)}
							value={InitialShop}
							className={`form-control ${styles.userInputs}`}
							placeholder="Abc"
						/>
					</div>

					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>first name</label>
								<input
									type="year"
									name="firstName"
									onChange={(e) => handleChange(e)}
									value={firstName}
									className={`form-control ${styles.userInputs}`}
									placeholder="first name"
								/>
							</div>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>sur name</label>
								<input
									type="text"
									onChange={(e) => setSurName(e.target.value)}
									value={surName}
									className={`form-control ${styles.userInputs}`}
									placeholder="surname"
								/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>year of birth</label>
								<input
									type="year"
									name="yearOfBirth"
									onChange={(e) => handleChange(e)}
									value={yearOfBirth}
									className={`form-control ${styles.userInputs}`}
									placeholder="first name"
								/>
							</div>
						</div>

						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>month of birth</label>
								<input
									type="month"
									name="monthOfBirth"
									onChange={(e) => handleChange(e)}
									value={monthOfBirth}
									className={`form-control ${styles.userInputs}`}
									placeholder="surname"
								/>
							</div>
						</div>

						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="form-group">
								<label className={styles.userLabel}>day of birth</label>
								<input
									type="day"
									name="dayOfBirth"
									onChange={(e) => handleChange(e)}
									value={dayOfBirth}
									className={`form-control ${styles.userInputs}`}
									placeholder="surname"
								/>
							</div>
						</div>
					</div>

					<div class="form-group">
						<label className={styles.userLabel}>contact number</label>
						<input
							type="number"
							onChange={(e) => setMobile(e.target.value)}
							value={mobile}
							className={`form-control ${styles.userInputs}`}
							placeholder="3333223"
						/>
					</div>

					<div class="form-group">
						<label className={styles.userLabel}>address</label>
						<input
							type="number"
							onChange={(e) => setAddress(e.target.value)}
							value={address}
							className={`form-control ${styles.userInputs}`}
							placeholder="Abc"
						/>
					</div>

					<div className="row mt-5">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>provience</label>
									<input
										type="email"
										onChange={(e) => setProvince(e.target.value)}
										value={province}
										className={`form-control ${styles.userInputs}`}
										placeholder="Provience"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>sub division</label>
									<input
										type="text"
										onChange={(e) => setSubDivision(e.target.value)}
										value={subDivision}
										className={`form-control ${styles.userInputs}`}
										placeholder="Sub Division"
									/>
								</div>
							</form>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>district</label>
									<input
										type="text"
										onChange={(e) => setDistrict(e.target.value)}
										value={district}
										className={`form-control ${styles.userInputs}`}
										placeholder="District"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>mobile no</label>
									<input
										type="number"
										disabled
										className={`form-control ${styles.userInputs}`}
										placeholder="123456"
									/>
								</div>
							</form>
						</div>
					</div>

					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<label className={styles.userLabel}> shop type</label>
							<div style={{ display: "flex" }}>
								<div className={`form-check form-check-inline`}>
									<input
										className="form-check-input"
										type="radio"
										disabled
										name="shop"
										value="social"
										checked
									/>
									<label className={styles.userLabel}>social</label>
								</div>
								<div class="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										disabled
										name="shop"
										value="website"
									/>
									<label className={styles.userLabel}>website</label>
								</div>
							</div>

							<label className={styles.userLabel}>live payment</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="livepayment"
										disabled
										value="yes"
										checked
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="livepayment"
										disabled
										value="no"
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>

							<label className={styles.userLabel}>shopee pay</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										disabled
										name="shopeepay"
										value="yes"
										checked
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="shopeepay"
										disabled
										value="no"
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<label className={styles.userLabel}>credit card</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										disabled
										name="creditcard"
										value="yes"
										checked
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div class="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										disabled
										name="creditcard"
										value="no"
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>

							<label className={styles.userLabel}>mobile banking</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										disabled
										name="mbank"
										value="yes"
										checked
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										disabled
										name="mbank"
										value="no"
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>

							<label className={styles.userLabel}>alone</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										disabled
										name="alone"
										value="yes"
										checked
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="alone"
										disabled
										value="no"
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<label className={styles.userLabel}>we chat payment</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										disabled
										name="wechat"
										value="yes"
										checked
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="wechat"
										disabled
										value="no"
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>

							<label className={styles.userLabel}>true wallet</label>
							<div style={{ display: "flex" }}>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="twallet"
										disabled
										value="yes"
										checked
									/>
									<label className={styles.userLabel}>yes</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="twallet"
										disabled
										value="no"
									/>
									<label className={styles.userLabel}>no</label>
								</div>
							</div>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>web site</label>
									<input
										type="text"
										name="website"
										onChange={(e) => handleChange(e)}
										value={website}
										className={`form-control ${styles.userInputs}`}
										placeholder="www.abc.com"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>linked in</label>
									<input
										type="text"
										name="linkedin"
										onChange={(e) => handleChange(e)}
										value={linkedin}
										className={`form-control ${styles.userInputs}`}
										placeholder="Linkedin/abc"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>other</label>
									<input
										type="text"
										name="other"
										onChange={(e) => handleChange(e)}
										value={other}
										className={`form-control ${styles.userInputs}`}
										placeholder="Other"
									/>
								</div>
							</form>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>facebook</label>
									<input
										type="text"
										name="facebook"
										onChange={(e) => handleChange(e)}
										value={facebook}
										className={`form-control ${styles.userInputs}`}
										placeholder="facebook/abc"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>instagram</label>
									<input
										type="text"
										name="instagram"
										onChange={(e) => handleChange(e)}
										value={instagram}
										className={`form-control ${styles.userInputs}`}
										placeholder="instagram/abc"
									/>
								</div>
							</form>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>
										copy of id card (Up to 5mb)
									</label>
									<input
										type="file"
										className={`form-control ${styles.userInputs}`}
										placeholder="file"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>book bank</label>
									<input
										type="file"
										className={`form-control ${styles.userInputs}`}
										placeholder="file"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>company</label>
									<input
										type="text"
										className={`form-control ${styles.userInputs}`}
										placeholder="company"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>bank account</label>
									<input
										type="text"
										className={`form-control ${styles.userInputs}`}
										placeholder="bank account"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>domestic</label>
									<input
										type="text"
										className={`form-control ${styles.userInputs}`}
										placeholder="Domestic"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>rate of QR code</label>
									<input
										type="text"
										className={`form-control ${styles.userInputs}`}
										placeholder="QR code"
									/>
								</div>
							</form>
						</div>

						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
							<form>
								<div className="form-group">
									<label className={styles.userLabel}>logo</label>
									<input
										type="file"
										className={`form-control ${styles.userInputs}`}
										placeholder="file"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>other document</label>
									<input
										type="file"
										className={`form-control ${styles.userInputs}`}
										placeholder="file"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>Bank</label>
									<input
										type="text"
										className={`form-control ${styles.userInputs}`}
										placeholder="bank"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>rnf code</label>
									<input
										type="text"
										className={`form-control ${styles.userInputs}`}
										placeholder="Rnf Code"
									/>
								</div>

								<div className="form-group">
									<label className={styles.userLabel}>inter</label>
									<input
										type="text"
										className={`form-control ${styles.userInputs}`}
										placeholder="Inter"
									/>
								</div>
								<div className="form-group">
									<label className={styles.userLabel}>rate of bar code</label>
									<input
										type="text"
										className={`form-control ${styles.userInputs}`}
										placeholder="Bar code"
									/>
								</div>
							</form>
						</div>
					</div>
					{/* <button type="button" className={`btn ${styles.userBtn}`}>Finish</button> */}
					<button
						type="button"
						onClick={(event) => onSubmit(event)}
						className={`btn ${styles.userBtn}`}>
						Finish
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
