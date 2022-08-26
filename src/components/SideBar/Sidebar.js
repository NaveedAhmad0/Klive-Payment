import React from "react";
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaRegUserCircle } from "react-icons/fa";
import "./Sidebar.css";
import { useState } from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
// import dashboard from "../dashboard/dashboard"

const Sidebar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<div className="d-flex ">
			<div
				style={{
					display: "flex",
					height: "100vh",
					width: "22%",
					overflow: "scroll initial",
				}}>
				<CDBSidebar textColor="#fff" backgroundColor="#6252F9">
					<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
						<a
							href="/admin"
							className="text-decoration-none"
							style={{ color: "inherit" }}>
							Online Payment
						</a>
					</CDBSidebarHeader>

					<CDBSidebarContent
						className="sidebar-content scroll"
						style={{ height: "480px !important" }}>
						<CDBSidebarMenu>
							<NavLink
								exact
								to="/admin/dashboard"
								activeClassName="activeClicked">
								<CDBSidebarMenuItem className="hoverbutton" icon="columns">
									Dashboard
								</CDBSidebarMenuItem>
							</NavLink>
							{/* <NavLink exact to="/tables" activeClassName="activeClicked"> */}
							<SubMenu
								title="Transactions"
								style={{ marginLeft: "18px" }}
								icon={<FaRegUserCircle style={{ marginRight: "19px" }} />}>
								<NavLink
									exact
									to="/admin/Payment_transaction"
									activeClassName="activeClicked">
									<CDBSidebarMenuItem>Payment Transaction</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									exact
									to="/admin/Settlement"
									activeClassName="activeClicked">
									<CDBSidebarMenuItem>Settlement Report</CDBSidebarMenuItem>
								</NavLink>
							</SubMenu>
							{/* </NavLink> */}

							<SubMenu
								title="Void & Refund"
								style={{ marginLeft: "18px", marginTop: "30px" }}
								icon={<FaRegUserCircle style={{ marginRight: "19px" }} />}>
								<NavLink exact to="/admin/Void" activeClassName="activeClicked">
									<CDBSidebarMenuItem>Void</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									exact
									to="/admin/Refund"
									activeClassName="activeClicked">
									<CDBSidebarMenuItem>Refund</CDBSidebarMenuItem>
								</NavLink>
							</SubMenu>
							<NavLink exact to="/analytics" activeClassName="activeClicked">
								<CDBSidebarMenuItem className="hoverbutton" icon="chart-line">
									Paylink
								</CDBSidebarMenuItem>
							</NavLink>
							<NavLink
								exact
								to="/hero404"
								//   target="_blank"
								activeClassName="activeClicked">
								<CDBSidebarMenuItem
									className="hoverbutton"
									icon="exclamation-circle">
									Plug-in
								</CDBSidebarMenuItem>
							</NavLink>

							<SubMenu
								title="User Profile"
								style={{ marginLeft: "18px" }}
								icon={<FaRegUserCircle style={{ marginRight: "19px" }} />}>
								<NavLink
									exact
									to="/admin/UserProfile"
									activeClassName="activeClicked">
									<CDBSidebarMenuItem>User Profile</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									exact
									to="/admin/ChangePassword"
									activeClassName="activeClicked">
									<CDBSidebarMenuItem>Change Password</CDBSidebarMenuItem>
								</NavLink>
							</SubMenu>
							<NavLink
								exact
								to="/admin/Merchant"
								activeClassName="activeClicked">
								<CDBSidebarMenuItem className="hoverbutton" icon="chart-line">
									Merchant Profile
								</CDBSidebarMenuItem>
							</NavLink>
							<SubMenu
								title="Users Manage"
								style={{ marginLeft: "18px" }}
								icon={<FaRegUserCircle style={{ marginRight: "19px" }} />}>
								<NavLink exact to="/admin/User" activeClassName="activeClicked">
									<CDBSidebarMenuItem>User</CDBSidebarMenuItem>
								</NavLink>
								<NavLink exact to="/admin/Role" activeClassName="activeClicked">
									<CDBSidebarMenuItem>Role</CDBSidebarMenuItem>
								</NavLink>
							</SubMenu>
							<NavLink exact to="/analytics" activeClassName="activeClicked">
								<CDBSidebarMenuItem className="hoverbutton" icon="chart-line">
									Documentation
								</CDBSidebarMenuItem>
							</NavLink>
							<NavLink exact to="/analytics" activeClassName="activeClicked">
								<CDBSidebarMenuItem className="hoverbutton" icon="chart-line">
									Terms&Condition
								</CDBSidebarMenuItem>
							</NavLink>
						</CDBSidebarMenu>
					</CDBSidebarContent>

					{/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
				</CDBSidebar>
			</div>
			<Navbar className="navbarside" />
		</div>
	);
};

export default Sidebar;
