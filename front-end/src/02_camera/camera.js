import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Camera extends Component {
  render() {
    return (
      <div>
        Camera Screen
        <Link to='/finish'>Finish</Link>

      </div>
    );
  }
}

export default Camera;
