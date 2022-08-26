import React from "react"


import './resetpassword.css'

const ResetPassword=()=> {

    return <div className="containe">
    <h6>Online <br/><span> payment</span>
        </h6>
<div className="card-body shadow-lg p-3 bg-white rounded card-body-reset">
    <form>
        <div className="mb-3">
        <input type="password" className="form-control form-control-reset" placeholder="old password"/>
        </div>
        <div className="mb-3">
        <input type="password" className="form-control form-control-reset" placeholder="new password"/>
        </div>
        <div className="mb-3">
        <input type="password" className="form-control form-control-reset" placeholder="conformpassword"/>
        </div>
        <div className="button mt-4">
        <button type="button" className="btn">Change Password</button>
        </div>
    </form>
</div>  
</div>
}
    


export default ResetPassword