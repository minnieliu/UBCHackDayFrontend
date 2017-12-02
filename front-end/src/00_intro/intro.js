import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

class Intro extends Component {


  render() {
    return (
      <div style={styles.container}>
        <h1 style={{color: '#FFF'}}>LOGO</h1>
        <p style={{color: '#FFF', fontSize: 18, width: '50%'}}>
          Welcome to .... !
        </p>
        <RaisedButton style={styles.button}>
          <Link to='/survey'>START!</Link>
        </RaisedButton>
      </div>
    );
  }
}

export default Intro;

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#72ff99'
  },
  button: {
    backgroundColor: '#7ebaff',
    color: '#FFF'
  }
};
