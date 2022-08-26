import React from "react"


import './user-forgotpassword.css'

const UserForgotPassword=()=> {

    return <div className="user-body">
            <div className="user-forgot-container">
            <h6 className="user-forgot">Online <br/><span> payment</span></h6>
            <div className="card-body card-body-forgot shadow-lg p-3 bg-white rounded">
                <form>
                    <div className="mb-3">
                    <input type="password" className="form-control form-control-forgot" placeholder="email"/>
                    </div>
                    <div className="button mt-4">
                    <a  className="btn forgot-btn" href="/resetpassword">Reset Password</a>
                    </div>
                </form>
            </div>  
        </div>  
    </div>
    
}
    


export default UserForgotPassword;