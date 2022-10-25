import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//Main App
import DefaultLayout from './Sidebar/DefaultLayout';
import Error404 from '../MainPage/Pages/ErrorPage/error404';
import Error500 from '../MainPage/Pages/ErrorPage/error500';
import Login from '../MainPage/Pages/Authentication/login';
import Register from '../MainPage/Pages/Authentication/register';
import Forgotpassword from '../MainPage/Pages/Authentication/forgotpassword';
import LockScreen from '../MainPage/Pages/Authentication/lockscreen';
import $ from 'jquery';

export default class App extends Component {
    componentDidMount(){
        if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgotpassword")
        || location.pathname.includes("otp")|| location.pathname.includes("lockscreen") ) {
            $('body').addClass('account-page');
        }else if (location.pathname.includes("error-404") || location.pathname.includes("error-500") ) {
            $('body').addClass('error-page');
        }
    }
       render(){
            const { location, match, user } = this.props;
            
            
            // if (location.pathname === '/') {
            // if (user === null) {
            //     return (<Redirect to={'/login'} />);
            // } else {
            //     return (<Redirect to={'/blue/app/main/dashboard'} />);
            // }
            // }
            if (location.pathname === '/') {                 
                return (<Redirect to={'/app/index'} />);                
            }
            return (
                <Switch>                  
                    <Route path="/app" component={DefaultLayout} />
                    <Route path="/admin_error-404" component={Error404} />
                    <Route path="/admin_error-500" component={Error500} />
                    <Route path="/admin_login" component={Login} />
                    <Route path="/admin_register" component={Register} />
                    <Route path="/admin_forgot-password" component={Forgotpassword} />
                    <Route path="/admin_lock-screen" component={LockScreen} />
                </Switch>
            )
        }
         
}
