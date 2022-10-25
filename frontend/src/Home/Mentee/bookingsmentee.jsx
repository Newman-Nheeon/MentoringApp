
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";

import {USER_1,USER_2,USER_3,USER_4,USER_5,USER_6} from '../../constant/imagepath_home';
import Sidebar from "./sidebar"
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class BookingsMentee extends Component {
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
                    <li className="breadcrumb-item active" aria-current="page">My Bookings</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">My Bookings</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              {/* Sidebar */}
              <div className="col-md-5 col-lg-4 col-xl-3">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/></StickyBox>
            </div>
              {/* /Sidebar */}
              {/* Booking summary */}
              <div className="col-md-7 col-lg-8 col-xl-9">
                <h3 className="pb-3">Booking Summary</h3>
                {/* Mentee List Tab */}
                <div className="tab-pane show active" id="mentee-list">
                  <div className="card card-table">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>MENTEE LISTS</th>
                              <th>SCHEDULED DATE</th>
                              <th className="text-center">SCHEDULED TIMINGS</th>
                              <th className="text-center">ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_2} alt="User Image" /></Link>
                                  <Link to="/app/Mentee/mentor-profile">Tyrone Roberts<span>tyroneroberts@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_1} alt="User Image" /></Link>
                                  <Link to="/app/Mentee/mentor-profile">Julie Pennington <span>julie@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_3} alt="User Image" /></Link>
                                  <Link to="/app/Mentee/mentor-profile">Allen Davis <span>allendavis@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>07 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_4} alt="User Image" /></Link>
                                  <Link to="/app/Mentee/mentor-profile">Patricia Manzi <span>patriciamanzi@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>07 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_5} alt="User Image" /></Link>
                                  <Link to="/app/Mentee/mentor-profile">Olive Lawrence <span>olivelawrence@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>06 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_6} alt="User Image" /></Link>
                                  <Link to="/app/Mentee/mentor-profile">Frances Foster <span>frances@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>06 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_2} alt="User Image" /></Link>
                                  <Link to="/app/Mentee/mentor-profile">Tyrone Roberts<span>tyroneroberts@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_1} alt="User Image" /></Link>
                                  <Link to="/app/Mentee/mentor-profile">Julie Pennington <span>julie@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>08 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/app/Mentee/mentor-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={USER_3} alt="User Image" /></Link>
                                  <Link to="/app/Mentee/mentor-profile">Allen Davis <span>allendavis@adobe.com</span></Link>				
                                </h2>
                              </td>
                              <td>07 April 2020</td>
                              <td className="text-center"><span className="pending">9:00 AM - 10:00 AM</span></td>
                              <td className="text-center"><Link to="/app/Mentor/profile-mentee" className="btn btn-sm bg-info-light"><i className="far fa-eye" /> View</Link></td>
                            </tr>
                          </tbody>
                        </table>		
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentee List Tab */}
              </div>
              {/* /Booking summary */}
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </div>
      );
   }
}

export default BookingsMentee;
