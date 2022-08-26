import React from "react";
import { BsWallet } from "react-icons/bs";
// import Navbar from "../NewSideBar/UserSideBar";
import Sidebar from "../NewSideBar/UserSideBar";
import "./user-dashboard.css";

const UserDashboard = () => {
	return (
		<>
			<div className={"row"}>
				<div className="col-xl-3 col-xxl-2 col-2 " style={{ width: "100%" }}>
					<Sidebar />
				</div>
				<div
					className="col-xl-9 col-xxl-10 col-10"
					style={{
						position: "absolute",
						marginLeft: "19rem",
						marginTop: "7rem",
					}}>
					{/* <Navbar className="usernavbarside mb-5" /> */}

					<h1 classN1me="first-dashboard-heading my-5">Dashboard</h1>

					<div className="row">
						<div className=" col-6 card first-dashboard-card shadow-lg">
							<div className="card-body first-user-dashboard-body">
								<div class="d-flex justify-content-around">
									<div className="first-user-dashboard-wallet">
										<BsWallet />
									</div>
									<div class="first-dashboart-text">
										<h6>My Wallet</h6>
										<p>$ 1144.05</p>
										<button className="btn btn-success">withdraw</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-6 card second-dashboard-card shadow-lg">
							<div className="card-body second-dashboard-body">
								<div class="d-flex justify-content-around">
									<div className="second-dashboard-wallet">
										<BsWallet />
									</div>
									<div class="second-dashboard-text">
										<h6>
											Merchant <br></br>Deposit
										</h6>
										<p>$ 1144.05</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* transaction table */}
					<div className="mt-5">
						<div className="transaction-heading">
							<h3>transaction Summary</h3>
						</div>
						<div
							className="card tranasction-body shadow-lg"
							style={{ width: "100%" }}>
							<div
								className="card-body "
								style={{ minWidth: "-webkit-fill-available" }}>
								<div className="d-flex justify-content-between mb-2">
									<form className="trans-form" id="transform">
										<input
											className="form-control trans-form"
											id="transforminput"
											type="search"
											placeholder="Search..."
										/>
									</form>
									<div>
										<div class="dropdown">
											<span className="dropdown-space">show</span>

											<button
												class="btn btn-secondary dropdown-toggle transaction-dropdown-toggle"
												type="button"
												data-bs-toggle="dropdown"
												aria-expanded="false">
												10
											</button>
											<ul className="dropdown-menu">
												<li>
													<a className="dropdown-item" href="/">
														Action
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="/">
														Another action
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="/">
														Something else here
													</a>
												</li>
											</ul>
											<span className="dropdown-space">
												Entries | Showing 1 to 1 of 1 entries
											</span>
										</div>
									</div>
									<nav aria-label="...">
										<ul className="pagination-user d-flex pagination-top">
											<li className="page-item transaction-pagination-user">
												<a
													className="page-link"
													href="/"
													tabindex="-1"
													aria-disabled="true">
													Previous
												</a>
											</li>
											<li className="page-item active transaction-pagination-user">
												<a
													className="page-link transaction-pagination-user-number"
													href="/">
													1
												</a>
											</li>
											<li className="page-item transaction-pagination-user">
												<a className="page-link" href="/">
													Next
												</a>
											</li>
										</ul>
									</nav>
								</div>
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
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</>
	);
};

export default UserDashboard;
