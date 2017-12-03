import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import peace from './peace-sign2.png';
import RaisedButton from 'material-ui/RaisedButton';

class Intro extends Component {


  render() {
    return (
      <div style={styles.container}>
          <img src={peace} alt = "peace" width={150}/>
         <p style={{color: '#FFF', fontSize: 64, textAlign: 'center', fontWeight: 'bold'}}>
          Welcome to Connect2!
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
