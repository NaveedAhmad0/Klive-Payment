import axios from "axios";
import Select from "react-select";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import API from "../../../backend";

const AssignMerchToUser = () => {
	const [merchList, setMerchList] = useState([]);
	const [select, setSelect] = useState(null);
	const [userEmail, setUserEmail] = useState([]);
	const [merchantEmail, setmerchantEmail] = useState([]);
	useEffect(() => {
		axios.get(`${API}/admin/get-merchant-list`).then((res) => {
			const sample = [];
			for (let i = 0; i < res.data.length; i++) {
				sample.push({
					email: res.data[i].email,
				});
			}
			setMerchList(sample);
			console.log("sample", sample);
		});
	}, []);
	console.log(merchList);
	const handleChange = (e) => {
		// let options = e.target.value;
		// let value = [];
		// for (let i = 0; i < options.length; i++) {
		// 	if (options[i].selected) {
		// 		await value.push(options[i].value);
		// 	}
		// 	console.log(options[i].selected);
		// }
		setmerchantEmail(e.target.value);
		// console.log("sent", options, value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		try {
			axios
				.patch(
					`${API}/admin/assign-merchnat-to-user`,
					JSON.stringify({ merchantEmail, userEmail }),
					{
						headers: { "Content-Type": "application/json" },
						// withCredentials: true,
					}
				)
				.then((res) => {
					console.log(res.data);
					alert("Asssigned sucessfully!");
				});
		} catch (error) {
			alert("something went wrong!");
			console.log(error);
		}
		console.log("merchantEmail", merchantEmail);
		console.log("merch", merchList);
	};

	return (
		<div>
			<div className="col-12 grid-margin">
				<div className="card">
					<div className="card-body">
						<form className="form-sample">
							{/* <p className="card-description"> Personal info </p> */}
							<div className="row">
								<div className="col-md-6">
									<Form.Group className="row">
										<div className="col-sm-12">
											<Form.Control
												type="text"
												placeholder="Users Email"
												onChange={(e) => setUserEmail(e.target.value)}
												value={userEmail}
											/>
										</div>
									</Form.Group>
								</div>

								<div className="col-md-6">
									<Form.Group className="row">
										<div className="col-sm-12">
											<select
												// multiple
												aria-multiselectable
												multiselect-serach="true"
												value={merchantEmail}
												onChange={(e) => handleChange(e)}
												className="form-control "
												data-live-search="true">
												<option>Select Merchant</option>
												{merchList.length
													? merchList.map((item) => (
															<option value={item.email}>{item.email}</option>
													  ))
													: ""}
											</select>
										</div>
										{/* <DropdownMultiselect options={merchList} /> */}

										{/* <Select
											// isMulti={true}
											value={select}
											onChange={(e) => handleChange(e)}
											options={merchList}
										/> */}
									</Form.Group>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 mx-auto">
									<button
										onClick={onSubmit}
										className="btn btn-success btn-lg btn-block rounded-pill">
										Agree
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssignMerchToUser;
