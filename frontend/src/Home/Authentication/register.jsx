import React, { Component } from 'react';
import { useState } from 'react';
import axios from "axios";

// import { Helmet } from "react-helmet";

import { Link, Redirect } from 'react-router-dom';
import {AppLogo} from '../../constant/imagepath_home';

// const navigate = useNavigate();
// const [error, setError] = useState({
//   error_message: ""
// })

const Register = () => {
  
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

const handleChange = ({ currentTarget: input }) => {
  setData({...data,[input.name]: input.value});
};

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const url = "http://localhost:3001";
    const {data: res} = await axios.post(url, data);
    <Redirect to="/login" />
    console.log(res.message);
  } catch (error) {
    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
      setError(error.response.data.message);
    }
  }

}


  
  
  return ( 
        
      <div className="bg-pattern-style bg-pattern-style-register">
      <div className="content">
        {/* Register Content */}
        <div className="account-content">
          <div className="account-box">
            <div className="login-right">
              <div className="login-header">
                <h3><span>LRI</span> Registeration</h3>
                <p className="text-muted">Access to our mentoring programme</p>
              </div>

              {/* Register Form */}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      
                      <label className="form-control-label">First Name</label>
                      <input 
                        id="first-name" 
                        type="text" 
                        className="form-control" 
                        name="firstName" 
                        value = {data.firstName}
                        onChange = {handleChange}
                        required />
                    
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      
                      <label className="form-control-label">Last Name</label>
                      <input 
                        id="last-name" 
                        type="text" 
                        className="form-control" 
                        name="lastName"
                        value = {data.lastName}
                        onChange = {handleChange}
                        required />
                    
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  
                  <label className="form-control-label">Email Address</label>
                  <input 
                    id="email" 
                    type="email"
                    name='email' 
                    className="form-control" 
                    value = {data.email}
                    onChange = {handleChange}
                    required />
                
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">

                      <label className="form-control-label">Password</label>
                      <input 
                        id="password" 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        value = {data.password}
                        onChange = {handleChange}
                        required />
                    
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      
                      <label className="form-control-label">Confirm Password</label>
                      <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required />
                    
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-control-xs custom-checkbox">
                    
                    <input type="checkbox" className="custom-control-input" name="agreeCheckboxUser" id="agree_checkbox_user" required />
                    <label className="custom-control-label" htmlFor="agree_checkbox_user">I agree to Mentoring</label> <a tabIndex={-1} href="javascript:void(0);">Privacy Policy</a> &amp; <a tabIndex={-1} href="javascript:void(0);"> Terms.</a>
                  
                  </div>
                </div>

                
                {/* {error && <div className={styles.error_msg} >{error}</div> } */}
                <button className="btn btn-primary login-btn" type="submit">Create Account</button>
                
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

export default Register;
