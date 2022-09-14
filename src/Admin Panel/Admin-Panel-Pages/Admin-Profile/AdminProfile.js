import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const AdminProfile = () => {
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [surName, setSurName] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");
	const [province, setProvince] = useState("");
	const [district, setDistrict] = useState("");
	const [subdistrict, setSubDistrict] = useState("");
	const [pincode, setPincode] = useState("");
	const [success, setSuccess] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();
		console.log(
			email,
			surName,
			mobile,
			address,
			province,
			district,
			subdistrict,
			pincode
		);

		try {
			const response = await axios.patch(
				`https://backend.klivepay.com/api/admin/update-profile?email=admin%40mail.com`,
				JSON.stringify({
					userName,
					surName,
					mobile,
					address,
					province,
					district,
					subdistrict,
					pincode,
				}),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log("mail", email);

			console.log(JSON.stringify(response?.data));
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
							Email: <span className="text-primary">info@gmail.com</span>
						</p>
					</div>
				</div>
				<div className="card-body">
					<form className="form-sample">
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className="row">
									<label htmlFor="exampleInputUsername1">System Username</label>
									<Form.Control
										type="text"
										id="exampleInputUsername1"
										onChange={(e) => setUserName(e.target.value)}
										value={userName}
										placeholder="info@gmilail.com"
										size="lg"
									/>
								</Form.Group>
							</div>
							{/* <div className="col-md-2"></div> */}
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Surname</label>
									<Form.Control
										type="text"
										id="exampleInputUsername1"
										onChange={(e) => setSurName(e.target.value)}
										value={surName}
										placeholder="info@gmilail.com"
										size="lg"
									/>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className="row">
									<label htmlFor="exampleInputUsername1">
										Contact Phone Number
									</label>
									<Form.Control
										type="text"
										id="exampleInputUsername1"
										onChange={(e) => setMobile(parseInt(e.target.value))}
										value={mobile}
										placeholder="info@gmilail.com"
										// size="lg"
									/>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group className="row">
									<label htmlFor="exampleInputUsername1">Address</label>
									<Form.Control
										type="text"
										onChange={(e) => setAddress(e.target.value)}
										value={address}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5 ">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Province</label>
									<Form.Control
										type="text"
										onChange={(e) => setProvince(e.target.value)}
										value={province}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">District/District</label>
									<Form.Control
										type="text"
										onChange={(e) => setDistrict(e.target.value)}
										value={district}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Sub-Division</label>
									<Form.Control
										type="text"
										onChange={(e) => setSubDistrict(e.target.value)}
										value={subdistrict}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Zip Code</label>
									<Form.Control
										type="text"
										onChange={(e) => setPincode(e.target.value)}
										value={pincode}
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
						</div>
						<div className="row ">
							<div className="mx-auto col-md-11">
								<button
									onClick={(event) => onSubmit(event)}
									className="btn btn-success btn-lg btn-block rounded-pill">
									Agree
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminProfile;
