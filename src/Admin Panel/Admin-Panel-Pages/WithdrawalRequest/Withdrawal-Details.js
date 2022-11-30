import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../../backend";
import ClipLoader from "react-spinners/ClipLoader";

const WithdrawalDetails = () => {
	const location = useLocation();
	const [PaymentStatus, setPaymentStatus] = useState("");
	const [loading, setLoading] = useState(true);

	const ReferenceId = location.state.ReferenceId;
	const [showData, setShowData] = useState([
		{
			id: 0,
			ReferalNumber: "",
			amount: 0,
			WithdrawCharges: 0,
			FinalAmount: 0,
			merchantId: "",
			Name: "",
			AccountNumber: 0,
			IFSCcode: "",
			BankName: "",
			comments: "",
			status: false,
		},
	]);
	//Payment Status
	async function onSubmit(event) {
		event.preventDefault();
		console.log("sdfsdf", PaymentStatus);
		try {
			const response = await axios
				.post(
					`${API}/admin/PaymentStatus?ReferenceId=${showData.ReferalNumber}`,
					JSON.stringify({
						PaymentStatus,
					}),
					{
						headers: { "Content-Type": "application/json" },
						// withCredentials: true,
					}
				)
				.then((res) => {
					setPaymentStatus("");
					console.log(res.data);
					if (res.status === 200) {
						alert("payment Added Succesfully");
					}
				});
		} catch (err) {
			alert("something went wrong");
			console.log(err);
		}
	}

	// Fetch Data

	useEffect(() => {
		console.log("ReferenceId", ReferenceId);
		axios
			.get(`https://backend.klivepay.com/api/admin/withdraw-request`)
			.then((res) => {
				console.log("DATA", res);
				for (let i = 0; i < res.data.length; i++) {
					setShowData({
						id: res.data[i].id,
						ReferalNumber: res.data[i].ReferalNumber,
						merchantId: res.data[i].merchantId,
						amount: res.data[i].amount,
						WithdrawCharges: res.data[i].WithdrawCharges,
						FinalAmount: res.data[i].FinalAmount,
						Name: res.data[i].BankDetails.Name,
						AccountNumber: res.data[i].BankDetails.AccountNumber,
						IFSCcode: res.data[i].BankDetails.IFSCcode,
						BankName: res.data[i].BankDetails.BankName,
						comments: res.data[i].comments,
						status: res.data[i].status === true ? "completed" : "pending",

						// notes: res.data[i].note,
					});
					console.log("DATA IS ", res.data[i].status);
				}
				setLoading(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			});
	}, []);

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<h2 className="text-primary">Request Details</h2>
					{loading ? (
						<div className="row" style={{ height: "500px" }}>
							<div className="col-12 text-center my-auto">
								<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
							</div>
						</div>
					) : (
						<div className="col-md-12 grid-margin">
							<div className="card">
								<div className="card-body">
									<div className="container">
										<table class="table table-striped table-bordered">
											<tbody>
												<tr>
													<td>Id</td>
													<td>{showData.id}</td>
												</tr>
												<tr>
													<td>ReferalNumber</td>
													<td>{showData.ReferalNumber}</td>
												</tr>
												<tr>
													<td>merchantId</td>
													<td>{showData.merchantId}</td>
												</tr>
												<tr>
													<td>amount</td>
													<td>{showData.amount}</td>
												</tr>
												<tr>
													<td>WithdrawCharges</td>
													<td>{showData.WithdrawCharges}</td>
												</tr>
												<tr>
													<td>FinalAmount</td>
													<td>{showData.FinalAmount}</td>
												</tr>
												<tr>
													<td>Name</td>
													<td>{showData.Name}</td>
												</tr>
												<tr>
													<td>AccountNumber</td>
													<td>{showData.AccountNumber}</td>
												</tr>
												<tr>
													<td>IFSCcode</td>
													<td>{showData.IFSCcode}</td>
												</tr>
												<tr>
													<td>amount</td>
													<td>{showData.amount}</td>
												</tr>
												<tr>
													<td>BankName</td>
													<td>{showData.BankName}</td>
												</tr>
												<tr>
													<td>comments</td>
													<td>{showData.comments}</td>
												</tr>
												<tr>
													<td>status</td>
													<td>{`${showData.status}`}</td>
												</tr>
											</tbody>
										</table>
										<br></br>
									</div>

									{/* <div className="row my-3">
									<div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 d-flex grid-margin">
										<input
											type="text"
											onChange={(e) => setTransactionId(e.target.value)}
											value={TransactionId}
										/>
										<button
											className="btn btn-success btn-lg rounded-pill"
											onClick={onSubmit}>
											Request Withdrawal
										</button>
									</div>
								</div> */}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="col-md-12">
				<div className="row">
					<h5 className="text-primary">Confirm Payment Status</h5>
					<div className="col-md-6 grid-margin">
						<div className="card">
							<div className="card-body">
								<div className="container">
									<div className="form-group">
										<label for="inputPassword2" className="">
											Payment Status
										</label>
										<select
											value={PaymentStatus}
											onChange={(e) => setPaymentStatus(e.target.value)}>
											{" "}
											<option>Select</option>
											<option value="completed">Complete</option>
											<option value="reject">Reject</option>
										</select>

										{/* <input
											type="text"
											className="form-control"
											placeholder="Txn Id"
											id="staticEmail2"
											onChange={(e) => setPaymentStatus(e.target.value)}
											value={PaymentStatus}
										/> */}
									</div>
									<button className="btn btn-primary" onClick={onSubmit}>
										Confirm
									</button>
								</div>

								{/* <div className="row my-3">
									<div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 d-flex grid-margin">
										<input
											type="text"
											onChange={(e) => setTransactionId(e.target.value)}
											value={TransactionId}
										/>
										<button
											className="btn btn-success btn-lg rounded-pill"
											onClick={onSubmit}>
											Request Withdrawal
										</button>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WithdrawalDetails;
