
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {AppLogo} from '../../constant/imagepath_home';

class Home extends Component {
   render() {
      return ( 
        
      <div className="bg-pattern-style bg-pattern-style-register">
      <div className="content">
        {/* Register Content */}
        <div className="account-content">
          <div className="account-box">
            <div className="login-right">
              <div className="login-header">
                <h3><span>Mentoring</span> Register</h3>
                <p className="text-muted">Access to our dashboard</p>
              </div>
              {/* Register Form */}
              <form action="/app/index">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">First Name</label>
                      <input id="first-name" type="text" className="form-control" name="first_name" autofocus />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">Last Name</label>
                      <input id="last-name" type="text" className="form-control" name="last_name" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-control-label">Email Address</label>
                  <input id="email" type="email" className="form-control" />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <input id="password" type="password" className="form-control" name="password" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label">Confirm Password</label>
                      <input id="password-confirm" type="password" className="form-control" name="password_confirmation" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-control-xs custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="agreeCheckboxUser" id="agree_checkbox_user" />
                    <label className="custom-control-label" htmlFor="agree_checkbox_user">I agree to Mentoring</label> <a tabIndex={-1} href="javascript:void(0);">Privacy Policy</a> &amp; <a tabIndex={-1} href="javascript:void(0);"> Terms.</a>
                  </div>
                </div>
                  <Link className="btn btn-primary login-btn" to="/app/index">Create Account</Link>
                {/* <button className="btn btn-primary login-btn" type="submit">Create Account</button> */}
                <div className="account-footer text-center mt-3">
                  Already have an account? <Link className="forgot-link mb-0" to="/login">Login</Link>
                </div>
              </form>
              {/* /Register Form */}
            </div>
          </div>
        </div>
        {/* /Register Content */}
      </div>
    </div>
      );
   }
}

export default Home;
