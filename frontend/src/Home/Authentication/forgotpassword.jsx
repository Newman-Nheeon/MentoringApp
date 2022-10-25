
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import {AppLogo} from '../../constant/imagepath_home';

class Home extends Component {
   render() {
      return ( 
        <div className="bg-pattern-style">
        <div className="content">
          {/* Account Content */}
          <div className="account-content">
            <div className="account-box">
              <div className="login-right">
                <div className="login-header">
                  <h3>Forgot Password?</h3>
                  <p className="text-muted">Enter your email to get a password reset link</p>
                </div>
                {/* Forgot Password Form */}
                <form >
                  <div className="form-group">
                    <label className="form-control-label">Email Address</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="text-right">
                    <Link className="forgot-link" to="/login">Remember your password?</Link>
                  </div>
                  <Link className="btn btn-primary login-btn" to="/login">Reset Password</Link>
                </form>
                {/* /Forgot Password Form */}
              </div>
            </div>
          </div>
          {/* /Account Content */}
        </div>
      </div>
      );
   }
}

export default Home;
