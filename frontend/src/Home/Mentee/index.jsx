/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Mapgrid from "./mapgrid"
import Maplist from "./maplist"
import Searchmentors from "./searchmentors"
import BookingsMentee from "./bookingsmentee"
import MenteeDashboard from "./menteedashboard"
import MentorProfile from "./mentorprofile"
import Booking from "./booking"
import Checkout from "./checkout"
import BookingSuccess from "./bookingsuccess"
import Chatmentee from "./chatmentee"
import Favorites from "./favorites"
import Profilesettingmentee from "./profilesettingmentee"
import Changepassword from "./changepassword"

const Menteeroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/mentor-profile`} />
        <Route path={`${match.url}/mentor-profile`} component={MentorProfile} />
        <Route path={`${match.url}/map-grid`} component={Mapgrid} />
        <Route path={`${match.url}/map-list`} component={Maplist} />
        <Route path={`${match.url}/search`} component={Searchmentors} />
        <Route path={`${match.url}/bookings-mentee`} component={BookingsMentee} />
        <Route path={`${match.url}/dashboard-mentee`} component={MenteeDashboard} />
        <Route path={`${match.url}/booking`} component={Booking} />
        <Route path={`${match.url}/checkout`} component={Checkout} />
        <Route path={`${match.url}/booking-success`} component={BookingSuccess} />
        <Route path={`${match.url}/chat-mentee`} component={Chatmentee} />
        <Route path={`${match.url}/favourites`} component={Favorites} />
        <Route path={`${match.url}/profile-settings-mentee`} component={Profilesettingmentee} />
        <Route path={`${match.url}/change-password`} component={Changepassword} />
    </Switch>
);

export default Menteeroute;
