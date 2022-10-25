/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {USER,USER_1,USER_2,USER_3,USER_4,AVATAR_06,AVATAR_07,AVATAR_08,AVATAR_12, AVATAR_14,AVATAR_17} from '../../imagepath'

import { AreaChart,ResponsiveContainer, Area,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import "../index.css"

const areachartdata = [
        { y: '2013', "Revenue": 60},
        { y: '2014', "Revenue": 100},
        { y: '2015', "Revenue": 240},
        { y: '2016', "Revenue": 120},
        { y: '2017', "Revenue": 80},
        { y: '2018', "Revenue": 100},
        { y: '2019', "Revenue": 300},
];
const linechartdata = [
      { y: '2015', "Doctors": 100, "Patients": 30},
      { y: '2016', "Doctors": 20,  "Patients": 60},
      { y: '2017', "Doctors": 90,  "Patients": 120},
      { y: '2018', "Doctors": 50,  "Patients": 80},
      { y: '2019', "Doctors": 120,  "Patients": 150},
];
class AdminDashboard extends Component {
  UNSAFE_componentWillMount (){
    let firstload = localStorage.getItem("firstload")
    if(firstload === "true"){
        setTimeout(function() {
          window.location.reload(1)
          localStorage.removeItem("firstload")
        },1000)
    }
  }

   render() {
      return (
        <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Welcome Admin!</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon text-primary border-primary">
                      <i className="fe fe-users" />
                    </span>
                    <div className="dash-count">
                      <h3>168</h3>
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6 className="text-muted">Members</h6>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-primary w-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon text-success">
                      <i className="fe fe-credit-card" />
                    </span>
                    <div className="dash-count">
                      <h3>487</h3>
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6 className="text-muted">Appointments</h6>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-success w-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon text-danger border-danger">
                      <i className="fe fe-star-o" />
                    </span>
                    <div className="dash-count">
                      <h3>485</h3>
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6 className="text-muted">Mentoring Points</h6>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-danger w-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon text-warning border-warning">
                      <i className="fe fe-folder" />
                    </span>
                    <div className="dash-count">
                      <h3>$62523</h3>
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6 className="text-muted">Revenue</h6>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-warning w-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              {/* Sales Chart */}
              <div className="card card-chart">
                <div className="card-header">
                  <h4 className="card-title">Revenue</h4>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width='100%' height={342}>
                    <AreaChart
                      data={areachartdata}
                      margin={{
                        top: 5, right: 5, left: 5, bottom: 5,
                      }}
                    >
                      <CartesianGrid/>
                      <XAxis dataKey="y" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="Revenue" stroke="#1b5a90"  fill="#1b5a90" dot={{r : 3}} activeDot={{ r: 7 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                
                </div>
              </div>
              {/* /Sales Chart */}
            </div>
            <div className="col-md-12 col-lg-6">
              {/* Invoice Chart */}
              <div className="card card-chart">
                <div className="card-header">
                  <h4 className="card-title">Status</h4>
                </div>
                <div className="card-body">
                <ResponsiveContainer width='100%' height={342}>
                <LineChart
                    data={linechartdata}
                    margin={{
                      top: 5, right: 5, left: 5, bottom: 5,
                    }}
                >
                  <CartesianGrid  />
                  <XAxis dataKey="y" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Doctors" stroke="#1b5a90" fill="#1b5a90" strokeWidth={1} dot={{r : 3}} activeDot={{ r: 7 }} />
                  <Line type="monotone" dataKey="Patients" stroke="#ff9d00" fill="#ff9d00" strokeWidth={1} dot={{r : 3}} activeDot={{ r: 7 }} />
                </LineChart>
                </ResponsiveContainer>
                </div>
              </div>
              {/* /Invoice Chart */}
            </div>	
          </div>
          <div className="row">
            <div className="col-md-6 d-flex">
              {/* Recent Orders */}
              <div className="card card-table flex-fill">
                <div className="card-header">
                  <h4 className="card-title">Mentor List</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Mentor Name</th>
                          <th>Course</th>
                          <th>Earned</th>
                          <th>Reviews</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_08} alt="User Image" /></Link>
                              <Link to="/admin/profile">James Amen</Link>
                            </h2>
                          </td>
                          <td>Maths</td>
                          <td>$3200.00</td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_07} alt="User Image" /></Link>
                              <Link to="/admin/profile">Jessica Fogarty</Link>
                            </h2>
                          </td>
                          <td>Business Maths</td>
                          <td>$3100.00</td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_17} alt="User Image" /></Link>
                              <Link to="/admin/profile">Jose Anderson</Link>
                            </h2>
                          </td>
                          <td>Algebra</td>
                          <td>$4000.00</td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_06} alt="User Image" /></Link>
                              <Link to="/admin/profile">Sofia Brient</Link>
                            </h2>
                          </td>
                          <td>Integrated Sum</td>
                          <td>$3200.00</td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_14} alt="User Image" /></Link>
                              <Link to="/admin/profile">Marvin Campbell</Link>
                            </h2>
                          </td>
                          <td>Flow chart</td>
                          <td>$3500.00</td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* /Recent Orders */}
            </div>
            <div className="col-md-6 d-flex">
              {/* Feed Activity */}
              <div className="card  card-table flex-fill">
                <div className="card-header">
                  <h4 className="card-title">Mentee List</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>													
                          <th>Mentee Name</th>
                          <th>Phone</th>
                          <th>Last Visit</th>
                          <th>Paid</th>													
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER} alt="User Image" /></Link>
                              <Link to="/admin/profile">Jonathan Doe </Link>
                            </h2>
                          </td>
                          <td>8286329170</td>
                          <td>20 Oct 2019</td>
                          <td className="text-right">$100.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_1} alt="User Image" /></Link>
                              <Link to="/admin/profile">Julie Pennington </Link>
                            </h2>
                          </td>
                          <td>2077299974</td>
                          <td>22 Oct 2019</td>
                          <td className="text-right">$200.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_2} alt="User Image" /></Link>
                              <Link to="/admin/profile">Tyrone Roberts</Link>
                            </h2>
                          </td>
                          <td>2607247769</td>
                          <td>21 Oct 2019</td>
                          <td className="text-right">$250.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_3} alt="User Image" /></Link>
                              <Link to="/admin/profile">Allen Davis </Link>
                            </h2>
                          </td>
                          <td>5043686874</td>
                          <td>21 Sep 2019</td>
                          <td className="text-right">$150.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_4} alt="User Image" /></Link>
                              <Link to="/admin/profile">Patricia Manzi </Link>
                            </h2>
                          </td>
                          <td>9548207887</td>
                          <td>18 Sep 2019</td>
                          <td className="text-right">$350.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* /Feed Activity */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Recent Orders */}
              <div className="card card-table">
                <div className="card-header">
                  <h4 className="card-title">Booking List</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Mentor Name</th>
                          <th>Course</th>
                          <th>Mentee Name</th>
                          <th>Booking Time</th>
                          <th>Status</th>
                          <th className="text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_08} alt="User Image" /></Link>
                              <Link to="/admin/profile">James Amen</Link>
                            </h2>
                          </td>
                          <td>Maths</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER} alt="User Image" /></Link>
                              <Link to="/admin/profile">Jonathan Doe </Link>
                            </h2>
                          </td>
                          <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                          <td>
                            <div className="status-toggle">
                              <input type="checkbox" id="status_1" className="check" defaultChecked />
                              <label htmlFor="status_1" className="checktoggle">checkbox</label>
                            </div>
                          </td>
                          <td className="text-right">
                            $200.00
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_07} alt="User Image" /></Link>
                              <Link to="/admin/profile">Jessica Fogarty</Link>
                            </h2>
                          </td>
                          <td>Business Maths</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_1} alt="User Image" /></Link>
                              <Link to="/admin/profile">Julie Pennington </Link>
                            </h2>
                          </td>
                          <td>5 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.35 AM</span></td>
                          <td>
                            <div className="status-toggle">
                              <input type="checkbox" id="status_2" className="check" defaultChecked />
                              <label htmlFor="status_2" className="checktoggle">checkbox</label>
                            </div>
                          </td>
                          <td className="text-right">
                            $300.00
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_17} alt="User Image" /></Link>
                              <Link to="/admin/profile">Jose Anderson</Link>
                            </h2>
                          </td>
                          <td>Algebra</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_2} alt="User Image" /></Link>
                              <Link to="/admin/profile">Tyrone Roberts</Link>
                            </h2>
                          </td>
                          <td>11 Nov 2019 <span className="text-primary d-block">12.00 PM - 12.15 PM</span></td>
                          <td>
                            <div className="status-toggle">
                              <input type="checkbox" id="status_3" className="check" defaultChecked />
                              <label htmlFor="status_3" className="checktoggle">checkbox</label>
                            </div>
                          </td>
                          <td className="text-right">
                            $150.00
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_06} alt="User Image" /></Link>
                              <Link to="/admin/profile">Sofia Brient</Link>
                            </h2>
                          </td>
                          <td>Integrated Sum</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_3} alt="User Image" /></Link>
                              <Link to="/admin/profile">Allen Davis </Link>
                            </h2>
                          </td>
                          <td>7 Nov 2019<span className="text-primary d-block">1.00 PM - 1.20 PM</span></td>
                          <td>
                            <div className="status-toggle">
                              <input type="checkbox" id="status_4" className="check" defaultChecked />
                              <label htmlFor="status_4" className="checktoggle">checkbox</label>
                            </div>
                          </td>
                          <td className="text-right">
                            $150.00
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={AVATAR_14} alt="User Image" /></Link>
                              <Link to="/admin/profile">Marvin Campbell</Link>
                            </h2>
                          </td>
                          <td>Flow chart</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link to="/admin/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_4} alt="User Image" /></Link>
                              <Link to="/admin/profile">Patricia Manzi </Link>
                            </h2>
                          </td>
                          <td>15 Nov 2019 <span className="text-primary d-block">1.00 PM - 1.15 PM</span></td>
                          <td>
                            <div className="status-toggle">
                              <input type="checkbox" id="status_5" className="check" defaultChecked />
                              <label htmlFor="status_5" className="checktoggle">checkbox</label>
                            </div>
                          </td>
                          <td className="text-right">
                            $200.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* /Recent Orders */}
            </div>
          </div>
        </div>			
      </div>
        );
   }
}

export default withRouter(AdminDashboard);
