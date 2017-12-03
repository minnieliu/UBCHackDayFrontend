import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

class Intro extends Component {


  render() {
    return (
      <div style={styles.container}>
        <h1 style={{color: '#FFF'}}>LOGO</h1>
        <p style={{color: '#FFF', fontSize: 18, width: '50%', textAlign: 'center'}}>
          Welcome to .... !
        </p>
        <Link style={styles.button} to='/survey'>START!</Link>
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
    backgroundColor: '#5ddc81'
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
    boxShadow: '0 0 5px grey'
  }
};
