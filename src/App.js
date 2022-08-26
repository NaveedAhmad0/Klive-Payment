import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgotPassword from "./components/forgotpassword/ForgotPassword.jsx";
// import Team from "./components/navbar/pages/Team";
import "./App.css";

//Admin Panel Imports
import Dashboard from "./pages/Dashboard-page/Dasboard-page";
import Sidebar from "./components/SideBar/Sidebar";
import Chart from "./components/Charts/chart";
import Payment_transaction from "./pages/Transaction/Payment_transaction";
import AdminUserDeposits from "./pages/user-deposits/UserDeposits";
import Settlement from "./pages/Transaction/Settlement";
import Void from "./pages/Void/Void";
import Refund from "./pages/Refund/Refund";
import AdminUserProfile from "./pages/UserProfile/UserProfile";
import ChangePassword from "./pages/UserProfile/ChangePassword";
import Merchant from "./pages/Merchant/merchant";
import User from "./pages/UserManage/User";
import Role from "./pages/UserManage/Role";
import UserRegistration from "./pages/user-registration/UserRegistration";
import UserLogin from "./pages/user-login/UserLogin";
import UserResetPassword from "./pages/user-resetpassword/UserResetpassword";
import UserForgotPassword from "./pages/user-forgotpassword/UserForgotPassword";

//User Panel imports
import UserDashboard from "./User-Panel/user-dashboard/UserDashboard";
import UserTransactionHistory from "./User-Panel/user-transction-history/UserTransactionHistory";
import UserDeposits from "./User-Panel/user-deposits/UserDeposits";
import DepositToMechants from "./User-Panel/deposit-to-merchants/DepositToMechants";
import UserProfile from "./User-Panel/user-profile/UserProfile";
import UserWithdrawRequest from "./User-Panel/user-withdraw-request/UserWithdrawRequest";

// MERCHANT Imports
import MerchantLogin from "./Merchant-panel/merchant-login/MerchantLogin";
import MerchantRegistration from "./Merchant-panel/merchant-registration/MerchantRegistration";
import MerchantForgotPassword from "./Merchant-panel/merchant-forgotpassword/MerchantForgotPassword";
import MerChantResetPassoword from "./Merchant-panel/merchant-resetpassword/MerchantResetpassword";
import MerchantDashboard from "./Merchant-panel/merchat-dashboard/MerchantDashboard";
import MerchantInvoice from "./Merchant-panel/merchant-create-invoice/MechantNewInvoice";
import Modal from "./Merchant-panel/user-withdraw-request/modal/Modal-withdraw";
import DepositToMechantsInvoice from "./Merchant-panel/deposit-to-merchants-invoice/DepositToMechantsInvoice";
import MerchantTransactionHistory from "./Merchant-panel/merchant-transction-history/MerchantTransactionHistory";
import HomePage from "./HomePage";

function App() {
	return (
		<BrowserRouter>
			<div className="">
				<div className=""></div>
			</div>
			<Routes className="">
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/admin" element={<Login />}></Route>
				<Route path="/admin/registration" element={<Registration />}></Route>
				<Route
					path="/admin/forgotpassword"
					element={<ForgotPassword />}></Route>
				<Route path="/admin/resetpassword" element={<ResetPassword />}></Route>
				<Route path="/admin/Sidebar" element={<Sidebar />}></Route>
				<Route path="/admin/dashboard" element={<Dashboard />}></Route>
				<Route path="/admin/chart" element={<Chart />}></Route>
				<Route path="/admin/user-login" element={<UserLogin />}></Route>
				<Route
					path="/admin/user-registration"
					element={<UserRegistration />}></Route>
				<Route
					path="/admin/user-forgotpassword"
					element={<UserForgotPassword />}></Route>
				<Route
					path="/admin/user-resetpassword"
					element={<UserResetPassword />}></Route>
				<Route
					path="/admin/Payment_transaction"
					element={<Payment_transaction />}></Route>
				<Route
					path="/admin/user-deposits"
					element={<AdminUserDeposits />}></Route>
				<Route path="/admin/Settlement" element={<Settlement />}></Route>
				<Route path="/admin/Void" element={<Void />}></Route>
				<Route path="/admin/Refund" element={<Refund />}></Route>
				<Route path="/admin/UserProfile" element={<AdminUserProfile />}></Route>
				<Route
					path="/admin/ChangePassword"
					element={<ChangePassword />}></Route>
				<Route path="/admin/Merchant" element={<Merchant />}></Route>
				<Route path="/admin/User" element={<User />}></Route>
				<Route path="/admin/Role" element={<Role />}></Route>

				{/* USER PANEL ROUTES  */}

				{/* <Route path="/user" element={<Login />}></Route> */}
				<Route path="/user/user-login" element={<UserLogin />}></Route>
				<Route path="/user/Sidebar" element={<Sidebar />}></Route>
				<Route
					path="/user/user-registration"
					element={<UserRegistration />}></Route>
				<Route
					path="/user/user-forgotpassword"
					element={<UserForgotPassword />}></Route>
				<Route
					path="/user/user-resetpassword"
					element={<UserResetPassword />}></Route>
				<Route path="/user/user-dashboard" element={<UserDashboard />}></Route>
				<Route path="/user/user-profile" element={<UserProfile />}></Route>
				<Route path="/user/user-deposits" element={<UserDeposits />}></Route>
				<Route
					path="/user/user-transaction-history"
					element={<UserTransactionHistory />}></Route>
				<Route
					path="/user/deposit-to-merchants"
					element={<DepositToMechants />}></Route>
				<Route
					path="/user/user-withdraw-request"
					element={<UserWithdrawRequest />}></Route>

				{/* MERCHANT Panel ROUTES  */}

				<Route
					path="/merchant/merchant-login"
					element={<MerchantLogin />}></Route>
				<Route
					path="/merchant/merchant-registration"
					element={<MerchantRegistration />}></Route>
				<Route
					path="/merchant/merchant-forgotpassword"
					element={<MerchantForgotPassword />}></Route>
				<Route
					path="/merchant/merchant-invoice"
					element={<MerchantInvoice />}></Route>
				<Route
					path="/merchant/merchant-resetpassword"
					element={<MerChantResetPassoword />}></Route>
				<Route
					path="/merchant/depositTomerchant-Invoice"
					element={<DepositToMechantsInvoice />}></Route>
				<Route
					path="/merchant/merchant-transaction-history"
					element={<MerchantTransactionHistory />}></Route>
				<Route
					path="/merchant/merchant-dashboard"
					element={<MerchantDashboard />}></Route>
				<Route path="/merchant/modal" element={<Modal />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
