/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Bloglist from "./bloglist"
import Bloggrid from "./bloggrid"
import Blogdetails from "./blogdetails"

const Menteeroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/blog-list`} />
        <Route path={`${match.url}/blog-list`} component={Bloglist} />
        <Route path={`${match.url}/blog-grid`} component={Bloggrid} />
        <Route path={`${match.url}/blog-details`} component={Blogdetails} />
    </Switch>
);

export default Menteeroute;
