import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Intro extends Component {


  render() {
    return (
      <div>
        Intro Screen

        <Link to='/survey'>Home</Link>
      </div>
    );
  }
}

export default Intro;
