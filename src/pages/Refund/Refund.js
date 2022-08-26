import React from 'react'
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/SideBar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

function Refund() {
  
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
        <h1>Refund</h1>
            <div className="card shadow-lg" style={{width:"80%"}}>
                <div className="card-body" style={{minWidth: "-webkit-fill-available"}}>
                <div className='row'>
                      <div className='col'>
                      <span><input type="checkbox"/>Transaction Date</span>
                      <span><input type="checkbox"/>Payment Date</span>
                     </div>
                   </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="payment-inputs">
                                <FaSearch className="fasearch"/>
                                <input type="text" 
                                    className="form-control payment-inputs-design" 
                                    placeholder="keywords"
                                />
                            </div> 
                            

                            <div className="payment-inputs">
                                
                                <select className="form-select payment-inputs-design">
                                    <option selected>Merchant</option>
                                    <option value="1">Mr.</option>
                                    <option value="2">Mrs.</option>
                                </select>
                            </div>
                            <div className="payment-inputs">
                                <input type="date" 
                                    className="form-control payment-inputs-design" 
                                    placeholder="info@gmail.com"
                                />
                                
                            </div>
                            <div className="payment-inputs">
                                <button className="btn btn-deposit">Clear</button>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="payment-inputs">
                                
                                <select className="form-select payment-inputs-design">
                                    <option selected>All Channel</option>
                                    <option value="1">Mr.</option>
                                    <option value="2">Mrs.</option>
                                </select>
                            </div>

                            <div className="payment-inputs">
                                
                                <select className="form-select payment-inputs-design">
                                    <option selected>Trans Status</option>
                                    <option value="1">Success</option>
                                    <option value="2">Failed</option>
                                </select>
                            </div>
                            <div className="payment-inputs">
                                <input type="date" 
                                    className="form-control payment-inputs-design" 
                                    placeholder="to"
                                />
                            </div>
                            <div className="payment-inputs">
                                <button className="btn btn-deposit">Search</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <h5>Refund-Transaction</h5>
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
                        <th scope="col">Trans.Id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Merchant</th>
                        <th scope="col">order No.</th>
                        <th scope="col">payment Channel</th>
                        <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="user-table-data">
                            <th scope="row" className="trans-id">XYZ Store ID</th>
                            <td>June 4,2020</td>
                            <td>cashback</td>
                            <td>cashback</td>
                            <td>completed</td>
                            <td>+$5,553</td>
                        </tr>
                        <tr className="user-table-data">
                            <th scope="row" className="trans-id">XYZ Store ID</th>
                            <td>June 4,2020</td>
                            <td>cashback</td>
                            <td>cashback</td>
                            <td>completed</td>
                            <td>+$5,553</td>
                        </tr>
                        <tr className="user-table-data">
                            <th scope="row" className="trans-id">XYZ Store ID</th>
                            <td>June 4,2020</td>
                            <td>cashback</td>
                            <td>cashback</td>
                            <td>completed</td>
                            <td>+$5,553</td>
                        </tr>
                        <tr className="user-table-data">
                            <th scope="row" className="trans-id">XYZ Store ID</th>
                            <td>June 4,2020</td>
                            <td>cashback</td>
                            <td>cashback</td>
                            <td>completed</td>
                            <td>+$5,553</td>
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

export default Refund
