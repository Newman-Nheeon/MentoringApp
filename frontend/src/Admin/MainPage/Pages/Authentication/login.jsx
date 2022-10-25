
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Logo_White} from '../../../imagepath'
import { withRouter } from 'react-router-dom';

class Login extends Component {
   render() {
    const { history } = this.props;
      return ( 
        <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={Logo_White} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  {/* Form */}
                  <form >
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-block" onClick={()=>history.push('admin/index')} type="submit">Login</button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center forgotpass"><Link to="/admin_forgot-password">Forgot Password?</Link></div>
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Login with</span>
                    <a href="#" className="facebook"><i className="fa fa-facebook" /></a><a href="#" className="google"><i className="fa fa-google" /></a>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">Don’t have an account? <Link to="/admin_register">Register</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
   }
}

export default withRouter(Login);
