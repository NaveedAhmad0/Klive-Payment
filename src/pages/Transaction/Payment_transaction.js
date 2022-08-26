import React from 'react'
import './Payment.css';
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/SideBar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

function Payment_transaction() {
  
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
        <h1>Payment-Transaction</h1>
            <div className="card shadow-lg"style={{width:"80%"}}>
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
                                    <option selected>Order No</option>
                                    <option value="1">1.</option>
                                    <option value="2">2.</option>
                                </select>
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
                                    <option selected>All Routes</option>
                                    <option value="1">Success</option>
                                    <option value="2">Failed</option>
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

            <h5>Transaction-Summary</h5>
            <div className="card" style={{width:"100%"}}>
                <div className="card-body" style={{minWidth: "max-Content"}} >
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
            <h5>Export TH</h5>
            <div className='row'>
              <div className='col-2'>
                <div className='card'>
                  <div className='card-body'>
                    <p><b>Export</b></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-filetype-xls" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM6.472 15.29a1.176 1.176 0 0 1-.111-.449h.765a.578.578 0 0 0 .254.384c.07.049.154.087.25.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.625.625 0 0 0-.247-.181.923.923 0 0 0-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 0 0-.184.384c0 .121.048.22.143.3a.97.97 0 0 0 .405.175l.62.143c.217.05.406.12.566.211a1 1 0 0 1 .375.358c.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-2.945-3.358h-.893L1.81 13.37h-.036l-.832-1.438h-.93l1.227 1.983L0 15.931h.861l.853-1.415h.035l.85 1.415h.908L2.253 13.94l1.274-2.007Zm2.727 3.325H4.557v-3.325h-.79v4h2.487v-.675Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='col-2'>
                <div className='card'>
                  <div className='card-body'>
                    <p><b>with Exchange Rates</b></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-filetype-xls" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM6.472 15.29a1.176 1.176 0 0 1-.111-.449h.765a.578.578 0 0 0 .254.384c.07.049.154.087.25.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.625.625 0 0 0-.247-.181.923.923 0 0 0-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 0 0-.184.384c0 .121.048.22.143.3a.97.97 0 0 0 .405.175l.62.143c.217.05.406.12.566.211a1 1 0 0 1 .375.358c.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-2.945-3.358h-.893L1.81 13.37h-.036l-.832-1.438h-.93l1.227 1.983L0 15.931h.861l.853-1.415h.035l.85 1.415h.908L2.253 13.94l1.274-2.007Zm2.727 3.325H4.557v-3.325h-.79v4h2.487v-.675Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</>
)


}

export default Payment_transaction
