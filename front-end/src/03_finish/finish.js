import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import check from './checks.png';
import { RaisedButton } from 'material-ui';

class Finish extends Component {
  render() {
    return (
      <div style={styles.container}>
       <h1>
           Thank you for your submission!
           </h1>
          <img src={check} alt = "check"/>
          <h2>Check your email to see who you have matched with.</h2>
          <RaisedButton style={styles.buttonContainer}>
          <Link to='/'>Back to Start</Link>
              </RaisedButton>

      </div>
    );
  }
}

export default Finish;

const styles = {
    container: {
        backgroundColor: '#67c2ff',
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        flexFlow: 'column',
        height: '100%',
        width: '100%',
        margin: 0,
        resizeMode: 'cover',
        flex: 1,

        color: '#FFF',
        height: 'min-content',
        minHeight: 1600,
        width: '100%',
        margin: 0

    },
    buttonContainer: {
        alignItems: 'baseline',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }

}