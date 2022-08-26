import React from "react"


import './user-resetpassword.css'

const UserResetpassword=()=> {

      return<div className="user-body">
                <div className="user-container">
                <h6 className="user-text">Online <br/><span> payment</span></h6>
                <div className="card-body user-reset shadow-lg p-3 bg-white rounded">
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
                            <button type="button" className="btn user-reset-btn">Change Password</button>
                        </div>
                    </form>
                </div>  
            </div>
</div>
}
    


export default UserResetpassword;