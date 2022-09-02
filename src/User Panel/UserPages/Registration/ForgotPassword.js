import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <h4>Online<br/>Payment</h4>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div className="mt-3">
                    <Link className="btn btn-block btn btn-success btn-lg btn-block rounded-pill" to="/dashboard">Reset Password</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPassword
