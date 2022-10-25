
import React, { Component } from 'react';
import {Logo_White} from '../../../imagepath'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Forgotpassword extends Component {
  constructor(props) {
    super(props);
  }
 
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
                <h1>Forgot Password?</h1>
                <p className="account-subtitle">Enter your email to get a password reset link</p>
                {/* Form */}
                <form >
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Email" />
                  </div>
                  <div className="form-group mb-0">
                    <button className="btn btn-primary btn-block" onClick={() => history.push('/admin_login')} type="button">Reset Password</button>
                  </div>
                </form>
                {/* /Form */}
                <div className="text-center dont-have">Remember your password? <Link to="/admin_login">Login</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
   }
}

export default withRouter(Forgotpassword);
