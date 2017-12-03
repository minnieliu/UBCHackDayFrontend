/* eslint-disable global-require */
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
// import App from './App';
import Intro from './00_intro/intro';
import Survey from './01_survey/survey';
import Camera from './02_camera/camera';
import Finish from './03_finish/finish';
import $ from 'jquery';

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/

window.makeblob = function (dataURL) {
  var BASE64_MARKER = ';base64,';
  if (dataURL.indexOf(BASE64_MARKER) == -1) {
    var parts = dataURL.split(',');
    var contentType = parts[0].split(':')[1];
    var raw = decodeURIComponent(parts[1]);
    return new Blob([raw], { type: contentType });
  }
  var parts = dataURL.split(BASE64_MARKER);
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;

  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
};



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
  }

  handleSubmit() {
    const str = this.state.camera;

    const data = {
      ...this.state.survey,
      imaqe: window.makeblob(str)
    };
    $.ajax({
      url: 'https://connecttw2.herokuapp.com/submit',
      type: 'POST',
      processData: false,
      contentType: 'application/json',
      // contentType: 'application/octet-stream',
      data: data
      // data: makeblob('data:image/jpeg;base64,9j/4AAQSkZJRgA..........gAooooAKKKKACiiigD//Z')
    })
      .done(function(data) {
        alert("success");
      })
      .fail(function() {
        alert("error");
      });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path='/survey' component={() => <Survey onSave={this.handleSave}/>}/>
        <Route path='/camera' component={() => <Camera onSave={this.handleSave} handleSubmit={this.handleSubmit}/>}/>
        <Route path='/finish' component={() => <Finish/>} />
      </Switch>
    )
  }

}
