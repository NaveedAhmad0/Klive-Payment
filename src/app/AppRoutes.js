import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

// USER PANEL IMPORTS

const AdminDashboard = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Dashboard/AdminDashboard")
);
const AdminTransaction = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Admin-Payment_Transaction/AdminPaymentTransaction"
	)
);
const AdminSettlementReport = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Admin-Settlement-Report/AdminSettlementReport"
	)
);
const AdminVoid = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Void/AdminVoid")
);
const AdminRefund = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Refund/AdminRefund")
);
const AdminProfile = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Profile/AdminProfile")
);
const AdminChangePassword = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Admin-Change-Password/AdminChangePassword"
	)
);
const AdminMerchantProfile = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/AdminPanel-Merchant-profile/AdminMerchantProfile"
	)
);
const AdminManageUser = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Manage-users/AdminManageUser")
);
const AdminManageRole = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Manage-Role/AdminManageRole")
);

class AppRoutes extends Component {
	render() {
		return (
			<Suspense fallback={<Spinner />}>
				<Switch>
					<Route exact path="/admin/dashboard" component={AdminDashboard} />

					<Route path="/basic-ui/buttons" component={Buttons} />
					<Route path="/basic-ui/dropdowns" component={Dropdowns} />

					<Route
						path="/form-Elements/basic-elements"
						component={BasicElements}
					/>

					<Route path="/tables/basic-table" component={BasicTable} />

					<Route path="/icons/mdi" component={Mdi} />

					<Route path="/charts/chart-js" component={ChartJs} />

					<Route path="/user-pages/login-1" component={Login} />
					<Route path="/user-pages/register-1" component={Register1} />

					{/*------------------------- ADMIN PANEL ROUTES -------------------------- */}

					<Route
						path="/admin/AdminPaymentTransaction"
						component={AdminTransaction}
					/>
					<Route
						path="/admin/AdminSettlementReport"
						component={AdminSettlementReport}
					/>
					<Route path="/admin/AdminVoid" component={AdminVoid} />
					<Route path="/admin/AdminRefund" component={AdminRefund} />
					<Route path="/admin/AdminProfile" component={AdminProfile} />
					<Route
						path="/admin/AdminChangePassword"
						component={AdminChangePassword}
					/>
					<Route
						path="/admin/AdminMerchantProfile"
						component={AdminMerchantProfile}
					/>
					<Route path="/admin/AdminManageUser" component={AdminManageUser} />
					<Route path="/admin/AdminManageRole" component={AdminManageRole} />

					{/*---------------------------- ERROR PAGE ------------------ */}

					<Route path="/error-pages/error-404" component={Error404} />
					<Route path="/error-pages/error-500" component={Error500} />

					<Redirect to="/admin/dashboard" />
				</Switch>
			</Suspense>
		);
	}
}

export default AppRoutes;
