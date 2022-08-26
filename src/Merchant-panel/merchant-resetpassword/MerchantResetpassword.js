import React from "react"


import './merchant-resetpassword.css'

const ResetPassword=()=> {

      return<div className="merchant-body">
                <div className="merchant-container">
                    <h6 className="merchant-text">Online <br/><span> payment</span></h6>
                    <div className="card-body merchant-reset shadow-lg p-3 bg-white rounded">
                        <form>
                            <div className="mb-3">
                                <input type="password" className="form-control form-control-merchant-reset" placeholder="old password"/> 
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control form-control-merchant-reset" placeholder="new password"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control form-control-merchant-reset" placeholder="conformpassword"/>
                            </div>
                            <div className="button mt-4">
                                <button type="button" className="btn merchant-reset-btn">Change Password</button>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
}
    


export default ResetPassword