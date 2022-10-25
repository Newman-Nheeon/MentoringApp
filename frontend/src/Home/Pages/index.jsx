/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Voicecall from "./voicecall"
import VideoCall from "./videocall"
import Components from "./components"
import StarterPage from "./starterpage"

const Pageroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/voice-call`} />
        <Route path={`${match.url}/voice-call`} component={Voicecall} />
        <Route path={`${match.url}/video-call`} component={VideoCall} />
        <Route path={`${match.url}/components`} component={Components} />
        <Route path={`${match.url}/blank-page`} component={StarterPage} />
    </Switch>
);

export default Pageroute;
