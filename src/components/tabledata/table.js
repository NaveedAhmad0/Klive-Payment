import React from 'react'
import "./table.css"
const table = () => {
  return (
    <div>
      <div className="mt-5">
                        <div className="transaction-heading">
                            <h3>transaction Summary</h3>
                        </div>
                        <div className="card tranasction-body shadow-lg" >
                            <div className="card-body cardbody123">
                            <table class="table">
                                <thead className="dashboard-table-heading">
                                    <tr>
                                    <th scope="col">Trans.Id</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Merchant</th>
                                    <th scope="col">order No.</th>
                                    <th scope="col">payment Channel</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Action</th>
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
                                        <td>
                                            <button className="btn btn-success">play</button>
                                        </td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">XYZ Store ID</th>
                                        <td>June 4,2020</td>
                                        <td>cashback</td>
                                        <td>cashback</td>
                                        <td>completed</td>
                                        <td>+$5,553</td>
                                        <td>
                                            <button className="btn btn-success">play</button>
                                        </td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">XYZ Store ID</th>
                                        <td>June 4,2020</td>
                                        <td>cashback</td>
                                        <td>cashback</td>
                                        <td>completed</td>
                                        <td>+$5,553</td>
                                        <td>
                                            <button className="btn btn-success">play</button>
                                        </td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">XYZ Store ID</th>
                                        <td>June 4,2020</td>
                                        <td>cashback</td>
                                        <td>cashback</td>
                                        <td>completed</td>
                                        <td>+$5,553</td>
                                        <td>
                                            <button className="btn btn-success">play</button>
                                        </td>
                                    </tr>
                                    <tr className="user-table-data">
                                        <th scope="row" className="trans-id">XYZ Store ID</th>
                                        <td>June 4,2020</td>
                                        <td>cashback</td>
                                        <td>cashback</td>
                                        <td>completed</td>
                                        <td>+$5,553</td>
                                        <td>
                                            <button className="btn btn-success">play</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>  
                            </div>
                        </div>
                    </div> 
</div>
  )
}

export default table