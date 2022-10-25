/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// router service
import routerService from "./router_service";

import Header from './header.jsx';
import Footer from './footer.jsx';
// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/css/bootstrap.min.css"
import "./assets/css/modal.css"
import "./assets/plugins/fontawesome/css/fontawesome.min.css"
import "./assets/plugins/fontawesome/css/all.min.css"
import "./assets/css/style.css"

import "./assets/js/jquery.min.js"
import "./assets/js/popper.min.js"
import "./assets/js/bootstrap.min.js"
import "./assets/js/script.js"

class DefaultLayout extends Component {
	
	render() {
		const { location, match } = this.props;
		return (
			<div className="main-wrapper">	
				<Header/>
				{routerService && routerService.map((route,key)=>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}	
				{location.pathname.includes("chat") || location.pathname.includes("voice-call")
				|| location.pathname.includes("video-call")|| location.pathname.includes("map-list")
				|| location.pathname.includes("map-grid") ? "" : <Footer/>}                
			</div>
		);
	}
}
export default withRouter(DefaultLayout);

// export default withRouter(connect(null)(DefaultLayout));
