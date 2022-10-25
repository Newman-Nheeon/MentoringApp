
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";

import {USER_5,USER_7,USER_10,USER_12,USER_13,USER_14,USER_15} from '../../constant/imagepath_home';
import Sidebar from "./sidebar"
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class MenteeDashboard extends Component {
   render() {
      return ( 
        <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Dashboard</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3">
                {/* Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/></StickyBox>
                {/* /Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12 col-lg-4 dash-board-list blue">
                    <div className="dash-widget">
                      <div className="circle-bar">
                        <div className="icon-col">
                          <i className="fas fa-calendar-check" />
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h3>23</h3>
                        <h6>Appointments</h6>															
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 dash-board-list yellow">
                    <div className="dash-widget">
                      <div className="circle-bar">
                        <div className="icon-col">
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h3>33</h3>
                        <h6>Mentoring Points</h6>															
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4 dash-board-list pink">
                    <div className="dash-widget">
                      <div className="circle-bar">
                        <div className="icon-col">
                          <i className="fas fa-graduation-cap" />
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h3>14</h3>
                        <h6>Rank</h6>															
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="mb-4">Mentor Lists</h4>
                    <div className="card card-table">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>BASIC INFO</th>
                                <th>CREATED DATE</th>
                                <th className="text-center">TAGS</th>
                                <th className="text-center">ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_14} alt="User Image" /></Link>
                                    <Link to="/app/Mentee/mentor-profile">Tyrone Roberts<span>tyroneroberts@adobe.com</span></Link>				
                                  </h2>
                                </td>
                                <td>08 April 2020</td>
                                <td className="text-center"><span className="pending">PENDING</span></td>
                                <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_15} alt="User Image" /></Link>
                                    <Link to="/app/Mentee/mentor-profile">Julie Pennington <span>julie@adobe.com</span></Link>				
                                  </h2>
                                </td>
                                <td>08 April 2020</td>
                                <td className="text-center"><span className="pending">PENDING</span></td>
                                <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_12} alt="User Image" /></Link>
                                    <Link to="/app/Mentee/mentor-profile">Allen Davis <span>allendavis@adobe.com</span></Link>				
                                  </h2>
                                </td>
                                <td>08 April 2020</td>
                                <td className="text-center"><span className="pending">PENDING</span></td>
                                <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_13} alt="User Image" /></Link>
                                    <Link to="/app/Mentee/mentor-profile">Patricia Manzi <span>patriciamanzi@adobe.com</span></Link>				
                                  </h2>
                                </td>
                                <td>08 April 2020</td>
                                <td className="text-center"><span className="accept">ACCEPTED</span></td>
                                <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_5} alt="User Image" /></Link>
                                    <Link to="/app/Mentee/mentor-profile">Olive Lawrence <span>olivelawrence@adobe.com</span></Link>				
                                  </h2>
                                </td>
                                <td>08 April 2020</td>
                                <td className="text-center"><span className="accept">ACCEPTED</span></td>
                                <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_10} alt="User Image" /></Link>
                                    <Link to="/app/Mentee/mentor-profile">Frances Foster <span>frances@adobe.com</span></Link>				
                                  </h2>
                                </td>
                                <td>08 April 2020</td>
                                <td className="text-center"><span className="accept">ACCEPTED</span></td>
                                <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_7} alt="User Image" /></Link>
                                    <Link to="/app/Mentee/mentor-profile">Deloris Briscoe <span>delorisbriscoe@adobe.com</span></Link>				
                                  </h2>
                                </td>
                                <td>08 April 2020</td>
                                <td className="text-center"><span className="reject">REJECTED</span></td>
                                <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                              </tr>
                            </tbody>
                          </table>		
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </div>
      );
   }
}

export default MenteeDashboard;
