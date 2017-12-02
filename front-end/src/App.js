import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from 'react-webcam';

/*class App extends Component  {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/



class App extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({imageSrc});

  };

  render() {
    return (
        <div>
          <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={350}
          />
          <button onClick={this.capture}>Capture photo</button>
        </div>
    );
  }
}


export default App;
