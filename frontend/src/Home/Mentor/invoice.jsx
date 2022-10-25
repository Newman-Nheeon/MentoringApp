
import React, { Component } from 'react';
import Sidebar from "./sidebar"
import {USER,USER_1,USER_2,USER_3,USER_4,USER_5,USER_6,USER_7,USER_8} from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class Invoices extends Component {
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
                    <li className="breadcrumb-item active" aria-current="page">Invoices</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Invoices</h2>
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
                <div className="card card-table">
                  <div className="card-body">
                    {/* Invoice Table */}
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Invoice No</th>
                            <th>Mentee</th>
                            <th>Amount</th>
                            <th>Paid On</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0010</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_2} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Tyrone Roberts <span>16</span></Link>
                              </h2>
                            </td>
                            <td>$450</td>
                            <td>14 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0009</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_1} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Julie Pennington <span>01</span></Link>
                              </h2>
                            </td>
                            <td>$200</td>
                            <td>13 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0008</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Tyrone Roberts <span>02</span></Link>
                              </h2>
                            </td>
                            <td>$100</td>
                            <td>12 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0007</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_3} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Allen Davis <span>03</span></Link>
                              </h2>
                            </td>
                            <td>$350</td>
                            <td>11 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0006</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_4} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Patricia Manzi <span>04</span></Link>
                              </h2>
                            </td>
                            <td>$275</td>
                            <td>10 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0005</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_5} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Olive Lawrence <span>05</span></Link>
                              </h2>
                            </td>
                            <td>$600</td>
                            <td>9 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0004</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_6} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Frances Foster <span>06</span></Link>
                              </h2>
                            </td>
                            <td>$50</td>
                            <td>8 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0003</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_7} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Deloris Briscoe <span>07</span></Link>
                              </h2>
                            </td>
                            <td>$400</td>
                            <td>7 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0002</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_8} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Daniel Griffing <span>08</span></Link>
                              </h2>
                            </td>
                            <td>$550</td>
                            <td>6 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link to="/app/Mentor/invoice-view">#INV-0002</Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/app/Mentor/profile-mentee" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={USER_8} alt="User Image" />
                                </Link>
                                <Link to="/app/Mentor/profile-mentee">Daniel Griffing <span>08</span></Link>
                              </h2>
                            </td>
                            <td>$550</td>
                            <td>6 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <Link to="/app/Mentor/invoice-view" className="btn btn-sm bg-info-light mr-1">
                                  <i className="far fa-eye" /> View
                                </Link>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /Invoice Table */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
   }
}

export default Invoices;
