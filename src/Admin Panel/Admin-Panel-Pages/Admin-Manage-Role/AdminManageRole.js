import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Edit from "../../../assets/logo/K Live Pay.png";

import { useHistory } from "react-router-dom";
import API from "../../../backend";
const options = {
	paginationSize: 4,
	pageStartIndex: 1,
	alwaysShowAllBtns: true, // Always show next and previous button
	withFirstAndLast: false, // Hide the going to First and Last page button
	hideSizePerPage: true, // Hide the sizePerPage dropdown always
	hidePageListOnlyOnePage: true, // Hide the pagination list when only one page

	showTotal: false,

	disablePageTitle: true,
};

const AdminManageRole = () => {
	const history = useHistory();

	const [ittems, setItems] = useState([]);
	console.log("items is", ittems);

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios.get(`${API}/admin/get-merchant-list`).then((response) => {
					// if (response == 200) {
					const sample = [];
					for (let i = 0; i < response.data.length; i += 1) {
						sample.push({
							id: response.data[i].id,
							FirstName: response.data[i].firstName,
							email: response.data[i].email,
							status: response.data[i].email,
							branchredeem: response.data[i].email,
							redemptiondate: response.data[i].email,
						});
					}
					setItems(sample);
					// }
					console.log("babla", response.data);
					// const listItems = response.json();
				});
			} catch (error) {
				console.log(error);
			}
		};
		(async () => await getUserDetails())();
	}, []);

	const { SearchBar } = Search;

	const columns = [
		{
			dataField: "id",
			text: "Order number",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "FirstName",
			text: "Voucher code",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "email",
			text: "Purchase date",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "status",
			text: "Status",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "branchredeem",
			isDummyField: true,
			text: "View user",
			headerClasses: "deal-header",
			formatter: (cellContent, row) => {
				return customFunction(cellContent, row);
			},
		},
		// {
		// 	dataField: "name",
		// 	isDummyField: true,
		// 	text: "Edit role",
		// 	headerClasses: "deal-header",
		// 	formatter: (cellContent, row) => {
		// 		return customFunction(cellContent, row);
		// 	},
		// },
	];
	console.log("list of item", ittems);
	const customFunction = (cellContent, row) => {
		return (
			<h5>
				{/* <Link to="/admin/getUserProfile"> */}
				<a
					href
					alt="issueimageload"
					className="cursor-pointer"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/admin/getMerchantProfile",
							state: { merchantdataEmail: row.email },
						});
						console.log("sent email", row.email);
					}}>
					view
				</a>
				{/* </Link> */}
			</h5>
		);
	};
	// list.map((list)=>{})

	return (
		<div>
			<h2 className="text-primary bw-bold">Merchant List</h2>
			{/* {ittems.map((item) => (
				<AdminTable key={item.id} list={item} />
			))} */}
			<div className="row">
				<div className="col-md-12">
					<div className="row">
						<div className="col-md-12 grid-margin">
							<div className="card">
								<div className="card-body">
									<div className="table-responsive">
										<ToolkitProvider
											keyField="id"
											data={ittems}
											columns={columns}
											search>
											{(props) => (
												<div>
													<h3>Input something at below input field:</h3>
													<SearchBar
														{...props.searchProps}
														className="custome-search-field"
														style={{ color: "white" }}
														delay={500}
														placeholder="Search Something!!!"
													/>
													<hr />
													<BootstrapTable
														{...props.baseProps}
														headerClasses={{ backgroundColor: "red" }}
														pagination={paginationFactory(options)}
													/>
												</div>
											)}
										</ToolkitProvider>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="row"></div>
				</div>
			</div>
		</div>
	);
};

export default AdminManageRole;
