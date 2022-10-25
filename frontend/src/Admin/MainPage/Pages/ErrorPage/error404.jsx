/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route, withRouter, Link } from 'react-router-dom';

class Error404 extends Component {
   constructor(props) {
      super(props)
   }
   homepage = () => {
      const {history} = this.props;
      localStorage.setItem("firstload","true")
      history.push('/admin/index')
   }
    render() {
     
      return (
         <div className="main-wrapper">
            <Helmet>
                <title>Mentoring - Error 404</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
         <div className="error-box">
           <h1>404</h1>
           <h3><i className="fa fa-warning" /> Oops! Page not found!</h3>
           <p>The page you requested was not found.</p>
           <button onClick={this.homepage} className="btn btn-primary">Back to Home</button>
         </div>
       </div>
        
      );
   }
}

export default withRouter(Error404);
