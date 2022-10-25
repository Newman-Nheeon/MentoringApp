
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";

import {USER} from '../../constant/imagepath_home';
import Sidebar from "./sidebar"
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';

class ProfileSettingMentee extends Component {
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
                    <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Profile Settings</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              {/* Profile Sidebar */}
              <div className="col-md-5 col-lg-4 col-xl-3">
                {/* Sidebar */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/></StickyBox>
               {/* /Sidebar */}
              </div>
              {/* /Profile Sidebar */}
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    {/* Profile Settings Form */}
                    <form>
                      <div className="row form-row">
                        <div className="col-12 col-md-12">
                          <div className="form-group">
                            <div className="change-avatar">
                              <div className="profile-img">
                                <img src={USER} alt="User Image" />
                              </div>
                              <div className="upload-img">
                                <div className="change-photo-btn">
                                  <span><i className="fa fa-upload" /> Upload Photo</span>
                                  <input type="file" className="upload" />
                                </div>
                                <small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" defaultValue="Jonathan" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" defaultValue="Doe" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Date of Birth</label>
                            <div className="cal-icon">
                              <input type="text" className="form-control datetimepicker" defaultValue="24-07-1983" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Blood Group</label>
                            <select className="form-control select">
                              <option>A-</option>
                              <option>A+</option>
                              <option>B-</option>
                              <option>B+</option>
                              <option>AB-</option>
                              <option>AB+</option>
                              <option>O-</option>
                              <option>O+</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Email ID</label>
                            <input type="email" className="form-control" defaultValue="jonathandoe@example.com" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" defaultValue="+1 202-555-0125" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" defaultValue="806 Twin Willow Lane" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" defaultValue="Old Forge" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" defaultValue="Newyork" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Zip Code</label>
                            <input type="text" className="form-control" defaultValue={13420} />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" defaultValue="United States" />
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                      </div>
                    </form>
                    {/* /Profile Settings Form */}
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

export default ProfileSettingMentee;
