
import React, { Component } from 'react';
import { useState } from 'react';
// import { Helmet } from "react-helmet";

import { Link } from 'react-router-dom';
import {AppLogo} from '../../constant/imagepath_home';

class Home extends Component {
   render() {

    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log(email);
    // }



      return ( 
        <div className="bg-pattern-style">
        <div className="content">
          {/* Login Tab Content */}
          <div className="account-content">
            <div className="account-box">
              <div className="login-right"> 
                <div className="login-header">
                  <h3>Login <span>LRI</span></h3>
                  <p className="text-muted">Access to our dashboard</p>
                </div>
                <form >
                  <div className="form-group">
                    <label className="form-control-label">Email Address</label>
                    <input type="email" placeholder='Enter your NWN email address' className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group">
                      <input type="password" placeholder='Enter your password' className="form-control pass-input" />
                      <span className="fas fa-eye toggle-password" />
                    </div>
                  </div>
                  <div className="text-right">
                    <Link className="forgot-link" to="/forgot-password">Forgot Password ?</Link>
                  </div>
                  <Link className="btn btn-primary login-btn" to="/app/index">Login</Link>
                  {/* <button className="btn btn-primary login-btn" type="submit">Login</button> */}
                  <div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
                </form>
              </div>
            </div>
          </div>
          {/* /Login Tab Content */}
        </div>
      </div>
      );
   }
}

export default Home;
