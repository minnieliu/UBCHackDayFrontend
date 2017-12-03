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

const makeblob = function (dataURL) {
  var BASE64_MARKER = ';base64,';
  if (dataURL.indexOf(BASE64_MARKER) == -1) {
    var parts = dataURL.split(',');
    var contentType = parts[0].split(':')[1];
    var raw = decodeURIComponent(parts[1]);
    return new Blob([raw], { type: contentType });
  }
  var parts = dataURL.split(BASE64_MARKER);
  var contentType = parts[0].split(':')[1];
  // var raw = new Blob(dataURL, {type:"text/plain"});
  
  var raw = new Blob(parts[1], {type:"text/plain"});
  // var raw = window.atob(parts[1]);
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
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
    const str = 'data:image/jpeg;base64,' + this.state.camera;
    const data = {
      ...this.state.survey,
      imaqe: makeblob(str)
    };
    console.log(data);
    // $.ajax({
    //   url: 'https://api.projectoxford.ai/vision/v1/ocr?',
    //   type: 'POST',
    //   processData: false,
    //   contentType: 'application/octet-stream',
    //   data: {
    //     survey: this.state.survey,
    //     camera: makeblob('data:image/jpeg;base64,' + this.state.camera)
    //   }
    //   // data: makeblob('data:image/jpeg;base64,9j/4AAQSkZJRgA..........gAooooAKKKKACiiigD//Z')
    // })
    //   .done(function(data) {
    //     alert("success");
    //   })
    //   .fail(function() {
    //     alert("error");
    //   });
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
