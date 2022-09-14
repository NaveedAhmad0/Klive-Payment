// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import styles from "./GetUserProfile.css";

// const GetUserProfile = () => {
// 	const [email, setEmail] = useState("");
// 	const [name, setName] = useState("");
// 	const [surName, setSurName] = useState("");
// 	const [mobile, setMobile] = useState("");
// 	const [address, setAddress] = useState("");
// 	const [province, setProvince] = useState("");
// 	const [district, setDistrict] = useState("");
// 	const [subDistrict, setSubDistrict] = useState("");
// 	const [pincode, setPincode] = useState("");
// 	const [merchantId, setmerchantId] = useState(0);
// 	const [merchantName, setmerchantName] = useState("");
// 	// const { email, mobile } = values;

// 	useEffect(() => {
// 		axios
// 			.get(
// 				// "https://backend.klivepay.com/api/admin/get-profile?email=admin%40mail.com"
// 				"https://backend.klivepay.com/api/merchant/get-profile?email=merchant%40mail.com"
// 			)

// 			.then((res) => {
// 				// setEmail(res.data.admin.email);
// 				setMobile(res.data.admin.mobile);
// 				setName(res.data.admin.name);
// 				setSurName(res.data.admin.surName);
// 				setAddress(res.data.admin.address);
// 				setProvince(res.data.admin.province);
// 				setDistrict(res.data.admin.district);
// 				setSubDistrict(res.data.admin.subDistrict);
// 				setPincode(res.data.admin.pincode);
// 				setmerchantId(res.data.merchant.merchantId);
// 				setmerchantName(res.data.merchant.merchantName);
// 				console.log("DATA ----> ", res.data.merchant);
// 			});
// 	}, []);

// 	return (
// 		<div className="col-12 grid-margin">
// 			<h4 className="card-title">Personal admin Information</h4>

// 			<div className="card">
// 				<div className="row flex-column mt-5 mx-auto">
// 					<img
// 						className="img-lg mx-auto rounded-circle"
// 						src={require("../../../assets/images/faces/face8.jpg")}
// 						alt="Profile"
// 					/>
// 					<div className="mt-2 mx-auto">
// 						<p>
// 							Merchant Code: <span className="text-primary">M010303</span>
// 						</p>
// 						<p className="mx-auto">
// 							Email: <span className="text-primary">{email}</span>
// 						</p>
// 					</div>
// 				</div>

// 				<div className="col-12 grid-margin">
// 					<h4 className="card-title">user Personal Information</h4>

// 					<div className="card">
// 						<div className={`card-body ${styles.usercardbody}`}>
// 							<form className="form-sample">
// 								{/* <h4 className={`text-center ${styles.userHeading}`}>Profile</h4> */}
// 								<div className="row mt-5">
// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<form>
// 											<div className="form-group">
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Merchant ID :-
// 													</h5>
// 													<h6 className="ms-2">{merchantId}</h6>
// 												</Form.Group>
// 											</div>
// 											<div className="form-group">
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Merchant Name :-
// 													</h5>
// 													<h6 className="ms-2">naveed</h6>
// 												</Form.Group>
// 											</div>
// 										</form>
// 									</div>

// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<form>
// 											<div className="form-group">
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Merchant Name English:-
// 													</h5>
// 													<h6 className="ms-2">Merchant</h6>
// 												</Form.Group>
// 											</div>
// 											<div className="form-group">
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Email Address :-
// 													</h5>
// 													<h6 className="ms-2">merchant@mail.com</h6>
// 												</Form.Group>
// 											</div>
// 										</form>
// 									</div>
// 								</div>

// 								<div class="form-group">
// 									<Form.Group className=" d-flex">
// 										<h5
// 											htmlFor="exampleInputUsername1"
// 											className="text-primary">
// 											Initial Shop :-
// 										</h5>
// 										<h6 className="ms-2">abcdef</h6>
// 									</Form.Group>
// 								</div>

// 								<div className="row">
// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<div className="form-group">
// 											<Form.Group className=" d-flex">
// 												<h5
// 													htmlFor="exampleInputUsername1"
// 													className="text-primary">
// 													First Name :-
// 												</h5>
// 												<h6 className="ms-2">Naveed</h6>
// 											</Form.Group>
// 										</div>
// 									</div>

// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<div className="form-group">
// 											<Form.Group className=" d-flex">
// 												<h5
// 													htmlFor="exampleInputUsername1"
// 													className="text-primary">
// 													Email :-
// 												</h5>
// 												<h6 className="ms-2">surName</h6>
// 											</Form.Group>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="row">
// 									<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
// 										<div className="form-group">
// 											<Form.Group className=" d-flex">
// 												<h5
// 													htmlFor="exampleInputUsername1"
// 													className="text-primary">
// 													Year of Birth :-
// 												</h5>
// 												<h6 className="ms-2">19.09.2000</h6>
// 											</Form.Group>
// 										</div>
// 									</div>

// 									<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
// 										<div className="form-group">
// 											<Form.Group className=" d-flex">
// 												<h5
// 													htmlFor="exampleInputUsername1"
// 													className="text-primary">
// 													Month Of Birth :-
// 												</h5>
// 												<h6 className="ms-2">Sept</h6>
// 											</Form.Group>
// 										</div>
// 									</div>

// 									<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
// 										<div className="form-group">
// 											<Form.Group className=" d-flex">
// 												<h5
// 													htmlFor="exampleInputUsername1"
// 													className="text-primary">
// 													Day Of Birth:-
// 												</h5>
// 												<h6 className="ms-2">19</h6>
// 											</Form.Group>
// 										</div>
// 									</div>
// 								</div>

// 								<div class="form-group">
// 									<Form.Group className=" d-flex">
// 										<h5
// 											htmlFor="exampleInputUsername1"
// 											className="text-primary">
// 											Contact Number :-
// 										</h5>
// 										<h6 className="ms-2">9076567920</h6>
// 									</Form.Group>
// 								</div>

// 								<div class="form-group">
// 									<Form.Group className=" d-flex">
// 										<h5
// 											htmlFor="exampleInputUsername1"
// 											className="text-primary">
// 											Address :-
// 										</h5>
// 										<h6 className="ms-2">abcdef</h6>
// 									</Form.Group>
// 								</div>

// 								<div className="row mt-5">
// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<form>
// 											<Form.Group className=" d-flex">
// 												<h5
// 													htmlFor="exampleInputUsername1"
// 													className="text-primary">
// 													Provience :-
// 												</h5>
// 												<h6 className="ms-2">Provience</h6>
// 											</Form.Group>

// 											<Form.Group className=" d-flex">
// 												<h5
// 													htmlFor="exampleInputUsername1"
// 													className="text-primary">
// 													Sub Division :-
// 												</h5>
// 												<h6 className="ms-2">Sub Division</h6>
// 											</Form.Group>
// 										</form>
// 									</div>

// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<form>
// 											<div className="form-group">
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														District :-
// 													</h5>
// 													<h6 className="ms-2">Chennai</h6>
// 												</Form.Group>
// 											</div>

// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>mobile no</label>
//                         <input
//                           type="number"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="123456"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Mobile no :-
// 													</h5>
// 													<h6 className="ms-2">123456</h6>
// 												</Form.Group>
// 											</div>
// 										</form>
// 									</div>
// 								</div>

// 								{/* <div className="row">
// 						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
// 							<label className={styles.userLabel}> shop type</label>
// 							<div style={{display:"flex"}}>
// 								<div className={`form-check form-check-inline`}

// 								>
// 								<input className="form-check-input" type="radio" name="shop" value="social"checked/>
// 									<label className={styles.userLabel}>social</label>
// 								</div>
// 								<div class="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="shop" value="website"/>
// 									<label className={styles.userLabel}>website</label>
// 								</div>
// 							</div>

// 							<label className={styles.userLabel}>live payment</label>
// 							<div style={{display:"flex"}}>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="livepayment" value="yes"checked/>
// 									<label className={styles.userLabel}>yes</label>
// 								</div>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="livepayment" value="no"/>
// 									<label className={styles.userLabel}>no</label>
// 								</div>
// 							</div>

// 							<label className={styles.userLabel}>shopee pay</label>
// 							<div style={{display:"flex"}}>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="shopeepay" value="yes" checked/>
// 									<label className={styles.userLabel}>yes</label>
// 								</div>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="shopeepay" value="no"/>
// 									<label className={styles.userLabel}>no</label>
// 								</div>
// 							</div>

// 						</div>
// 						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
// 							<label className={styles.userLabel}>credit card</label>
// 							<div style={{display:"flex"}}>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="creditcard" value="yes" checked/>
// 									<label className={styles.userLabel}>yes</label>
// 								</div>
// 								<div class="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="creditcard" value="no"/>
// 									<label className={styles.userLabel}>no</label>
// 								</div>
// 							</div>

// 							<label className={styles.userLabel}>mobile banking</label>
// 							<div style={{display:"flex"}}>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="mbank" value="yes"checked/>
// 									<label className={styles.userLabel}>yes</label>
// 								</div>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="mbank" value="no"/>
// 									<label className={styles.userLabel}>no</label>
// 								</div>
// 							</div>

// 							<label className={styles.userLabel}>alone</label>
// 							<div style={{display:"flex"}}>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="alone" value="yes" checked/>
// 									<label className={styles.userLabel}>yes</label>
// 								</div>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="alone" value="no"/>
// 									<label className={styles.userLabel}>no</label>
// 								</div>
// 							</div>

// 						</div>
// 						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
// 							<label className={styles.userLabel}>we chat payment</label>
// 							<div style={{display:"flex"}}>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="wechat" value="yes" checked/>
// 									<label className={styles.userLabel}>yes</label>
// 								</div>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="wechat" value="no"/>
// 									<label className={styles.userLabel}>no</label>
// 								</div>
// 							</div>

// 							<label className={styles.userLabel}>true wallet</label>
// 							<div style={{display:"flex"}}>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="twallet" value="yes"checked/>
// 									<label className={styles.userLabel}>yes</label>
// 								</div>
// 								<div className="form-check form-check-inline">
// 									<input className="form-check-input" type="radio" name="twallet" value="no"/>
// 									<label className={styles.userLabel}>no</label>
// 								</div>
// 							</div>
// 						</div>
// 					</div> */}

// 								<div className="row mt-5">
// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<form>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>web site</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="www.abc.com"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Web Site :-
// 													</h5>
// 													<h6 className="ms-2">www.abc.com</h6>
// 												</Form.Group>
// 											</div>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>linked in</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="Linkedin/abc"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Linked in :-
// 													</h5>
// 													<h6 className="ms-2">linked in</h6>
// 												</Form.Group>
// 											</div>

// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>other</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="Other"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Other :-
// 													</h5>
// 													<h6 className="ms-2">other</h6>
// 												</Form.Group>
// 											</div>
// 										</form>
// 									</div>

// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<form>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>facebook</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="facebook/abc"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Facebook :-
// 													</h5>
// 													<h6 className="ms-2">facebook/abc</h6>
// 												</Form.Group>
// 											</div>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>instagram</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="instagram/abc"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Instagram :-
// 													</h5>
// 													<h6 className="ms-2">instagram</h6>
// 												</Form.Group>
// 											</div>
// 										</form>
// 									</div>
// 								</div>

// 								<div className="row mt-5">
// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<form>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>
//                           copy of id card (Up to 5mb)
//                         </label>
//                         <input
//                           type="file"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="file"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Copy Of id Card (Up to 5mb):-
// 													</h5>
// 													<h6 className="ms-2">file</h6>
// 												</Form.Group>
// 											</div>

// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>book bank</label>
//                         <input
//                           type="file"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="file"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Book Bank
// 													</h5>
// 													<h6 className="ms-2">file</h6>
// 												</Form.Group>
// 											</div>

// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>company</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="company"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														company:-
// 													</h5>
// 													<h6 className="ms-2">company</h6>
// 												</Form.Group>
// 											</div>

// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>bank account</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="bank account"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Bank Account:-
// 													</h5>
// 													<h6 className="ms-2">bank Account</h6>
// 												</Form.Group>
// 											</div>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>domestic</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="Domestic"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Domestic:-
// 													</h5>
// 													<h6 className="ms-2">domestic</h6>
// 												</Form.Group>
// 											</div>

// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>
//                           rate of QR code
//                         </label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="QR code"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Rate of QR Code:-
// 													</h5>
// 													<h6 className="ms-2">Qr Code</h6>
// 												</Form.Group>
// 											</div>
// 										</form>
// 									</div>

// 									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
// 										<form>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>logo</label>
//                         <input
//                           type="file"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="file"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Logo :-
// 													</h5>
// 													<h6 className="ms-2">file</h6>
// 												</Form.Group>
// 											</div>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>
//                           other document
//                         </label>
//                         <input
//                           type="file"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="file"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Other document:-
// 													</h5>
// 													<h6 className="ms-2">file</h6>
// 												</Form.Group>
// 											</div>

// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>Bank</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="bank"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Bank :-
// 													</h5>
// 													<h6 className="ms-2">bank</h6>
// 												</Form.Group>
// 											</div>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>rnf code</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="Rnf Code"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Rnf Code :-
// 													</h5>
// 													<h6 className="ms-2">Rnf Code</h6>
// 												</Form.Group>
// 											</div>

// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>inter</label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="Inter"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														inter :-
// 													</h5>
// 													<h6 className="ms-2">inter </h6>
// 												</Form.Group>
// 											</div>
// 											<div className="form-group">
// 												{/* <label className={styles.userLabel}>
//                           rate of bar code
//                         </label>
//                         <input
//                           type="text"
//                           className={`form-control ${styles.userInputs}`}
//                           placeholder="Bar code"
//                         /> */}
// 												<Form.Group className=" d-flex">
// 													<h5
// 														htmlFor="exampleInputUsername1"
// 														className="text-primary">
// 														Rate Of Bar Code :-
// 													</h5>
// 													<h6 className="ms-2">Bar Code</h6>
// 												</Form.Group>
// 											</div>
// 										</form>
// 									</div>
// 								</div>
// 								{/* <button type="button" className={`btn ${styles.userBtn}`}>Finish</button> */}
// 								<button type="button" className={`btn ${styles.userBtn}`}>
// 									Finish
// 								</button>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default GetUserProfile;
