import React from "react";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/SideBar/Sidebar";
import "./user-deposits.css";
const UserDeposits = () => {
	return (
		<>
			<div className="row">
				<div className="col-2" style={{ width: "100%", position: "absolute" }}>
					<Sidebar />
				</div>
				<div
					className="col-10"
					style={{
						position: "absolute",
						marginLeft: "19rem",
						marginTop: "7rem",
					}}>
					<div className="card shadow-lg" style={{ width: "80%" }}>
						<div
							className="card-body"
							style={{ minWidth: "-webkit-fill-available" }}>
							<div className="row">
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="user-deposits-inputs">
										<FaSearch className="fasearch" />
										<input
											type="text"
											className="form-control user-deposits-inputs-design"
											placeholder="keywords"
										/>
									</div>
									<div className="user-deposits-inputs">
										<select className="form-select user-deposits-inputs-design">
											<option selected>Merchant</option>
											<option value="1">Mr.</option>
											<option value="2">Mrs.</option>
										</select>
									</div>
									<div className="user-deposits-inputs">
										<input
											type="date"
											className="form-control user-deposits-inputs-design"
											placeholder="info@gmail.com"
										/>
									</div>
									<div className="user-deposits-inputs">
										<button className="btn btn-deposit">Clear</button>
									</div>
								</div>

								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="user-deposits-inputs">
										<select className="form-select user-deposits-inputs-design">
											<option selected>All Channel</option>
											<option value="1">Mr.</option>
											<option value="2">Mrs.</option>
										</select>
									</div>
									<div className="user-deposits-inputs">
										<select className="form-select user-deposits-inputs-design">
											<option selected>Trans Status</option>
											<option value="1">Success</option>
											<option value="2">Failed</option>
										</select>
									</div>
									<div className="user-deposits-inputs">
										<input
											type="date"
											className="form-control user-deposits-inputs-design"
											placeholder="info@gmail.com"
										/>
									</div>
									<div className="user-deposits-inputs">
										<button className="btn btn-deposit">Search</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br></br>
					<div className="card" style={{ width: "80%" }}>
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
		</>
	);
};

export default UserDeposits;
