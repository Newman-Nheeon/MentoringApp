import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import App from './initialpage/App';
import config from 'config';

import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/feathericon.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Style File
import './assets/js/bootstrap.min.js';
import './assets/css/select2.min.css';

import './assets/css/style.css';
import './assets/js/popper.min.js';
import './assets/js/app.js';
import './assets/js/select2.min.js';
import './assets/js/jquery-3.2.1.min.js';
import './assets/js/jquery.slimscroll.min.js';


const MainApp = () => (
   <Router basename={`/template`}>
      <Switch>
         <Route path="/" component={App} />
      </Switch>
	</Router>
);

export default MainApp;