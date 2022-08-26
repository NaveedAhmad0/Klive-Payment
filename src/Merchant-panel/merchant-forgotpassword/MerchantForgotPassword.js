import React from "react"


import './merchant-forgotpassword.css'

const forgotPassword=()=> {

    return <div className="body-merchant">
            <div className="merchant-forgot-container">
                <h6 className="merchant-text">Online <br/><span> payment</span></h6>
                <div className="card-body merchant-forgot-body shadow-lg p-3 bg-white rounded">
                    <form>
                        <div className="mb-3">
                        <input type="password" className="form-control merchant-forgot-forms" placeholder="email"/>
                        </div>
                        <div className="button mt-4">
                        <a  className="btn merchant-forgot-btn" href="/resetpassword">Reset Password</a>
                        </div>
                    </form>
                </div>  
            </div>
    </div>
}
    
export default forgotPassword;