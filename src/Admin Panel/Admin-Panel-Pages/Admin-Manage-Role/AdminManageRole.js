import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

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
	const [ittems, setItems] = useState([]);
	console.log("items is", ittems);

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get("https://backend.klivepay.com/api/admin/get-merchant-list")
					.then((response) => {
						// if (response == 200) {
						const sample = [];
						for (let i = 0; i < response.data.merchant.length; i += 1) {
							sample.push({
								id: response.data.merchant[i].id,
								FirstName: response.data.merchant[i].firstName,
								email: response.data.merchant[i].email,
								status: response.data.merchant[i].email,
								branchredeem: response.data.merchant[i].email,
								redemptiondate: response.data.merchant[i].email,
							});
						}
						setItems(sample);
						// }
						console.log(response.data.merchant[3].id);
						// const listItems = response.json();
					});
			} catch (error) {
				console.log(error.stack);
			}
		};
		(async () => await getUserDetails())();
	}, []);

	// console.log("reposnse", list);
	// const { id, firstName } = items;
	const { SearchBar } = Search;

	// import DatePicker from 'react-datepicker';
	// import { Dropdown } from 'react-bootstrap';
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
			text: "Branch redeemed",
			headerClasses: "deal-header",
		},
		{
			dataField: "redemptiondate",
			text: "Redemption date",
			headerClasses: "deal-header",
		},
	];
	console.log("list of item", ittems);
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
