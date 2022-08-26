import React from 'react'
import Sidebar from "../../components/SideBar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';


function Role() {
    
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
        <h1>Roles</h1>
            
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
                        <th scope="col">Role Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Count</th>
                        <th scope="col">Granted</th>
                        <th scope="col">Denied</th>
                        <th scope="col">Last Update</th>
                        <th scope="col">Permission</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="user-table-data">
                            <th scope="row" className="trans-id">1.</th>
                            <td>Bullsyeymarket</td>
                            <td>For bulleye</td>
                            <td>0</td>
                            <td>2</td>
                            <td>39</td>
                            <td>18/10/201916:54:26</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                             <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                             </svg></td>
                            <td><RiDeleteBinLine/><BiEdit/></td>
                        </tr>
                        <tr className="user-table-data">
                            <th scope="row" className="trans-id">2.</th>
                            <td>Genexfx</td>
                            <td>For it suppor</td>
                            <td>0</td>
                            <td>41</td>
                            <td>0</td>
                            <td>19/07/202101:30:20</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                             <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                             </svg></td>
                            <td><RiDeleteBinLine/><BiEdit/></td>
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

export default Role
