import React from 'react'
import Sidebar from "../../components/SideBar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiEdit } from 'react-icons/bi';

function User() {
  
  return (
    <>
    <div className="row">
        <div className="col-2" style={{width:"100%"}}>
            <Sidebar/>     
        </div>
        <div className="col-10" style={{
            position: "absolute",
            marginLeft: "19rem",
            marginTop: "7rem",
          }}>
        <h1>Users</h1>
            
            <div className="card">
                <div className="card-body" style={{minWidth: "max-Content"}}>
                <div className="d-flex justify-content-between mb-2">
                                    <form className="trans-form" id="transform">
                                        <input className="form-control trans-form" id="transforminput" type="search" placeholder="Search..." />
                                    </form>
                                <div>
                                    <div class="dropdown">
                                    <span className="dropdown-space">
                                        show 
                                    </span>
                                    
                                    <button class="btn btn-secondary dropdown-toggle transaction-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        10
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                    <span className="dropdown-space">
                                        Entries | Showing 1 to 1 of 1 entries
                                    </span>
                                    </div>
                                    
                                </div>
                                    <nav aria-label="...">
                                        <ul className="pagination pagination-top">
                                            <li className="page-item transaction-pagination">
                                            <a className="page-link" href="/" tabindex="-1" aria-disabled="true">Previous</a>
                                            </li>
                                            <li className="page-item active transaction-pagination">
                                                <a className="page-link transaction-pagination-number" href="/">1</a></li>
                                            <li className="page-item transaction-pagination">
                                            <a className="page-link" href="/">Next</a>
                                            </li>
                                        </ul>
                                        </nav>
                                    
                                </div>
                <table class="table"> 
                    <thead className="dashboard-table-heading">
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Status</th>
                        <th scope="col">Last Update</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="user-table-data">
                            <th scope="row" className="trans-id">1.</th>
                            <td>Albert</td>
                            <td>albert@gmail.com</td>
                            <td>SuperAdmin</td>
                            <td><button type="button" class="btn btn-secondary">Active</button></td>
                            <td>18/10/201916:54:26</td>
                            <td><BiEdit/></td>
                        </tr>
                        <tr className="user-table-data">
                            <th scope="row" className="trans-id">2.</th>
                            <td>Albert</td>
                            <td>albert@gmail.com</td>
                            <td>SuperAdmin</td>
                            <td><button type="button" class="btn btn-secondary">Active</button></td>
                            <td>18/10/201916:54:26</td>
                            <td><BiEdit/></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</>
)


}

export default User
