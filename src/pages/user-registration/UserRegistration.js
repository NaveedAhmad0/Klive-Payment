import React from "react";
//  import { Link } from "react-router-dom";

import './user-registration.css'
const UserRegistration=()=> {

    return <div className="reg-body">
            <div className="reg-container">
                    <h6 className="reg-text">Online <br/><span> payment</span>
                        </h6>
                <div className="card-body reg-card-body shadow-lg p-3 bg-white rounded" style={{minWidth: "max-Content"}}>
                    <form>
                        <div className="mb-3">
                        <input type="text" className="form-control reg-form-control" placeholder="company Name"/>
                        </div>
                        <div className="mb-3">
                        <input type="number" className="form-control reg-form-control" placeholder="mobile number"/>
                        </div>
                        <div className="mb-3">
                        <input type="email" className="form-control reg-form-control" placeholder="email..."/>
                        </div>
                        <div className="mb-3">
                        <input type="password" className="form-control reg-form-control" placeholder="password"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control reg-form-control" placeholder="conform password"/>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Accept the terms and condition of use*
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I accept and consent to the the collection <br></br><span>use of personal information</span>
                            </label>
                        </div>
                        <div className="button mt-4">
                        <button type="button" className="btn reg-btn">Login</button>
                        <div className="signup mt-3">
                            <a href="/">Already have an account login</a>
                        </div>
                        </div>
                    </form>
                </div>  
            </div>
    </div>
    
}
export default UserRegistration;