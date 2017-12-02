/* eslint-disable global-require */
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
// import App from './App';
import Intro from './00_intro/intro';
import Survey from './01_survey/survey';
import Camera from './02_camera/camera';
import Finish from './03_finish/finish';

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: {},
      camera: {}
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSave(key, item) {
    this.setState({
      [key]: item
    });
    console.log(item);
  }

  handleSubmit() {
    fetch('https://ervrvrer.com.erfrehf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    // send state to server
    console.log('entire submission is ', this.state);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path='/survey' component={() => <Survey onSave={this.handleSave}/>}/>
        <Route path='/camera' component={() => <Camera onSave={this.handleSave}/>}/>
        <Route path='/finish' component={() => <Finish handleSubmit={this.handleSubmit}/>} />
      </Switch>
    )
  }

}
