import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomeLayout from './Home/homelayout.jsx';
import Login from './Home/Authentication/login';
import Register from './Home/Authentication/register';
import Forgotpassword from './Home/Authentication/forgotpassword';

//Admin Layout
import AdminLayout from './Admin/initialpage/Sidebar/DefaultLayout';
import AdminLogin from './Admin/MainPage/Pages/Authentication/login';
import AdminRegister from './Admin/MainPage/Pages/Authentication/register';
import AdminForgotpassword from './Admin/MainPage/Pages/Authentication/forgotpassword';
import LockScreen from './Admin/MainPage/Pages/Authentication/lockscreen';

export default class AppUniversal extends Component {
	componentDidMount(){
        if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgotpassword")
        || location.pathname.includes("otp")|| location.pathname.includes("lockscreen") ) {
            $('body').addClass('account-page');
        }else if (location.pathname.includes("error-404") || location.pathname.includes("error-500") ) {
            $('body').addClass('error-page');
        }else if (location.pathname.includes("chat")  ) {
            $('body').addClass('chat-page');
        }
    }
	render(){
		const { location, match } = this.props;
		if (location.pathname === '/') {
			return (<Redirect to={'/app/index'} />);		 
	  	}
		return (
			<Switch>
				<Route path="/app" component={HomeLayout} />
				<Route path="/admin" component={AdminLayout} />
				<Route path="/login" component={Login} />	
                <Route path="/register" component={Register} />	
                <Route path="/forgot-password" component={Forgotpassword} />
				<Route path="/admin_login" component={AdminLogin} />
				<Route path="/admin_register" component={AdminRegister} />
				<Route path="/admin_forgot-password" component={AdminForgotpassword} />
				<Route path="/lock-screen" component={LockScreen} />			
			</Switch>
	
		);
	}
}
