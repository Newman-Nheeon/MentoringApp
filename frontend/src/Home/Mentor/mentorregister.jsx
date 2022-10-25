
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MentorRegister extends Component {
   render() {
      return ( 
        <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Account Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Mentor Register <Link to="/app/Mentor/mentor-register">Not a Mentor?</Link></h3>
                    </div>
                    {/* Register Form */}
                    <form>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Mobile Number</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="password" className="form-control floating" />
                        <label className="focus-label">Create Password</label>
                      </div>
                      <div className="text-right">
                        <Link className="forgot-link" to="/login">Already have an account?</Link>
                      </div>
                      <Link className="btn btn-primary btn-block btn-lg login-btn" to="/app/Mentor/dashboard">Signup</Link>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1" /> Login</a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1" /> Login</a>
                        </div>
                      </div>
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Account Content */}
            </div>
          </div>
        </div>
      </div>		
      );
   }
}

export default MentorRegister;
