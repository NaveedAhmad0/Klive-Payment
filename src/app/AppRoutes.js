import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

// const HomePage = lazy(() => import("../Homepage/HomePage"));
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

// ADMIN PANEL IMPORTS

const AdminDashboard = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Dashboard/AdminDashboard")
);
const AdminLogin = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Auth/Login")
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
const GetAdminProfile = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin Get Profile/GetUserProfile")
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
// -------------------------------- USER PANEL IMPORTS ---------------------------------------------

const UserRegistration = lazy(() =>
	import("../User Panel/UserPages/Registration/UserRegistration")
);

const ForgotPassword = lazy(() =>
	import("../User Panel/UserPages/Registration/ForgotPassword")
);
const ResetPassword = lazy(() =>
	import("../User Panel/UserPages/Registration/ResetPassword")
);

const UserLogin = lazy(() =>
	import("../User Panel/UserPages/Registration/UserLogin")
);

const UserDashboard = lazy(() =>
	import("../User Panel/UserPages/UserDashboard/UserDashboard")
);

const UserProfile = lazy(() =>
	import("../User Panel/UserPages/UserProfile/UserProfile")
);
const GetUserProfile = lazy(() =>
	import("../User Panel/UserPages/Get user Profile/GetUserProfile")
);

const UserDeposites = lazy(() =>
	import("../User Panel/UserPages/UserDeposites/UserDeposites")
);

const UserTransaction = lazy(() =>
	import("../User Panel/UserPages/UserTransaction/UserTransaction")
);

const DepositeToMerchandise = lazy(() =>
	import("../User Panel/UserPages/DepositeToMerchandise/DepositeToMerchandise")
);

const UserWithdraw = lazy(() =>
	import("../User Panel/UserPages/UserWithdraw/UserWithdraw")
);
// -------------------------------- MERCHANT PANEL IMPORTS ---------------------------------------------

const MerchantDashboard = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-Dashboard/MerchantDashboard"
	)
);
const MerchantRegistration = lazy(() =>
	import("../Merchant Panel/Merchant-Panel-Pages/Merchant-Auth/Register")
);
const MerchantLogin = lazy(() =>
	import("../Merchant Panel/Merchant-Panel-Pages/Merchant-Auth/Login")
);
const MerchantForgotPassowrd = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Components/Forgot password/MerchantForgotPassword"
	)
);

const MerchantProfile = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-Profile/MerchantProfile"
	)
);
const MerchantChangePassword = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-Change-Password/UserChangePassword"
	)
);
const GetMerchantProfile = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Components/Get user Profile/GetUserProfile"
	)
);

const MerchantUserDeposits = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-User-Deposits/MerchantUserDeposits"
	)
);

const MerchantTransactionHistory = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Merchant-Transaction-History/MerchantTransactionHistory"
	)
);

const DepositsToMerchant = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/Deposits-To-Merchant/DepositsToMerchant"
	)
);

const WithdrawalRequest = lazy(() =>
	import(
		"../Merchant Panel/Merchant-Panel-Pages/WithdrawalRequest/WithdrawalRequest"
	)
);

class AppRoutes extends Component {
	render() {
		return (
			<Suspense fallback={<Spinner />}>
				<Switch>
					{/* <Route exact path="/homepage" component={HomePage} /> */}

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
					<Route exact path="/admin/login" component={AdminLogin} />

					<Route exact path="/admin/dashboard" component={AdminDashboard} />

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
					<Route path="/admin/edit-AdminProfile" component={AdminProfile} />
					<Route path="/admin/get-profile" component={GetAdminProfile} />
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
					{/*------------------------- USER PANEL ROUTES -------------------------- */}
					<Route
						path="/user/Registration/UserRegistration"
						component={UserRegistration}
					/>

					<Route
						path="/user/Registration/ForgotPassword"
						component={ForgotPassword}
					/>

					<Route
						path="/user/Registration/ResetPassword"
						component={ResetPassword}
					/>

					<Route path="/user/Registration/UserLogin" component={UserLogin} />

					<Route path="/user/UserDashboard" component={UserDashboard} />

					<Route path="/user/EditProfile" component={UserProfile} />
					<Route path="/user/UserProfile" component={GetUserProfile} />

					<Route path="/user/UserDeposites" component={UserDeposites} />

					<Route path="/user/UserTransaction" component={UserTransaction} />

					<Route
						path="/user/DepositeToMerchandise"
						component={DepositeToMerchandise}
					/>

					<Route path="/user/UserWithdraw" component={UserWithdraw} />

					{/*------------------------- MERCHANT PANEL ROUTES -------------------------- */}

					<Route path="/merchant/dashboard" component={MerchantDashboard} />
					<Route path="/merchant/profile" component={MerchantProfile} />
					<Route
						path="/merchant/reset-password"
						component={MerchantChangePassword}
					/>
					<Route
						path="/merchant/forgot-password"
						component={MerchantForgotPassowrd}
					/>
					<Route
						exact
						path="/merchant/registration"
						component={MerchantRegistration}
					/>

					<Route exact path="/merchant/login" component={MerchantLogin} />
					<Route
						path="/merchant/merchant-user-deposits"
						component={MerchantUserDeposits}
					/>

					<Route
						path="/merchant/transactionhistory"
						component={MerchantTransactionHistory}
					/>

					<Route
						path="/merchant/deposits-to-merchant"
						component={DepositsToMerchant}
					/>

					<Route
						path="/merchant/withdrawalrequest"
						component={WithdrawalRequest}
					/>
					<Route
						path="/merchant/GetUserProfile"
						component={GetMerchantProfile}
					/>

					{/*---------------------------- ERROR PAGE ------------------ */}

					<Route path="/error-pages/error-404" component={Error404} />
					<Route path="/error-pages/error-500" component={Error500} />

					<Redirect to="/homepage" />
				</Switch>
			</Suspense>
		);
	}
}

export default AppRoutes;
