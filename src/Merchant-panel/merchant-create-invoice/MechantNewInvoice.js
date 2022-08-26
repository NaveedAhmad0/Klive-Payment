import { Button } from "bootstrap";
import React from "react";
import { FaQrcode } from "react-icons/fa";
import Sidebar from "../../components/merchant-sidebar/MerchantSidebar";
import "./mechant-Newinvoice.css";
const MerchantInvoice = () => {
	return (
		<>
			<div className="row">
				<div className="col-xl-3 col-2" style={{ width: "100%" }}>
					<Sidebar />
				</div>
				<div
					className="col-xl-9 col-10 mt-5"
					style={{
						position: "absolute",
						marginLeft: "19rem",
						marginTop: "    7rem",
					}}>
					<h1 className="mt-5">New Invoice</h1>
					<div className="row pe-4">
						<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
							<div className="card" style={{ width: "100%" }}>
								<div className="card-header first-card-header">
									<h4 className="first-card-heading">order #1234 details</h4>
								</div>
								<div
									className="card-body"
									style={{ minWidth: "-webkit-fill-available" }}>
									<div className="d-flex justify-content-between">
										<div className="general-invoice">
											<div className="general-invoice-heading text-left">
												<h6>general</h6>
												<b>Date Created:</b>
												<input
													type="datetime-local "
													className="form-control"
												/>
												<br></br>
												<br></br>
												<b>Status:</b>
												<select className="form-select payment-inputs-design">
													<option selected>Pending Payment</option>
													<option value="1">1.</option>
													<option value="2">2.</option>
												</select>
												<br></br>
												<br></br>
												<br></br>
												<b>Customer:</b>
												<select className="form-select payment-inputs-design">
													<option selected>
														angelleye_test34(#46-andr-test)
													</option>
													<option value="1">1.</option>
													<option value="2">2.</option>
												</select>
											</div>
										</div>
										<div className="billing-invoice ">
											<div className="billing-invoice-heading ">
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

							<div className="card" style={{ width: "100%" }}>
								<div
									className="card-body"
									style={{ minWidth: "-webkit-fill-available" }}>
									<table class="table">
										<thead>
											<tr>
												<th scope="col">sr</th>
												<th scope="col">iteam</th>
												<th scope="col">Cost</th>
												<th scope="col">Qty</th>
												<th scope="col">Total</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>
													<u>Premium Quality</u>
												</td>
												<td>$20.00</td>
												<td>1</td>
												<td>$20.00</td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td>text</td>
												<td></td>
												<td></td>
												<td>$5.00</td>
											</tr>
											<tr>
												<th scope="row"></th>
												<td></td>
												<td>
													<b>Shipping</b>
												</td>
												<td></td>
												<td>
													<b>$5.00</b>
												</td>
											</tr>
											<tr>
												<th scope="row"></th>
												<td></td>
												<td>
													<b>Total</b>
												</td>
												<td></td>
												<td>
													<b>$25.00</b>
												</td>
											</tr>
										</tbody>
									</table>
									<div className="d-flex justify-content-between">
										<ul className="d-flex justify-content-even">
											<li>
												<button type="button" class="btn btn-outline-secondary">
													Add Iteam(s)
												</button>
											</li>
											<li>
												<button type="button" class="btn btn-outline-secondary">
													Apply Coupan
												</button>
											</li>
											<li>
												<button type="button" class="btn btn-outline-secondary">
													Refund
												</button>
											</li>
										</ul>
										<ul>
											<li>
												<li>
													<button className="btn btn-invoic-recalculate">
														Reacalculate
													</button>
												</li>
											</li>
										</ul>
									</div>
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
									<p>There are no notes yet.</p>
								</div>
								<div className="card-body pe-5">
									<p>Add Notes</p>
									<input type="text" className="form-control" />

									<div className="mt-2 d-flex">
										<div className="dropdown">
											<button
												className="btn btn-light dropdown-toggle invoice-private-note"
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
