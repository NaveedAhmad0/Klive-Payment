import React, { Component } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import MerchantTable from "../../Merchant-Panel-Components/Merchant-Panel-Table/MerchantTable";

export class DepositsToMerchant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			active: "",
		};
		// this.statusChangedHandler = this.statusChangedHandler.bind(this);
		// this.addTodo = this.addTodo.bind(this);
		// this.removeTodo = this.removeTodo.bind(this);
		// this.inputChangeHandler = this.inputChangeHandler.bind(this);
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
							<h4 className="page-title">Invoice</h4>
						</div>
					</div>
				</div>
				<MerchantTable />
			</div>
		);
	}
}
export default DepositsToMerchant;
