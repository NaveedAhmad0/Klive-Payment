import React from "react";
import { FaQrcode, FaClone } from "react-icons/fa";
import Sidebar from "../NewSideBar/UserSideBar";
import "./deposit-to-merchants.css";
const DepositToMechants = () => {
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
					<h3 className="deposit-merchant-heading my-5">
						Deposit to merchants
					</h3>

					<div className="container-fluid pe-5">
						<div className="card" style={{ width: "100%" }}>
							<div
								className="card-body"
								style={{ minWidth: "-webkit-fill-available" }}>
								<table class="table">
									<thead className="deposit-merchant-table-heading">
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
										<tr className="deposit-merchant-table-data">
											<th scope="row" className="deposit-merchant-id">
												<FaClone className="deposit-merchant-clone" />
											</th>
											<td>Bullsyeymarke</td>
											<td>
												<FaQrcode className="qrcode-deposit" />
											</td>
											<td>$300</td>
											<td>pending</td>
											<td>
												<button className="btn btn-deposit-play">pay</button>
											</td>
										</tr>
										<tr className="deposit-merchant-table-data">
											<th scope="row" className="deposit-merchant-id">
												<FaClone className="deposit-merchant-clone" />
											</th>
											<td>Bullsyeymarke</td>
											<td>
												<FaQrcode className="qrcode-deposit" />
											</td>
											<td>$300</td>
											<td>pending</td>
											<td>
												<button className="btn btn-deposit-play">play</button>
											</td>
										</tr>
										<tr className="deposit-merchant-table-data">
											<th scope="row" className="deposit-merchant-id">
												<FaClone className="deposit-merchant-clone" />
											</th>
											<td>Bullsyeymarke</td>
											<td>
												<FaQrcode className="qrcode-deposit" />
											</td>
											<td>$300</td>
											<td>pending</td>
											<td>
												<button className="btn btn-deposit-play">pay</button>
											</td>
										</tr>
										<tr className="deposit-merchant-table-data">
											<th scope="row" className="deposit-merchant-id">
												<FaClone className="deposit-merchant-clone" />
											</th>
											<td>Bullsyeymarke</td>
											<td>
												<FaQrcode className="qrcode-deposit" />
											</td>
											<td>$300</td>
											<td>pending</td>
											<td>
												<button className="btn btn-deposit-play">pay</button>
											</td>
										</tr>
										<tr className="deposit-merchant-table-data">
											<th scope="row" className="deposit-merchant-id">
												<FaClone className="deposit-merchant-clone" />
											</th>
											<td>Bullsyeymarke</td>
											<td>
												<FaQrcode className="qrcode-deposit" />
											</td>
											<td>$300</td>
											<td>pending</td>
											<td>
												<button className="btn btn-deposit-play">pay</button>
											</td>
										</tr>
										<tr className="deposit-merchant-table-data">
											<th scope="row" className="deposit-merchant-id">
												<FaClone className="deposit-merchant-clone" />
											</th>
											<td>Bullsyeymarke</td>
											<td>
												<FaQrcode className="qrcode-deposit" />
											</td>
											<td>$300</td>
											<td>pending</td>
											<td>
												<button className="btn btn-deposit-play">pay</button>
											</td>
										</tr>
										<tr className="deposit-merchant-table-data">
											<th scope="row" className="deposit-merchant-id">
												<FaClone className="deposit-merchant-clone" />
											</th>
											<td>Bullsyeymarke</td>
											<td>
												<FaQrcode className="qrcode-deposit" />
											</td>
											<td>$300</td>
											<td>pending</td>
											<td>
												<button className="btn btn-deposit-play">pay</button>
											</td>
										</tr>
										<tr className="deposit-merchant-table-data">
											<th scope="row" className="deposit-merchant-id">
												<FaClone className="deposit-merchant-clone" />
											</th>
											<td>Bullsyeymarke</td>
											<td>
												<FaQrcode className="qrcode-deposit" />
											</td>
											<td>$300</td>
											<td>pending</td>
											<td>
												<button className="btn btn-deposit-play">pay</button>
											</td>
										</tr>
										<tr className="deposit-merchant-table-data">
											<th scope="row" className="deposit-merchant-id">
												<FaClone className="deposit-merchant-clone" />
											</th>
											<td>Bullsyeymarke</td>
											<td>
												<FaQrcode className="qrcode-deposit" />
											</td>
											<td>$300</td>
											<td>pending</td>
											<td>
												<button className="btn btn-deposit-play">pay</button>
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

export default DepositToMechants;
