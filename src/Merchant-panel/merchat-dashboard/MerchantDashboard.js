import React from "react";
import { BsWallet } from "react-icons/bs";
import MerchantSidebar from "../../components/merchant-sidebar/MerchantSidebar";
import "./merchant-dashboard.css";

const MerchantDashboard = () => {
	return (
		<>
			<div className="row">
				<div
					className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12"
					style={{ width: "100%" }}>
					<MerchantSidebar />
				</div>
				<div
					className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12"
					style={{
						position: "absolute",
						marginLeft: "19rem",
						marginTop: "7rem",
					}}>
					<h3 className="first-dashboard-heading">dashboard</h3>

					<div className="row mb-2 pe-5" style={{ width: "100%" }}>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
							<div className="card first-merchant-card">
								<div
									className="card-body first-merchant-card-body"
									style={{
										minWidth: "-webkit-fill-available",
										maxWidth: "max-content",
									}}>
									<div class="d-flex justify-content-around first-merchant-dashboard-design">
										<div className="first-merchant-dashboard-wallet">
											<BsWallet />
										</div>
										<div className="first-merchant-dashboard-heading">
											<h6 className="merchant-wallet">Main Account</h6>
											<p>$ 1144.05</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
							<div className="card first-merchant-card">
								<div
									className="card-body first-merchant-card-body"
									style={{
										minWidth: "-webkit-fill-available",
										maxWidth: "max-content",
									}}>
									<div class="d-flex justify-content-around first-merchant-dashboard-design">
										<div className="first-merchant-dashboard-wallet">
											<BsWallet />
										</div>
										<div className="first-merchant-dashboard-heading">
											<h6>Main Account</h6>
											<p>$ 1144.05</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
							<div className="card first-merchant-card">
								<div
									className="card-body first-merchant-card-body"
									style={{
										minWidth: "-webkit-fill-available",
										maxWidth: "max-content",
									}}>
									<div class="d-flex justify-content-around first-merchant-dashboard-design">
										<div className="first-merchant-dashboard-wallet">
											<BsWallet />
										</div>
										<div className="first-merchant-dashboard-heading">
											<h6>Main Account</h6>
											<p>$ 1144.05</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
							<div className="card first-merchant-card">
								<div
									className="card-body first-merchant-card-body"
									style={{
										minWidth: "-webkit-fill-available",
										maxWidth: "max-content",
									}}>
									<div class="d-flex justify-content-around first-merchant-dashboard-design">
										<div className="first-merchant-dashboard-wallet">
											<BsWallet />
										</div>
										<div className="first-merchant-dashboard-heading">
											<h6>Main Account</h6>
											<p>$ 1144.05</p>
										</div>
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
							className="card tranascon-body shadow-lg all-table-responsive"
							style={{ width: "90%" }}>
							<div
								className="card-body"
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
										<ul className="pagination pagination-top">
											<li className="page-item transaction-pagination">
												<a
													className="page-link"
													href="/"
													tabindex="-1"
													aria-disabled="true">
													Previous
												</a>
											</li>
											<li className="page-item active transaction-pagination">
												<a
													className="page-link transaction-pagination-number"
													href="/">
													1
												</a>
											</li>
											<li className="page-item transaction-pagination">
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

export default MerchantDashboard;
