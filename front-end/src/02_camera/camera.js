import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';

class Camera extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screenshot: null,
            tab: 0
        };
    }
              setRef = (webcam) => {
                  this.webcam = webcam;
              }

              capture = () => {
                  const screenshot = this.webcam.getScreenshot();
                  this.setState({ screenshot });

              };

              render() {
                  return (
                      <div>
                          <Webcam
                              audio={false}
                              height={350}
                              ref={node => this.webcam = node}
                              screenshotFormat="image/jpeg"
                              width={350}
                          />
                          <button onClick={this.capture}>Capture photo</button>
                          <Link to='/finish'>Finish</Link>
                      {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
                      </div>


                  );
              }
          }


export default Camera;
