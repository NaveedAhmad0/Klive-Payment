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
import "../merchant-sidebar/merchant-sidebar.css";
import { useState } from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";
// import dashboard from "../dashboard/dashboard"

const Sidebar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<div className="d-flex ">
			<div
				style={{
					display: "flex",
					height: "190vh",
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
								to="/merchant/merchant-dashboard"
								activeClassName="activeClicked">
								<CDBSidebarMenuItem className="hoverbutton" icon="columns">
									Dashboard
								</CDBSidebarMenuItem>
							</NavLink>
							{/* <NavLink exact to="/tables" activeClassName="activeClicked"> */}
							<SubMenu
								title="User Profile"
								style={{ marginLeft: "18px" }}
								icon={<FaRegUserCircle style={{ marginRight: "19px" }} />}>
								<NavLink
									exact
									to="/user/user-profile"
									activeClassName="activeClicked">
									<CDBSidebarMenuItem>User Profile</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									exact
									to="/user/user-resetpassword"
									activeClassName="activeClicked">
									<CDBSidebarMenuItem>Change Password</CDBSidebarMenuItem>
								</NavLink>
							</SubMenu>
							{/* </NavLink> */}

							<NavLink
								exact
								to="/merchant/merchant-dashboard"
								activeClassName="activeClicked">
								<CDBSidebarMenuItem className="hoverbutton" icon="columns">
									User Deposits
								</CDBSidebarMenuItem>
							</NavLink>

							<NavLink
								exact
								to="/merchant/merchant-transaction-history"
								activeClassName="activeClicked"
								icon={<FaRegUserCircle style={{ marginRight: "19px" }} />}>
								<CDBSidebarMenuItem className="hoverbutton" icon="columns">
									Transaction Histories
								</CDBSidebarMenuItem>
							</NavLink>

							<NavLink
								exact
								to="/merchant/deposit-to-merchant-invoice"
								activeClassName="activeClicked"
								icon={<FaRegUserCircle style={{ marginRight: "19px" }} />}>
								<CDBSidebarMenuItem className="hoverbutton" icon="columns">
									Deposits to merchant
								</CDBSidebarMenuItem>
							</NavLink>
							<NavLink
								exact
								to="/merchant/merchant-sidebar"
								activeClassName="activeClicked"
								icon={<FaRegUserCircle style={{ marginRight: "19px" }} />}>
								<CDBSidebarMenuItem className="hoverbutton" icon="columns">
									Reports
								</CDBSidebarMenuItem>
							</NavLink>
							<NavLink
								exact
								to="/merchant/merchant-withdraw-request"
								activeClassName="activeClicked"
								icon={<FaRegUserCircle style={{ marginRight: "19px" }} />}>
								<CDBSidebarMenuItem className="hoverbutton" icon="columns">
									Withdrawal Requests
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
