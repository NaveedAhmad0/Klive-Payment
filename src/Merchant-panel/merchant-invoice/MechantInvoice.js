import React from "react";
import { FaQrcode } from "react-icons/fa";
import MerchantSidebar from "../../components/merchant-sidebar/MerchantSidebar";
import "./mechant-invoice.css";
const MerchantInvoice = () => {
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
					<div className="row">
						<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
							<div className="card">
								<div className="card-header first-card-header">
									<h4 className="first-card-heading">order #1234 details</h4>
								</div>
								<div
									className="card-body"
									style={{
										minWidth: "-webkit-fill-available",
										maxWidth: "max-content",
									}}>
									<div className="d-flex justify-content-between">
										<div className="general-invoice">
											<div className="general-invoice-heading">
												<h6>general</h6>
											</div>

											<input type="text" className="form-control" />
										</div>
										<div className="billing-invoice">
											<div className="billing-invoice-heading">
												<h6>billing</h6>
											</div>
											<p className="billing-invoice-content">
												testers Lic
												<br />
												123 test Ave
												<br />
												granview,MO 64030
											</p>
											<div>
												<h6 className="invoice-email">Email address</h6>
												<p className="billing-invoice-content">
													andrewtest@domain.com
												</p>
											</div>
											<div>
												<h6 className="invoice-phone">Phone Number</h6>
												<p className="billing-invoice-content">816-555-5555</p>
											</div>
										</div>
										<div className="address-invoice">
											<div className="address-invoice-heading">
												<h6>address</h6>
											</div>
											<p className="billing-invoice-content">
												testers Lic
												<br />
												123 test Ave
												<br />
												granview,MO 64030
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<table class="table">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">First</th>
												<th scope="col">Last</th>
												<th scope="col">Handle</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
											</tr>
											<tr>
												<th scope="row">3</th>
												<td colspan="2">Larry the Bird</td>
												<td>@twitter</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card">
								<div className="card-header forth-card-header">
									<h6>paypal here</h6>
								</div>
								<div className=" text-center invoice-qrcode">
									<FaQrcode className="invoice-qrcode-design" />
								</div>
							</div>
							<div className="card">
								<div className="card-header forth-card-header">
									<h6>order nodes</h6>
								</div>

								<div className="card-header forth-card-order">
									<h6>There are no notes yet.</h6>
								</div>
								<div className="card-body">
									<p>Add Notes</p>
									<input type="text" className="form-control" />

									<div className="mt-2 d-flex">
										<div className="dropdown">
											<button
												className="btn btn-secondary dropdown-toggle invoice-private-note"
												type="button"
												data-bs-toggle="dropdown"
												aria-expanded="false">
												Private note
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
										</div>
										<button className="btn btn-invoic-add">add</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                               
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"> </div>
                        </div> */}
				</div>
			</div>
		</>
	);
};

export default MerchantInvoice;
