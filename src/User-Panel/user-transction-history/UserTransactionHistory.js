import React from "react";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../NewSideBar/UserSideBar";
import "./user-transaction-History.css";
const UserDeposits = () => {
	return (
		<>
			<div className="row">
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
					<h3 className="tranaction-heading ms-2 my-4">Transaction History</h3>
					<div className="container-fluid pe-5">
						<div className="card shadow-lg" style={{ width: "100%" }}>
							<div
								className="card-body"
								style={{ minWidth: "-webkit-fill-available" }}>
								<div className="row">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="user-tranaction-inputs">
											<FaSearch className="fasearch" />
											<input
												type="text"
												className="form-control user-tranaction-inputs-design"
												placeholder="keywords"
											/>
										</div>
										<div className="user-tranaction-inputs">
											<select className="form-select user-tranaction-inputs-design">
												<option selected>Merchant</option>
												<option value="1">Mr.</option>
												<option value="2">Mrs.</option>
											</select>
										</div>
										<div className="user-tranaction-inputs">
											<input
												type="date"
												className="form-control user-tranaction-inputs-design"
												placeholder="info@gmail.com"
											/>
										</div>
										<div className="user-tranaction-inputs">
											<button className="btn btn-tranaction">Clear</button>
										</div>
									</div>

									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="user-tranaction-inputs">
											<select className="form-select user-tranaction-inputs-design">
												<option selected>All Channel</option>
												<option value="1">Mr.</option>
												<option value="2">Mrs.</option>
											</select>
										</div>
										<div className="user-tranaction-inputs">
											<select className="form-select user-tranaction-inputs-design">
												<option selected>Trans Status</option>
												<option value="1">Success</option>
												<option value="2">Failed</option>
											</select>
										</div>
										<div className="user-tranaction-inputs">
											<input
												type="date"
												className="form-control user-tranaction-inputs-design"
												placeholder="info@gmail.com"
											/>
										</div>
										<div className="user-tranaction-inputs">
											<button className="btn btn-tranaction">Search</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card">
							<div
								className="card-body"
								style={{ minWidth: "-webkit-fill-available" }}>
								<table class="table">
									<thead className="dashboard-table-heading">
										<tr>
											<th scope="col">Trans.Id</th>
											<th scope="col">Date</th>
											<th scope="col">Merchant</th>
											<th scope="col">order No.</th>
											<th scope="col">payment Channel</th>
											<th scope="col">Amount</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
										<tr className="user-table-data">
											<th scope="row" className="trans-id">
												XYZ Store ID
											</th>
											<td>June 4,2020</td>
											<td>cashback</td>
											<td>cashback</td>
											<td>completed</td>
											<td>+$5,553</td>
											<td>
												<button className="btn btn-success">play</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserDeposits;
