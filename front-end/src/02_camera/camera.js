import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';

class Camera extends React.Component {
              setRef = (webcam) => {
                  this.webcam = webcam;
              }

              capture = () => {
                  const imageSrc = this.webcam.getScreenshot();
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
                      </div>
                  );
              }
          }


export default Camera;
