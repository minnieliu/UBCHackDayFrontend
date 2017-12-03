import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import { RaisedButton } from 'material-ui';


class Camera extends React.Component {

    componentDidMount () {
        window.scrollTo(0, 0)
    }

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

              finish = () => {
                  this.props.onSave('camera', this.state.screenshot);

              }

              render() {
                  return (
                      <div style={styles.scrollContainer}>
                          <h1>Take a picture of how you're feeling!</h1>
                          <Webcam
                              audio={false}
                              height={600}
                              ref={node => this.webcam = node}
                              screenshotFormat="image/jpeg"
                              width={600}
                          />
                            <button style={styles.button} onClick={(event) => {this.capture()}}>Take photo</button>

                          {this.state.screenshot? <h1>Click finish if you are happy with this picture!</h1> : null}
                          {this.state.screenshot ? <img src={this.state.screenshot} /> : null}

                            <Link style={styles.button} onClick = {() => this.finish()} to='/finish'>Finish</Link>

                      </div>
                  );
              }
          }


export default Camera;


const styles = {
    container: {
        backgroundColor: '#E28989',
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        flexFlow: 'column',
        height: '100%',
        width: '100%',
        margin: 0
    },

    scrollContainer: {
        backgroundColor: '#E28989',
        display: 'flex',
        flex: 'none',
        flexFlow: 'column',
        alignItems: 'center',

        color: '#FFF',
        height: 'min-content',
        minHeight: 1600,
        width: '100%',
        margin: 0

    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7ebaff',
        color: '#FFF',
        height: 50,
        width: 150,
        borderRadius: 25,
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20
    }

}

