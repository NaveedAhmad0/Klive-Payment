import React from "react";
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaRegUserCircle } from "react-icons/fa";

const Sidebar = () => {
	return (
		<div
			style={{
				display: "flex",
				height: "260vh",
				// overflow: "scroll initial",
			}}>
			<CDBSidebar textColor="#fff" backgroundColor="#6252F9">
				<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
					<a
						href="/"
						className="text-decoration-none"
						style={{ color: "inherit" }}>
						Online Payment
					</a>
				</CDBSidebarHeader>

				<CDBSidebarContent
					className="sidebar-content scroll"
					style={{ height: "480px !important" }}>
					<CDBSidebarMenu>
						<NavLink exact to="/user-dashboard" activeClassName="activeClicked">
							<CDBSidebarMenuItem className="hoverbutton" icon="columns">
								Dashboard
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/user-profile" activeClassName="activeClicked">
							<CDBSidebarMenuItem className="hoverbutton" icon="table">
								Profile
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/user-deposits" activeClassName="activeClicked">
							<CDBSidebarMenuItem className="hoverbutton" icon="user">
								User Deposits
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink
							exact
							to="/user-transaction-history"
							activeClassName="activeClicked">
							<CDBSidebarMenuItem className="hoverbutton" icon="chart-line">
								Transaction Histories
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink
							exact
							to="/merchant/depositTomerchant-Invoice"
							activeClassName="activeClicked">
							<CDBSidebarMenuItem
								className="hoverbutton"
								icon="exclamation-circle">
								Deposit to Merchants
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink
							exact
							to="/user-withdraw-request"
							activeClassName="activeClicked">
							<CDBSidebarMenuItem className="hoverbutton" icon="chart-line">
								Reports
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/modal" activeClassName="activeClicked">
							<CDBSidebarMenuItem className="hoverbutton" icon="chart-line">
								Withdrawal Request
							</CDBSidebarMenuItem>
						</NavLink>
					</CDBSidebarMenu>
				</CDBSidebarContent>
			</CDBSidebar>
		</div>
	);
};

export default Sidebar;
