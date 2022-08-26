import React from "react"


import './forgotpassword.css'

const ResetPassword=()=> {

    return <div className="containe">
    <h6>Online <br/><span> payment</span>
        </h6>
<div className="card-body shadow-lg p-3 bg-white rounded">
    <form>
        <div className="mb-3">
        <input type="password" className="form-control form-control-forgot" placeholder="email"/>
        </div>
        <div className="button mt-4">
        <a  className="btn" href="/resetpassword">Reset Password</a>
        </div>
    </form>
</div>  
</div>
}
    


export default ResetPassword