import React from "react";
import { FaSearch } from "react-icons/fa";
import MerchantSidebar from "../../components/merchant-sidebar/MerchantSidebar";
import "./merchant-transaction-history.css";
const MerchantTransactionHistory = () => {
	return (
		<>
			<div className="row">
				<div
					className="col-xl-3 col-lg-2 col-md-2 col-sm-2 col-12"
					style={{ width: "100%" }}>
					<MerchantSidebar />
				</div>
				<div
					className="col-xl-9 col-lg-10 col-md-10 col-sm-10 col-12 pe-5"
					style={{
						position: "absolute",
						marginLeft: "19rem",
						marginTop: "7rem",
					}}>
					<h3 className="merchant-tranaction-heading">Transaction History</h3>
					<div className="card shadow-lg">
						<div
							className="card-body"
							style={{
								minWidth: "-webkit-fill-available",
								maxWidth: "max-content",
							}}>
							<div className="row">
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="merchant-tranaction-inputs">
										<FaSearch className="fasearch" />
										<input
											type="text"
											className="form-control user-tranaction-inputs-design"
											placeholder="keywords"
										/>
									</div>
									<div className="merchant-tranaction-inputs">
										<select className="form-select merchant-tranaction-inputs-design">
											<option selected>Merchant</option>
											<option value="1">Mr.</option>
											<option value="2">Mrs.</option>
										</select>
									</div>
									<div className="merchant-tranaction-inputs">
										<input
											type="date"
											className="form-control merchant-tranaction-inputs-design"
											placeholder="info@gmail.com"
										/>
									</div>
									<div className="merchant-tranaction-inputs">
										<button className="btn btn-merchant-tranaction">
											Clear
										</button>
									</div>
								</div>

								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="merchant-tranaction-inputs">
										<select className="form-select merchant-tranaction-inputs-design">
											<option selected>All Channel</option>
											<option value="1">Mr.</option>
											<option value="2">Mrs.</option>
										</select>
									</div>
									<div className="merchant-tranaction-inputs">
										<select className="form-select merchant-tranaction-inputs-design">
											<option selected>Trans Status</option>
											<option value="1">Success</option>
											<option value="2">Failed</option>
										</select>
									</div>
									<div className="merchant-tranaction-inputs">
										<input
											type="date"
											className="form-control merchant-tranaction-inputs-design"
											placeholder="info@gmail.com"
										/>
									</div>
									<div className="merchant-tranaction-inputs">
										<button className="btn btn-merchant-tranaction">
											Search
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card all-table-responsive">
						<div
							className="card-body"
							style={{
								minWidth: "-webkit-fill-available",
								maxWidth: "max-content",
							}}>
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
								<thead className="merchant-table-heading">
									<tr>
										<th scope="col">Trans.Id</th>
										<th scope="col">Date</th>
										<th scope="col">Merchant</th>
										<th scope="col">order No.</th>
										<th scope="col">payment Channel</th>
										<th scope="col">Amount</th>
									</tr>
								</thead>
								<tbody>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
									</tr>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
									</tr>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
									</tr>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
									</tr>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
									</tr>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
									</tr>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
									</tr>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
									</tr>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
									</tr>
									<tr className="merchant-table-data">
										<th scope="row" className="merchant-trans-id">
											XYZ Store ID
										</th>
										<td>June 4,2020</td>
										<td>cashback</td>
										<td>cashback</td>
										<td>completed</td>
										<td>+$5,553</td>
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

export default MerchantTransactionHistory;
