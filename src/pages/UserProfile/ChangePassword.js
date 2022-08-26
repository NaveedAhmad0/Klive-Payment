import React from 'react'
import Sidebar from "../../components/SideBar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

function ChangePassword() {
  
  return (
    <>
    <div className="row">
        <div className="col-2" style={{width:"100%"}}>
            <Sidebar/>     
        </div>
        <div className="col-10 " style={{
            position: "absolute",
            marginLeft: "19rem",
            marginTop: "7rem",
          }}>
        <h1>Change Password</h1>
            <div className="card shadow-lg">
                <div className="card-body" style={{minWidth: "max-Content"}}>
                    <div className="row">
                        <div className="col-12">
                            <div className="payment-inputs">
                                <input type="text" 
                                    className="form-control payment-inputs-design" 
                                    placeholder="Old Password"
                                />
                            </div> 
                            <div className="payment-inputs">
                                <input type="text" 
                                    className="form-control payment-inputs-design" 
                                    placeholder="New Password"
                                />
                            </div> 
                            <div className="payment-inputs">
                                <input type="text" 
                                    className="form-control payment-inputs-design" 
                                    placeholder="Confirm New Password"
                                />
                            </div> 
                            </div>
                            <div className="payment-inputs">
                                <button className="btn btn-deposit"><b>Change Password</b></button>
                            </div>
                        </div>
                    </div>
                 </div>       
            </div>
        </div>
</>
)


}

export default  ChangePassword
