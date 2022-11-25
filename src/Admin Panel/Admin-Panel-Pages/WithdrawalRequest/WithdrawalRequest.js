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

const WithdrawalRequest = () => {
	const history = useHistory();
	const [ittems, setItems] = useState([]);

	console.log("items is", ittems);
	// const edit = <faCake />;
	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios.get(`${API}/admin/withdraw-request`).then((response) => {
					const sample = [];

					for (let i = 0; i < response.data.length; i += 1) {
						sample.push({
							id: response.data[i].id,
							amount: response.data[i].amount,
							AccountNumber: response.data[i].BankDetails.AccountNumber,
							status: response.data[i].status,
							branchredeem: response.data[i].BankDetails.BankName,
							redemptiondate: response.data[i].AccountNumber,
							referalNumber: response.data[i].ReferalNumber,
						});
					}
					setItems(sample);

					// console.log(response.data[i].id);
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
			text: "No",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "amount",
			text: "Amount",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "AccountNumber",
			text: "Account Number",
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
			text: "Bank Name",
			headerClasses: "deal-header",
		},
		{
			dataField: "branchredeem",
			isDummyField: true,
			text: "Edit role",
			headerClasses: "deal-header",
			formatter: (cellContent, row) => {
				return customFunction(cellContent, row);
			},
		},
	];
	const customFunction = (cellContent, row) => {
		return (
			<h5>
				{/* <Link to="/admin/getUserProfile"> */}
				<button
					alt="issueimageload"
					className="cursor-pointer btn btn-success"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/admin/WithdrawalDetails",
							state: { ReferenceId: row.referalNumber },
						});
						// console.log(row.email);
					}}>
					view
				</button>
				{/* </Link> */}
			</h5>
		);
	};
	console.log("list of item", ittems);
	// list.map((list)=>{})

	return (
		<div>
			<h2 className="text-primary bw-bold">Users</h2>
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

export default WithdrawalRequest;
