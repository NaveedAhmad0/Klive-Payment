import React, {useState} from "react";

import MerchantSidebar from "../../components/merchant-sidebar/MerchantSidebar";
import './merchant-withdraw-request.css';
import Modal from "./modal/Modal-withdraw";

const UserWithdrawRequest=()=>{

const [isOpen, setIsOpen] = useState(false);

        return(
            <>
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12"  style={{ width: "100%" }}>
                        <MerchantSidebar/>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12"style={{ position: "absolute",marginLeft: "19rem",marginTop: "7rem",}}>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div className="card user-withdraw-card shadow-lg">
                                    <div className="card-body" style={{ minWidth: "-webkit-fill-available",maxWidth:"max-content", }}>
                                        <h5 className="user-withdraw-available">Available for withdraw</h5>
                                        <p className="user-withdraw-available-usd">
                                            -17,577,89<br></br>
                                            <span className="span-usd">USD</span>
                                            </p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="card user-withdraw-card shadow-lg">
                                    
                                    <div className="card-body">
                                        <h5 className="user-withdraw-current">current balance</h5>
                                        <p className="user-withdraw-current-usd">15,577,62<br></br>
                                        <span className="span-usd">USD</span></p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-4">
                            </div>
                        </div>
                        <button
							className="btn btn-request-withdrawal"
							onClick={() => setIsOpen(true)}>
							request withdrawal
						</button>
						{isOpen && <Modal setIsOpen={setIsOpen} />}
                  {/* transaction table */}

                     <div className="mt-5">
                        <div className="card shadow-lg" >
                            <div className="card-body" style={{ minWidth: "-webkit-fill-available",maxWidth:"max-content" }}>
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
                                    <th scope="col">Status</th>
                                    <th scope="col">withdrawal</th>
                                    <th scope="col">Transaction</th>
                                    <th scope="col">Creation Date</th>
                                    <th scope="col">Transfered Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-pending">pending</button>
                                        </th>
                                        <td className="">65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-pending">pending</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-sucess">sucess</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-cancel">cancel</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-pending">pending</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-cancel">cancel</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-pending">pending</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-cancel">cancel</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-sucess">sucess</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-pending">pending</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">
                                            <button className="btn btn-user-withdraw-cancel">cancel</button>
                                        </th>
                                        <td>65768</td>
                                        <td>12/30/2018 t0 05/25/2020</td>
                                        <td>06/26/2020 12.00am</td>
                                        <td>USD 1,071,904,61</td>
                                    </tr>
                                </tbody>
                            </table>  
                            </div>
                        </div>
                    </div> 
                    </div> 
                </div>
                <div>
                    
                </div>
            </>
        )
    
    
}

export default UserWithdrawRequest;