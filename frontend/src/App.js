import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import App from './app-universal.jsx';
import config from 'config';

const MainApp = () => (
   <Router  basename={`${config.publicPath}`}>
      <Switch>
         <Route path="/" component={App} />
      </Switch>
	</Router>
);

export default MainApp;