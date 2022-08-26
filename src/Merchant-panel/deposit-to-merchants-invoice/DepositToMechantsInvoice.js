import React from "react";
import { Link } from "react-router-dom";
import { FaQrcode, FaClone } from "react-icons/fa";
import MerchantSidebar from "../../components/merchant-sidebar/MerchantSidebar";
import "./deposit-to-merchants-invoice.css";
const DepositToMechantsInvoice = () => {
	return (
		<>
			<div className="row">
				<div
					className="col-xl-3 col-lg-2 col-md-2 col-sm-2 col-12"
					style={{ width: "100%" }}>
					<MerchantSidebar />
				</div>
				<div
					className="col-xl-9 col-lg-10 col-md-10 col-sm-10 col-12"
					style={{
						position: "absolute",
						marginLeft: "19rem",
						marginTop: "7rem",
					}}>
					<div className="d-flex justify-content-between">
						<div>
							<h3 className="deposit-merchant-heading-invoice">invoice</h3>
						</div>

						<div>
							<Link to="/merchant/merchant-invoice">
								<button className="btn btn-invoice shadow-lg">
									create invoice
								</button>
							</Link>
						</div>
					</div>

					<div className="card">
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
								<thead className="deposit-merchant-table-heading-invoice">
									<tr>
										<th scope="col">Icon</th>
										<th scope="col">Merchant Name</th>
										<th scope="col">Qr Code</th>
										<th scope="col">Amount</th>
										<th scope="col">Status</th>
										<th scope="col">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr className="deposit-merchant-table-data-invoice">
										<th scope="row" className="deposit-merchant-id-invoice">
											<FaClone className="deposit-merchant-clone-invoice" />
										</th>
										<td>Bullsyeymarke</td>
										<td>
											<FaQrcode className="qrcode-deposit-invoice" />
										</td>
										<td>$300</td>
										<td>pending</td>
										<td>
											<button className="btn btn-deposit-play-invoice">
												pay
											</button>
										</td>
									</tr>
									<tr className="deposit-merchant-table-data-invoice">
										<th scope="row" className="deposit-merchant-id-invoice">
											<FaClone className="deposit-merchant-clone-invoice" />
										</th>
										<td>Bullsyeymarke</td>
										<td>
											<FaQrcode className="qrcode-deposit-invoice" />
										</td>
										<td>$300</td>
										<td>pending</td>
										<td>
											<button className="btn btn-deposit-play-invoice">
												pay
											</button>
										</td>
									</tr>
									<tr className="deposit-merchant-table-data-invoice">
										<th scope="row" className="deposit-merchant-id-invoice">
											<FaClone className="deposit-merchant-clone-invoice" />
										</th>
										<td>Bullsyeymarke</td>
										<td>
											<FaQrcode className="qrcode-deposit-invoice" />
										</td>
										<td>$300</td>
										<td>pending</td>
										<td>
											<button className="btn btn-deposit-play-invoice">
												pay
											</button>
										</td>
									</tr>
									<tr className="deposit-merchant-table-data-invoice">
										<th scope="row" className="deposit-merchant-id-invoice">
											<FaClone className="deposit-merchant-clone-invoice" />
										</th>
										<td>Bullsyeymarke</td>
										<td>
											<FaQrcode className="qrcode-deposit-invoice" />
										</td>
										<td>$300</td>
										<td>pending</td>
										<td>
											<button className="btn btn-deposit-play-invoice">
												pay
											</button>
										</td>
									</tr>
									<tr className="deposit-merchant-table-data-invoice">
										<th scope="row" className="deposit-merchant-id-invoice">
											<FaClone className="deposit-merchant-clone-invoice" />
										</th>
										<td>Bullsyeymarke</td>
										<td>
											<FaQrcode className="qrcode-deposit-invoice" />
										</td>
										<td>$300</td>
										<td>pending</td>
										<td>
											<button className="btn btn-deposit-play-invoice">
												pay
											</button>
										</td>
									</tr>
									<tr className="deposit-merchant-table-data-invoice">
										<th scope="row" className="deposit-merchant-id-invoice">
											<FaClone className="deposit-merchant-clone-invoice" />
										</th>
										<td>Bullsyeymarke</td>
										<td>
											<FaQrcode className="qrcode-deposit-invoice" />
										</td>
										<td>$300</td>
										<td>pending</td>
										<td>
											<button className="btn btn-deposit-play-invoice">
												pay
											</button>
										</td>
									</tr>
									<tr className="deposit-merchant-table-data-invoice">
										<th scope="row" className="deposit-merchant-id-invoice">
											<FaClone className="deposit-merchant-clone-invoice" />
										</th>
										<td>Bullsyeymarke</td>
										<td>
											<FaQrcode className="qrcode-deposit-invoice" />
										</td>
										<td>$300</td>
										<td>pending</td>
										<td>
											<button className="btn btn-deposit-play-invoice">
												pay
											</button>
										</td>
									</tr>
									<tr className="deposit-merchant-table-data-invoice">
										<th scope="row" className="deposit-merchant-id-invoice">
											<FaClone className="deposit-merchant-clone-invoice" />
										</th>
										<td>Bullsyeymarke</td>
										<td>
											<FaQrcode className="qrcode-deposit-invoice" />
										</td>
										<td>$300</td>
										<td>pending</td>
										<td>
											<button className="btn btn-deposit-play-invoice">
												pay
											</button>
										</td>
									</tr>
									<tr className="deposit-merchant-table-data-invoice">
										<th scope="row" className="deposit-merchant-id-invoice">
											<FaClone className="deposit-merchant-clone-invoice" />
										</th>
										<td>Bullsyeymarke</td>
										<td>
											<FaQrcode className="qrcode-deposit-invoice" />
										</td>
										<td>$300</td>
										<td>pending</td>
										<td>
											<button className="btn btn-deposit-play-invoice">
												pay
											</button>
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

export default DepositToMechantsInvoice;
