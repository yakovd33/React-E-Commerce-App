import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';

function Orders() {
    return (
        <div className="card">
            <h3>Website Orders</h3><br />

            <div id="orders-filtering">
                <div id="orders-search">
                    <BiSearch/> <input type="text" placeholder="Search by order ID, name or email..." />
                </div>

                <div id="status-filter">
                    <span id="status-label">Status:</span>
                    <select name="" id="">
                        <option value="">All</option>
                        <option value="">Processing</option>
                        <option value="">Completed</option>
                    </select>
                </div>
            </div>

            <div id="orders-card">
                <table id="orders-table">
                    <tr className="orders-table-heading">
                        <th>
                            <input type="checkbox" id="select-all-checkbox" />
                        </th>
                        <th>#</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Revenue</th>
                    </tr>

                    <tr>
                        <td><input type="checkbox" class="select-row" /></td>
                        <td>1571</td>
                        <td>06/11/2021, 13:24</td>
                        <td className="status-col completed">
                            <span className="status-icon"><BsCheck/></span>
                            <span className="status-name">Completed</span>
                        </td>
                        <td>yakovd33@gmail.com</td>
                        <td>Nail Polish Remover</td>
                        <td>9.99$</td>
                    </tr>

                    <tr>
                        <td><input type="checkbox" class="select-row" /></td>
                        <td>1571</td>
                        <td>06/11/2021, 13:24</td>
                        <td className="status-col completed">
                            <span className="status-icon"><BsCheck/></span>
                            <span className="status-name">Completed</span>
                        </td>
                        <td>yakovd33@gmail.com</td>
                        <td>Nail Polish Remover</td>
                        <td>9.99$</td>
                    </tr>

                    <tr>
                        <td><input type="checkbox" class="select-row" /></td>
                        <td>1571</td>
                        <td>06/11/2021, 13:24</td>
                        <td className="status-col completed">
                            <span className="status-icon"><BsCheck/></span>
                            <span className="status-name">Completed</span>
                        </td>
                        <td>yakovd33@gmail.com</td>
                        <td>Nail Polish Remover</td>
                        <td>9.99$</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Orders
