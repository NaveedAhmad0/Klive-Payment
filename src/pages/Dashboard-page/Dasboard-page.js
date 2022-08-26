import React from "react";
import { BsWallet } from "react-icons/bs";
import Sidebar from "../../components/SideBar/Sidebar";
import "./dashboard-page.css";
import Chart from "../../components/Charts/chart";
// import { Table } from "react-bootstrap";
import Table from "../../components/tabledata/table";
const UserDashboard = () => {
	return (
		<>
			<div className="row">
				<div className="col-2" style={{ width: "100%" }}>
					<Sidebar />
				</div>
				<div
					className=" col-10 "
					style={{
						position: "absolute",
						marginLeft: "19rem",
						marginTop: "7rem",
					}}>
					<h3 className="first-dashboard-heading">dashboard</h3>
					<div className="">
						<div className="row">
							<div className="col-2 first-admin-dashboard-card">
								<div className="card first-admin-dashboard-body">
									<div class="d-flex justify-content-around">
										<div className="first-admin-dashboard-wallet">
											<BsWallet />
										</div>
										<div class="first-dashboart-text">
											<h6>Main account</h6>
											<p>$ 1144.05</p>
											{/* <button className="btn btn-success">withdraw</button> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-2 second-admin-dashboard-card">
								<div className="card second-admin-dashboard-body">
									<div class="d-flex justify-content-around">
										<div className="second-admin-dashboard-wallet">
											<BsWallet />
										</div>
										<div class="second-dashboard-text">
											<h6>Main account</h6>
											<p>$ 1144.05</p>
											{/* <button className="btn btn-success">withdraw</button> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-2 second-admin-dashboard-card">
								<div className="card second-admin-dashboard-body">
									<div class="d-flex justify-content-around">
										<div className="second-admin-dashboard-wallet">
											<BsWallet />
										</div>
										<div class="second-dashboard-text">
											<h6>Main account</h6>
											<p>$ 1144.05</p>
											{/* <button className="btn btn-success">withdraw</button> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-2 second-admin-dashboard-card">
								<div className="card second-admin-dashboard-body">
									<div class="d-flex justify-content-around">
										<div className="second-admin-dashboard-wallet">
											<BsWallet />
										</div>
										<div class="second-dashboard-text">
											<h6>Main account</h6>
											<p>$ 1144.05</p>
											{/* <button className="btn btn-success">withdraw</button> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br></br>
					<div>
						<h3>Activity</h3>
						<Chart />
					</div>
					<div>
						<Table />
					</div>
				</div>
			</div>
		</>
	);

	// return <div>
	//           {/* <Sidebar/>   */}
	//         <div className="align">
	//             <h1>
	//             Where does it come from?
	//             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

	//             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
	//             </h1>
	//         </div>
	//     </div>
};

export default UserDashboard;
