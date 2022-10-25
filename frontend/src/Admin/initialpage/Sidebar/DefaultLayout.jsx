/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// router service
import routerService from "../../router_service";

import Header from './header.jsx';
import SidebarContent from './sidebar';
import $ from 'jquery';


// import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/font-awesome.min.css';
// import '../../assets/css/feathericon.min.css';
if(window.location.pathname.includes("admin")) {
	require('../../assets/css/bootstrap.min.css');
	require('../../assets/css/font-awesome.min.css');
	require('../../assets/css/feathericon.min.css');
}

import 'bootstrap/dist/css/bootstrap.min.css';

// import '../../assets/js/bootstrap.min.js';
// import '../../assets/css/select2.min.css';

// import '../../assets/css/style.css';
// import '../../assets/js/popper.min.js';
// import '../../assets/js/app.js';
// import '../../assets/js/select2.min.js';
// import '../../assets/js/jquery-3.2.1.min.js';
// import '../../assets/js/jquery.slimscroll.min.js';
if(window.location.pathname.includes("admin") || window.location.pathname.includes("lock-screen")) {
	require('../../assets/js/bootstrap.min.js');
	require('../../assets/css/select2.min.css');

	require('../../assets/css/modal.css');
	require('../../assets/css/style.css');
	require('../../assets/js/popper.min.js');
	require('../../assets/js/app.js');
	require('../../assets/js/select2.min.js');
	require('../../assets/js/jquery-3.2.1.min.js');
	require('../../assets/js/jquery.slimscroll.min.js');
}

class DefaultLayout extends Component {
	componentDidMount(){
		let pathvar = window.location.pathname
        if (pathvar.includes("admin_login") || pathvar.includes("admin_register") || pathvar.includes("admin_forgot-password") ) {
            $('body').addClass('account-page');
        }else if (pathvar.includes("error-404") || pathvar.includes("error-500") ) {
            $('body').addClass('error-page');
        }
    }
	render() {
		const { location, match } = this.props;
			
		return (
			<div className="main-wrapper">
				{location.pathname.includes("error-404") || location.pathname.includes("error-500") ? "" : <Header/>}				
				<div>
					{routerService && routerService.map((route,key)=>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}
				</div>
				{location.pathname.includes("error-404") || location.pathname.includes("error-500") ? "" : <SidebarContent/>}
			</div>
		);
	}
}
export default withRouter(DefaultLayout);