/* eslint-disable global-require */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import App from './App';
import Intro from './00_intro/intro';
import Survey from './01_survey/survey';
import Camera from './02_camera/camera';
import Finish from './03_finish/finish';

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Switch>
    <Route exact path="/" component={Intro} />
    <Route exact path='/survey' component={Survey}/>
    <Route path='/camera' component={Camera}/>
    <Route path='/finish' component={Finish}/>
  </Switch>
);
