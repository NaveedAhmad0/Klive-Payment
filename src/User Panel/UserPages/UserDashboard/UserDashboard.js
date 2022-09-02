import React, { Component } from "react";
// import { Line, Doughnut, Bar, Radar } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

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
		dataField: "code",
		text: "Voucher code",
		classes: "deal-row-2",

		headerClasses: "deal-header",
	},

	{
		dataField: "purchasedate",
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
const products = [
	{
		id: 1003,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
		branchredeem: "Glorietta - GLO101",
		redemptiondate: "Jul. 10, 2022 at 4:30pm",
	},

	{
		id: 1004,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
		branchredeem: "Glorietta - GLO101",
		redemptiondate: "Jul. 10, 2022 at 4:30pm",
	},
	{
		id: 1005,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
		branchredeem: "Glorietta - GLO101",
		redemptiondate: "Jul. 10, 2022 at 4:30pm",
	},
];

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

export class UserDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visitChartData: {},
			impressionChartData: {},
			conversionChartData: {},
			downloadChartData: {},
			salesStatisticsChartData: {},
			netProfitChartData: {},
			totaltransactionChartData: {},
			areaOptions: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					yAxes: [
						{
							display: false,
						},
					],
					xAxes: [
						{
							display: false,
						},
					],
				},
				legend: {
					display: false,
				},
				elements: {
					point: {
						radius: 0,
					},
					line: {
						tension: 0,
					},
				},
				stepsize: 100,
			},
			salesStaticsOptions: {
				responsive: true,
				animation: {
					animateScale: true,
					animateRotate: true,
				},
				elements: {
					point: {
						radius: 3,
					},
					line: {
						tension: 0,
					},
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					},
				},
				legend: false,
				scales: {
					xAxes: [
						{
							display: false,
							ticks: {
								display: false,
								beginAtZero: false,
							},
							gridLines: {
								drawBorder: false,
								color: "#f8f8f8",
								zeroLineColor: "#f8f8f8",
							},
						},
					],
					yAxes: [
						{
							ticks: {
								max: 200,
								min: 0,
								stepSize: 50,
								fontColor: "#8b9298",
								beginAtZero: false,
							},
							gridLines: {
								color: "#f8f8f8",
								zeroLineColor: "#f8f8f8",
								display: true,
								drawBorder: false,
							},
						},
					],
				},
			},
			netProfitOptions: {
				scale: {
					ticks: {
						beginAtZero: true,
						min: 0,
						max: 100,
						stepSize: 20,
						display: false,
					},
					pointLabels: {
						fontSize: 14,
						fontColor: "#6c757c",
						color: "#f3f3f3",
						zeroLineColor: "#f3f3f3",
					},
					angleLines: {
						color: "#f3f3f3",
						zeroLineColor: "#f3f3f3",
					},
					gridLines: {
						color: "#f3f3f3",
						zeroLineColor: "#f3f3f3",
					},
				},
				legend: false,
			},
			totaltransactionChartOptions: {
				responsive: true,
				animation: {
					animateScale: true,
					animateRotate: true,
				},
				elements: {
					point: {
						radius: 0,
					},
				},
				layout: {
					padding: {
						left: -10,
						right: 0,
						top: 0,
						bottom: -10,
					},
				},
				legend: false,
				scales: {
					xAxes: [
						{
							gridLines: {
								display: false,
								color: "#fff",
								zeroLineColor: "#fff",
							},
							ticks: {
								display: false,
								color: "#fff",
								zeroLineColor: "#fff",
							},
						},
					],
					yAxes: [
						{
							gridLines: {
								display: false,
								color: "#fff",
								zeroLineColor: "#fff",
							},
							ticks: {
								display: false,
								color: "#fff",
								zeroLineColor: "#fff",
							},
						},
					],
				},
			},
			todos: [
				{
					id: 1,
					task: "Pick up kids from school",
					isCompleted: false,
				},
				{
					id: 2,
					task: "Prepare for presentation",
					isCompleted: false,
				},
				{
					id: 3,
					task: "Print Statements",
					isCompleted: false,
				},
				{
					id: 4,
					task: "Create invoice",
					isCompleted: false,
				},
				{
					id: 5,
					task: "Call John",
					isCompleted: false,
				},
			],
			inputValue: "",
			active: "",
		};
	}
	toggleProBanner() {
		document.querySelector(".proBanner").classList.toggle("hide");
	}
	render() {
		return (
			<div>
				<div className="row page-title-header">
					<div className="col-12">
						<div className="page-header">
							<h4 className="pageUser-title">Dashboard</h4>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 grid-margin">
						<div className="card">
							<div className="card-body">
								<div className="row">
									<div className="col-xl-6 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin">
										<div className="d-flex newboxcss">
											<div className="wrapper my-auto ml-auto ml-lg-4 mr-1">
												<svg
													stroke="currentColor"
													fill="currentColor"
													strokeWidth="0"
													viewBox="0 0 16 16"
													height="2em"
													width="2em"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path>
												</svg>
											</div>
											<div className="wrapper">
												<h4 className="mb-0 font-weight-medium text-primary">
													Main Account
												</h4>
												<h3 className="mb-0 font-weight-semibold">32,451</h3>
												<p className="mb-0 text-muted">+14.00(+0.50%)</p>
											</div>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin ">
										<div className="d-flex newboxcss2 shadow-lg">
											<div className="wrapper">
												<h3 className="mb-0 font-weight-semibold">15,2336</h3>
												<h5 className="mb-0 font-weight-medium text-primary">
													Impressions
												</h5>
												<p className="mb-0 text-muted">+138.97(+0.54%)</p>
											</div>
											<div className="wrapper my-auto ml-auto ml-lg-4">
												<Line
													ref="chart"
													data={this.state.impressionChartData}
													options={this.state.areaOptions}
													datasetKeyProvider={this.state.datasetKeyProvider}
													height={50}
													width={100}
													id="imoressionChart"
												/>
											</div>
										</div>
									</div>
									{/* <div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
										<div className="d-flex newboxcss2 shadow-lg">
											<div className="wrapper">
												<h3 className="mb-0 font-weight-semibold">7,688</h3>
												<h5 className="mb-0 font-weight-medium text-primary">
													Conversion
												</h5>
												<p className="mb-0 text-muted">+57.62(+0.76%)</p>
											</div>
											<div className="wrapper my-auto ml-auto ml-lg-4">
												<Line
													ref="chart"
													data={this.state.conversionChartData}
													options={this.state.areaOptions}
													datasetKeyProvider={this.state.datasetKeyProvider}
													height={50}
													width={100}
													id="conversionChart"
												/>
											</div>
										</div>
									</div>
									<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
										<div className="d-flex newboxcss2 shadow-lg">
											<div className="wrapper">
												<h3 className="mb-0 font-weight-semibold">1,553</h3>
												<h5 className="mb-0 font-weight-medium text-primary">
													Downloads
												</h5>
												<p className="mb-0 text-muted">+138.97(+0.54%)</p>
											</div>
											<div className="wrapper my-auto ml-auto ml-lg-4">
												<Line
													ref="chart"
													data={this.state.downloadChartData}
													options={this.state.areaOptions}
													datasetKeyProvider={this.state.datasetKeyProvider}
													height={50}
													width={100}
													id="downloadChart"
												/>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="page-header">
							<h4 className="pageUser-title">Transaction History</h4>
						</div>
						<div className="row">
							<div className="col-md-12 grid-margin">
								<div className="card">
									<div className="card-body">
										<div className="table-responsive">
											<ToolkitProvider
												keyField="id"
												data={products}
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
	}
}
export default UserDashboard;
