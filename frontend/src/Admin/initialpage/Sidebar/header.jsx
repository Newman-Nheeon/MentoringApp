/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {headerlogo,Logo_small,USER,USER_1,USER_2,USER_4,AVATAR_12} from '../../imagepath'

class Header extends Component {

   render() {
    const {  location } = this.props
    let pathname = location.pathname
    
      return (        
      <div className="header">
      {/* Logo */}
      <div className="header-left">
        <Link to="/admin/index" className="logo">
          <img src={headerlogo} alt="Logo" />
        </Link>
        <Link to="/admin/index" className="logo logo-small">
          <img src={Logo_small} alt="Logo" width={30} height={30} />
        </Link>
      </div>
      {/* /Logo */}
      <a href="" id="toggle_btn">
        <i className="fe fe-text-align-left" />
      </a>
      <div className="top-nav-search">
        <form>
          <input type="text" className="form-control" placeholder="Search here" />
          <button className="btn" type="submit"><i className="fa fa-search" /></button>
        </form>
      </div>
      {/* Mobile Menu Toggle */}
      <a className="mobile_btn" id="mobile_btn">
        <i className="fa fa-bars" />
      </a>
      {/* /Mobile Menu Toggle */}
      {/* Header Right Menu */}
      <ul className="nav user-menu">
        {/* Notifications */}
        <li className="nav-item dropdown noti-dropdown">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <i className="fe fe-bell" /> <span className="badge badge-pill">3</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="" className="clear-noti"> Clear All </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="#">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="User Image" src={USER} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">Jonathan Doe</span> Schedule <span className="noti-title">his appointment</span></p>
                        <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="User Image" src={USER_1} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">Julie Pennington</span> has booked her appointment to <span className="noti-title">Ruby Perrin</span></p>
                        <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="User Image" src={USER_2} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">Tyrone Roberts</span> sent a amount of $210 for his <span className="noti-title">appointment</span></p>
                        <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="#">
                    <div className="media">
                      <span className="avatar avatar-sm">
                        <img className="avatar-img rounded-circle" alt="User Image" src={USER_4} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">Patricia Manzi</span> send a message <span className="noti-title"> to his Mentee</span></p>
                        <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="#">View all Notifications</a>
            </div>
          </div>
        </li>
        {/* /Notifications */}
        {/* User Menu */}
        <li className="nav-item dropdown has-arrow">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <span className="user-img"><img className="rounded-circle" src={AVATAR_12} width={31} alt="Ryan Taylor" /></span>
          </a>
          <div className="dropdown-menu">
            <div className="user-header">
              <div className="avatar avatar-sm">
                <img src={AVATAR_12} alt="User Image" className="avatar-img rounded-circle" />
              </div>
              <div className="user-text">
                <h6>Allen Davis</h6>
                <p className="text-muted mb-0">Administrator</p>
              </div>
            </div>
            <Link className="dropdown-item" to="/admin/profile">My Profile</Link>
            <Link className="dropdown-item" to="/admin/settings">Settings</Link>
            <Link className="dropdown-item" to="/admin_login">Logout</Link>
          </div>
        </li>
        {/* /User Menu */}
      </ul>
      {/* /Header Right Menu */}
    </div>
      );
   }
}

export default withRouter(Header);