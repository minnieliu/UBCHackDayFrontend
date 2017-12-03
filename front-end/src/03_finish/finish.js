import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import check from './checks.png';


class Finish extends Component {

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
    return (
      <div style={styles.container}>
       <h1>
           Thank you for your submission!
           </h1>
          <img src={check} alt = "check"/>
          <h2>Check your email to see who you have matched with.</h2>


          <Link style={styles.button} to='/'>Start Again</Link>


      </div>
    );
  }
}

export default Finish;

const styles = {
    container: {
        backgroundColor: '#b1f9eb',
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