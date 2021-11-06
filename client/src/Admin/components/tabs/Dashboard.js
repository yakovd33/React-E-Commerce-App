import React from 'react';
import { BsBox } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    {
        name: 'January', revenue: 500
    }, {
        name: 'Fabruary', revenue: 1200
    }, {
        name: 'March', revenue: 790
    }, {
        name: 'April', revenue: 8153
    }
];

function Dashboard() {
    return (
        <div>
            <div id="dashboard-numeric-cards">
                <div className="dashboard-numeric-card card">
                    <div className="icon-wrap">
                        <div className="icon">
                            <MdAttachMoney />
                        </div>
                    </div>

                    <div className="textual-wrap">
                        <div className="number">304,891$</div>
                        <div className="det">Yearly revenue</div>
                    </div>
                </div>

                <div className="dashboard-numeric-card card">
                    <div className="icon-wrap">
                        <div className="icon">
                            <BsBox />
                        </div>
                    </div>

                    <div className="textual-wrap">
                        <div className="number">2320</div>
                        <div className="det">Total Orders</div>
                    </div>
                </div>

                <div className="dashboard-numeric-card card">
                    <div className="icon-wrap">
                        <div className="icon">
                            <BsBox />
                        </div>
                    </div>

                    <div className="textual-wrap">
                        <div className="number">2320</div>
                        <div className="det">Total Orders</div>
                    </div>
                </div>

                <div className="dashboard-numeric-card card">
                    <div className="icon-wrap">
                        <div className="icon">
                            <BsBox />
                        </div>
                    </div>

                    <div className="textual-wrap">
                        <div className="number">2320</div>
                        <div className="det">Total Orders</div>
                    </div>
                </div>
            </div>
            
            <div id="dashboard-earnings-chart" className="card">
                <h4 className="card-title">Yearly Revenue</h4>
                <LineChart height={300} width={document.getElementById('dashboard-earnings-chart') && document.getElementById('dashboard-earnings-chart').offsetWidth - 450} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

            <div id="top-selling-products-section" className="card">
                <h4 className="card-title">Top Selling Products</h4>

                <table id="top-selling-products-table" className="product-table">
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Sale</th>
                        <th>Earning</th>
                        <th>Product Availability</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td className="product-table-name-col">
                            <img src={ `${process.env.PUBLIC_URL}/images/products/test5.jpg` } alt="" className="product-table-img"/>
                            6 Color Candy
                        </td>
                        <td>2471</td>
                        <td>23,588$</td>
                        <td><span className="stock-badge in-stock">In Stock</span></td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td className="product-table-name-col">
                            <img src={ `${process.env.PUBLIC_URL}/images/products/test5.jpg` } alt="" className="product-table-img"/>
                            6 Color Candy
                        </td>
                        <td>2471</td>
                        <td>23,588$</td>
                        <td><span className="stock-badge out-stock">Out Of Stock</span></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Dashboard
