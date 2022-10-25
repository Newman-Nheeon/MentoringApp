/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MentorDashboard from "./mentordashboard"
import Bookings from "./bookings"
import Profilesettings from "./profilesettings"
import ScheduleTiming from "./scheduletime"
import MenteeList from "./menteelist"
import Menteeprofile from "./menteeprofile"
import Blog from "./blog"
import AddBlog from "./blogadd"
import EditBlog from "./blogedit"
import Chat from "./chat"
import Invoice from "./invoice"
import InvoiceView from "./invoice-view"
import Reviews from "./reviews"
import MentorRegister from "./mentorregister"
import Appointments from "./appointments"


const Mentorroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
        <Route path={`${match.url}/dashboard`} component={MentorDashboard} />
        <Route path={`${match.url}/bookings`} component={Bookings} />
        <Route path={`${match.url}/schedule-timings`} component={ScheduleTiming} />
        <Route path={`${match.url}/mentee-list`} component={MenteeList} />
        <Route path={`${match.url}/profile-mentee`} component={Menteeprofile} />
        <Route path={`${match.url}/blog`} component={Blog} />
        <Route path={`${match.url}/add-blog`} component={AddBlog} />
        <Route path={`${match.url}/edit-blog`} component={EditBlog} />
        <Route path={`${match.url}/chat`} component={Chat} />
        <Route path={`${match.url}/invoices`} component={Invoice} />
        <Route path={`${match.url}/invoice-view`} component={InvoiceView} />
        <Route path={`${match.url}/profile-settings`} component={Profilesettings} />
        <Route path={`${match.url}/reviews`} component={Reviews} />
        <Route path={`${match.url}/mentor-register`} component={MentorRegister} />
        <Route path={`${match.url}/appointments`} component={Appointments} />
    </Switch>
);

export default Mentorroute;
